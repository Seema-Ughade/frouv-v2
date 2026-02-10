"use client"

import { usePathname } from "next/navigation"
import { useMemo } from "react"
import Navbar from "@/components/landing-page/Navbar"
import { useState } from "react";
import NavaWorksPage from "@/components/main-page/NavaWorksPage";
import LandingPageUI from "@/components/main-page/LandingPageUI";

export default function ConditionalNavbar() {
  const pathname = usePathname()
    const [isLanding, setIsLanding] = useState(false);
  
  // Memoize the visibility check to prevent unnecessary re-renders
  const shouldShowNavbar = useMemo(() => {
    // Auth pages where Navbar should not be shown
    const authPages = [
      "/user/login",
      "/user/register",
      "/vendor/login",
      "/admin/login"
    ]
    
    const isAuthPage = authPages.includes(pathname)
    const isVendorRoute = pathname.startsWith("/vendor")
    
    return !isAuthPage && !isVendorRoute
  }, [pathname])
  
  if (!shouldShowNavbar) {
    return null
  }
  
  return           <>
      <Navbar
        isLanding={isLanding}
        onToggle={() => setIsLanding(!isLanding)}
      />

      {/* 👇 PAGE SWITCH WITHOUT RELOAD */}
      {isLanding ? <LandingPageUI /> : <NavaWorksPage />}
    </>


}


