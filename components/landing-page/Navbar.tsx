"use client";

import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
// import { getCurrentUserData } from "@/lib/actions/user-actions";
import { LocationModal } from "./navbar/header/location-modal";
import ManageAddressModal from "./navbar/header/address-manager/manage-address-modal";
import AddressInfoCard from "./navbar/header/address-manager/address-info-card";
import { LogoutConfirmModal } from "./navbar/logout-model/logout-confirm-modal";
import MobileHeader from "./navbar/MobileHeader";
import MobileSidebar from "./navbar/MobileSidebar";
import DesktopHeader from "./navbar/DesktopHeader";
import MobileSearch from "./navbar/MobileSearch";

// Global cache for user data to prevent repeated fetches across route changes
let cachedUserData: {
  user: {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    role: string;
  } | null;
  address: string | null;
} | null = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

interface NavbarProps {
  isLanding: boolean;
  onToggle: () => void;
}

export default function Navbar({ isLanding, onToggle }: NavbarProps) {
  const [mounted, setMounted] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [showAddressManager, setShowAddressManager] = useState(false);
  const [showAddressInfo, setShowAddressInfo] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState<{
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    role: string;
  } | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [mobileSearch, setMobileSearch] = useState("");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isLoadingLogout, setIsLoadingLogout] = useState(false);
  const hasFetchedRef = useRef(false);
  const isFetchingRef = useRef(false);

  const router = useRouter();

  useEffect(() => {
    setMounted(true);

    // Check cache first
    const now = Date.now();
    if (cachedUserData && (now - cacheTimestamp) < CACHE_DURATION) {
      setUser(cachedUserData.user);
      setAddress(cachedUserData.address);
      setIsLoadingUser(false);
      hasFetchedRef.current = true;
      return;
    }

    if (hasFetchedRef.current || isFetchingRef.current) {
      return;
    }

    const loadUser = async () => {
      if (isFetchingRef.current) return;

      isFetchingRef.current = true;
      try {
        const data = await getCurrentUserData();
        // Update cache
        cachedUserData = data;
        cacheTimestamp = Date.now();
        setUser(data.user);
        setAddress(data.address);
      } catch (err) {
        console.error("Failed to load user", err);
      } finally {
        setIsLoadingUser(false);
        hasFetchedRef.current = true;
        isFetchingRef.current = false;
      }
    };

    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onLocationClick = useCallback(() => {
    setShowAddressInfo(true);
  }, []);

  const handleMenuClick = useCallback((_value: string, path: string) => {
    router.push(path);
    setIsDropdownOpen(false);
  }, [router]);

  const userName = useMemo(() => user?.firstName || user?.email, [user]);

  const getPincode = useCallback((addressString: string | null): string | null => {
    if (!addressString) return null;
    const pincodeMatch = addressString.match(/\b\d{6}\b/);
    if (pincodeMatch) return pincodeMatch[0];
    const parts = addressString.split(',').map(s => s.trim());
    return parts[parts.length - 1] || null;
  }, []);

  const pincode = useMemo(() => getPincode(address), [address, getPincode]);

  const handleSearchSubmit = useCallback((value: string) => {
    const query = value.trim();
    if (!query) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
    setIsDropdownOpen(false);
  }, [router]);

  const handleMobileSearch = useCallback(() => handleSearchSubmit(mobileSearch), [mobileSearch, handleSearchSubmit]);

  const isAdmin = useMemo(() => user?.role === "ADMIN", [user]);
  const isVendor = useMemo(() => user?.role === "VENDOR", [user]);
  const isRegularUser = useMemo(() => user?.role === "USER", [user]);

  const handleDirectLogout = useCallback(async () => {
    setIsLoadingLogout(true);
    try {
      await fetch('/api/logout', { method: 'POST' });
      // Clear cache on logout
      cachedUserData = null;
      cacheTimestamp = 0;
      setUser(null);
      setAddress(null);
      router.push('/');
      router.refresh();
    } catch (error) {
      console.error('Failed to logout:', error);
    } finally {
      setIsLoadingLogout(false);
    }
  }, [router]);

  const handleLogoutClick = useCallback(async () => {
    if (isRegularUser) {
      setShowLogoutModal(true);
      try {
        await fetch('/api/logout', { method: 'POST' });
      } catch (error) {
        console.error('Failed to clear JWT:', error);
      }
    } else {
      await handleDirectLogout();
    }
  }, [isRegularUser, handleDirectLogout]);

  const handleOpenDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const handleCloseDrawer = useCallback(() => setIsDrawerOpen(false), []);
  const handleOpenAddressManager = useCallback(() => setShowAddressManager(true), []);
  const handleCloseAddressManager = useCallback(() => setShowAddressManager(false), []);
  const handleCloseAddressInfo = useCallback(() => setShowAddressInfo(false), []);
  const handleCloseLocationModal = useCallback(() => setIsLocationModalOpen(false), []);
  const handleCloseLogoutModal = useCallback(() => setShowLogoutModal(false), []);
  const handleDropdownToggle = useCallback(() => setIsDropdownOpen(prev => !prev), []);
  const handleMenuClickWrapper = useCallback((path: string) => handleMenuClick("", path), [handleMenuClick]);

  return (
    <>
      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={handleCloseLocationModal}
      />

      {showAddressInfo && (
        < ManageAddressModal
          onOpenManager={handleOpenAddressManager}
          onClose={handleCloseAddressInfo}
        />
      )}

      <header className="sticky top-0 z-50 w-full bg-white">
        <MobileHeader user={user} onMenuClick={handleOpenDrawer} mounted={mounted} />

        <MobileSidebar
          isOpen={isDrawerOpen}
          onClose={handleCloseDrawer}
          user={user}
          userName={userName || ""}
          pincode={pincode}
          isAdmin={isAdmin}
          isVendor={isVendor}
          isRegularUser={isRegularUser}
          onLogout={handleLogoutClick}
          isLoadingLogout={isLoadingLogout}
        />

        <DesktopHeader
          user={user}
          userName={userName || ""}
          pincode={pincode}
          isAdmin={isAdmin}
          isVendor={isVendor}
          isRegularUser={isRegularUser}
          isDropdownOpen={isDropdownOpen}
          onLocationClick={onLocationClick}
          onDropdownToggle={handleDropdownToggle}
          onMenuClick={handleMenuClickWrapper}
          onLogout={handleLogoutClick}
          onDirectLogout={handleDirectLogout}
          isLoadingLogout={isLoadingLogout}
                    isLanding={isLanding}
          onToggle={onToggle}

        />
      </header>

      <MobileSearch
        value={mobileSearch}
        onChange={setMobileSearch}
        onSubmit={handleMobileSearch}
      />

      {showAddressManager && (
        <ManageAddressModal onOpenManager={handleOpenAddressManager}
          onClose={handleCloseAddressManager} />
      )}
      <LogoutConfirmModal
        isOpen={showLogoutModal}
        onClose={handleCloseLogoutModal}
      />
    </>
  );
}
