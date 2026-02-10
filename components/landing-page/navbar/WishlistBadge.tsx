"use client";

import { useEffect, useState } from "react";
// import { getWishlistCount } from "@/lib/actions/user-actions";

export default function WishlistBadge() {
  const [wishlistCount, setWishlistCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let isMounted = true;
    let retryCount = 0;
    const maxRetries = 3;

    const fetchWishlistCount = async () => {
      try {
        const result = await getWishlistCount();
        if (isMounted) {
          setWishlistCount(result.count || 0);
          retryCount = 0; // Reset retry count on success
        }
      } catch (error) {
        console.error('Failed to fetch wishlist count:', error);
        // Retry logic with exponential backoff
        if (retryCount < maxRetries && isMounted) {
          retryCount++;
          const delay = Math.min(1000 * Math.pow(2, retryCount), 10000);
          setTimeout(fetchWishlistCount, delay);
        }
      }
    };

    fetchWishlistCount();
    
    // Refresh wishlist count periodically (increased interval to reduce load)
    const interval = setInterval(() => {
      if (isMounted) {
        fetchWishlistCount();
      }
    }, 5000);
    
    // Listen for wishlist updates via custom event
    const handleWishlistUpdate = () => {
      if (isMounted) {
        fetchWishlistCount();
      }
    };
    
    window.addEventListener('wishlistUpdated', handleWishlistUpdate);
    window.addEventListener('storage', handleWishlistUpdate);
    window.addEventListener('focus', fetchWishlistCount);
    
    return () => {
      isMounted = false;
      clearInterval(interval);
      window.removeEventListener('wishlistUpdated', handleWishlistUpdate);
      window.removeEventListener('storage', handleWishlistUpdate);
      window.removeEventListener('focus', fetchWishlistCount);
    };
  }, [mounted]);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted || wishlistCount === 0) return null;

  return (
    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#8BC34A] text-[9px] font-bold text-white shadow-md border border-white">
      {wishlistCount > 99 ? '99+' : wishlistCount}
    </span>
  );
}
