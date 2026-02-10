"use client";

import { useState } from "react";
import Navbar from "@/components/landing/old-navbar/Navbar";
import NavaWorksPage from "@/components/main-page/NavaWorksPage";
import LandingPageUI from "@/components/main-page/LandingPageUI";

export default function NavbarWrapper() {
  const [isLanding, setIsLanding] = useState(false);

  return (
    <>
      <Navbar isLanding={isLanding} onToggle={() => setIsLanding(!isLanding)} />

      {/* 👇 PAGE SWITCH WITHOUT RELOAD */}
      {isLanding ? <LandingPageUI /> : <NavaWorksPage />}
    </>
  );
}
