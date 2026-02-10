"use client";

import { useEffect, useState } from "react";
// import { getCartCount } from "@/lib/actions/user-actions";

export default function CartBadge() {
  const [cartCount, setCartCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let isMounted = true;
    let retryCount = 0;
    const maxRetries = 3;

    const fetchCartCount = async () => {
      try {
        const result = await getCartCount();
        if (isMounted) {
          setCartCount(result.count || 0);
          retryCount = 0; // Reset retry count on success
        }
      } catch (error) {
        console.error('Failed to fetch cart count:', error);
        // Retry logic with exponential backoff
        if (retryCount < maxRetries && isMounted) {
          retryCount++;
          const delay = Math.min(1000 * Math.pow(2, retryCount), 10000);
          setTimeout(fetchCartCount, delay);
        }
      }
    };

    fetchCartCount();
    
    // Refresh cart count periodically (increased interval to reduce load)
    const interval = setInterval(() => {
      if (isMounted) {
        fetchCartCount();
      }
    }, 5000);
    
    // Listen for cart updates via custom event
    const handleCartUpdate = () => {
      if (isMounted) {
        fetchCartCount();
      }
    };
    
    window.addEventListener('cartUpdated', handleCartUpdate);
    window.addEventListener('storage', handleCartUpdate);
    window.addEventListener('focus', fetchCartCount);
    
    return () => {
      isMounted = false;
      clearInterval(interval);
      window.removeEventListener('cartUpdated', handleCartUpdate);
      window.removeEventListener('storage', handleCartUpdate);
      window.removeEventListener('focus', fetchCartCount);
    };
  }, [mounted]);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted || cartCount === 0) return null;

  return (
    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#8BC34A] text-[9px] font-bold text-white shadow-md border border-white">
      {cartCount > 99 ? '99+' : cartCount}
    </span>
  );
}
