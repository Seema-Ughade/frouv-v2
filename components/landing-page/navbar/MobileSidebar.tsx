"use client";

import { memo } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { MENU_ITEMS } from "./menu-items";
import { useRouter } from "next/navigation";


interface User {
  firstName: string | null;
  email: string;
  role: string;
}

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  userName: string;
  pincode: string | null;
  isAdmin: boolean;
  isVendor: boolean;
  isRegularUser: boolean;
  onLogout: () => void;
  isLoadingLogout: boolean;
}

function MobileSidebar({
  isOpen,
  onClose,
  user,
  userName,
  pincode,
  isAdmin,
  isVendor,
  isRegularUser,
  onLogout,
  isLoadingLogout,
}: MobileSidebarProps) {

  const router = useRouter();

  const handleMenuClick = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <button
          aria-label="Close sidebar overlay"
          onClick={onClose}
          className="fixed lg:hidden inset-0 z-40 lg:bg-black/40"
        />
      )}

      <aside
        aria-label="Mobile sidebar"
        className={`fixed right-0 top-0 z-50 lg:hidden h-full w-[310px] bg-white shadow-xl transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        role="dialog"
        aria-modal="true"
      >

        <div className="h-6" />
        <button
          aria-label="Close sidebar"
          className="absolute left-2.5 rounded-sm  top-3 inline-flex h-6 w-6 items-center justify-center"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </button>
        <div className="relative mx-4 w-[265px] flex h-[calc(100dvh-56px)] flex-col gap-8 pb-6 overflow-y-auto">


          <div className="flex w-full flex-col gap-4">
            {user && (
              <>
                <div className="text-left border-b border-[#9E9E9E] pt-7 pb-5 ">
                  <p className="text-lg font-semibold mb-1 text-gray-900">{userName}</p>
                  <p className="text-[14px] text-[#9E9E9E]">
                    {user.email}
                  </p>
                </div>

                {/* {(isAdmin || isVendor) && (
                  <Link
                    href={isAdmin ? "/admin/dashboard" : "/vendor/home"}
                    className="h-[48px] w-full rounded-[8px] bg-[#78B13F] text-white font-medium hover:bg-[#689f38] flex items-center justify-center"
                    onClick={onClose}
                  >
                    {isAdmin ? "Admin Dashboard" : "Vendor Dashboard"}
                  </Link>
                )} */}

                {/* {(isRegularUser) && (
                  <Link
                    href="/user/personal-info"
                    className="h-[48px] w-full rounded-[8px] text-[#78B13F] border border-[#78B13F] hover:text-white font-medium hover:bg-[#689f38] flex items-center justify-center"
                    onClick={onClose}
                  >
                    Profile
                  </Link>
                )} */}


              </>
            )}
            {!user && (
              <div className="text-left border-b border-[#9E9E9E] pt-7 pb-5 ">
                <p className="text-lg font-semibold mb-1 text-gray-900">Hello,</p>
                <p className="text-[14px] text-[#9E9E9E]">
                  Please login to access your account.
                </p>
              </div>
            )}
            {user && (

              <div className="flex flex-col gap-1">
                {MENU_ITEMS.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => handleMenuClick(item.path)}
                    className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-gray-100 text-left"
                  >
                    <span>{item.icon}</span>
                    <span className="text-[15px] text-gray-700">{item.label}</span>
                  </button>
                ))}
              </div>

            )}

            <div className="mt-auto flex flex-col gap-3">
              {/* Admin / Vendor Dashboard */}
              {user && (isAdmin || isVendor) && (
                <Link
                  href={isAdmin ? "/admin/dashboard" : "/vendor/home"}
                  className="h-12 w-full rounded-lg bg-[#78B13F] text-white font-medium hover:bg-[#689f38] flex items-center justify-center"
                  onClick={onClose}
                >
                  {isAdmin ? "Admin Dashboard" : "Vendor Dashboard"}
                </Link>
              )}


              {!user ? (
                <>
                  <LoginLink
                    className="h-12 w-full rounded-lg bg-[#78B13F] text-white font-medium flex items-center justify-center"
                    onClick={onClose}
                  >
                    Login / Register
                  </LoginLink>

                  <Link
                    href="/vendor/login"
                    className="h-12 w-full rounded-lg border border-[#78B13F] text-[#78B13F] font-medium flex items-center justify-center hover:bg-[#689f38] hover:text-white"
                    onClick={onClose}
                  >
                    Become a Seller
                  </Link>
                </>
              ) : (
                <button
                  onClick={onLogout}
                  disabled={isLoadingLogout}
                  className="h-12 w-full rounded-lg bg-[#78B13F] text-white font-medium disabled:opacity-50"
                >
                  {isLoadingLogout ? "Logging out..." : "Logout"}
                </button>
              )}

            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default memo(MobileSidebar);

