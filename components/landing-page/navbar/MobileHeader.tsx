"use client";

import { memo } from "react";
import Link from "next/link";
import { Menu, ShoppingCart, Heart } from "lucide-react";
import Logo from "./Logo";
import CartBadge from "./CartBadge";
import WishlistBadge from "./WishlistBadge";

interface User {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  role: string;
}

interface MobileHeaderProps {
  user: User | null;
  onMenuClick: () => void;
  mounted: boolean;
}


function MobileHeader({ onMenuClick, mounted, user, }: MobileHeaderProps) {
  return (
    <div className="lg:hidden w-full border-b border-gray-200">
      <div className="w-full h-[75px] px-2 py-1 flex items-center justify-between">
        <div className="flex items-center h-[47px] w-[137px] gap-6">
          <Logo variant="mobile" priority={mounted} />
        </div>

        <div className="flex items-center sm:gap-7 gap-5 md:gap-9">
          <Link
            href={user ? "/user/cart" : "/user/login"}
            aria-label="Cart"
            className="text-gray-700 relative"
          >
            <ShoppingCart className="h-6 w-6" />
            {user && (
              <CartBadge />
            )}
          </Link>

          <Link
            href={user ? "/user/wishlist" : "/user/login"}
            aria-label="Wishlist"
            className="text-gray-700 relative"
          >
            <Heart className="h-6 w-6" />
            {user && (
              <WishlistBadge />
            )}
          </Link>
          <button
            aria-label="Open sidebar"
            className="inline-flex h-8 w-8 items-center justify-center text-gray-700"
            onClick={onMenuClick}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(MobileHeader);

