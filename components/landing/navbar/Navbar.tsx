"use client";

import { useState } from "react";
import AnnouncementBar from "../AnnouncementBar";
import CallButton from "./CallButton";
import Logo from "./Logo";
import Navlinks from "./NavLinks";
import { usePathname } from "next/navigation";
import { FiHome, FiShoppingBag } from "react-icons/fi";

type Props = {
  isLanding: boolean;
  onToggle: () => void;
};

const Navbar = ({ isLanding, onToggle }: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const pathname = usePathname();

  // Home page only
  const isHome = pathname === "/";

  return (
    <>
      <div className="block sticky z-50 top-0 lg:hidden">
        <AnnouncementBar />
      </div>
      <nav
        className={`w-full ${
          isHome ? "lg:mt-[80px]" : "lg:mt-0"
        } mt-0 lg:fixed top-0 left-0 right-0 z-50 bg-white box-border`}
      >
        <div className="flex items-center justify-between mx-auto max-w-[1440px] lg:h-[96px] h-[64px] px-4 md:px-8">
          <Logo />


<button
  onClick={onToggle}
  className="relative w-[250px] h-[48px] rounded-full 
  bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100
  backdrop-blur-md shadow-inner flex items-center p-1
  transition-all duration-300 ease-out hover:shadow-lg shadow-sm"
>
  {/* Sliding Indicator */}
  <div
    className={`absolute top-1 left-1 w-[125px] h-[40px] rounded-full 
    bg-gradient-to-r from-indigo-600 to-violet-600
    shadow-xl transition-transform duration-300 ease-out
    ${isLanding ? "translate-x-[118px]" : "translate-x-0"}`}
  />

  {/* Left Option */}
  <span
    className={`relative z-10 w-1/2 flex items-center justify-center gap-2 
    text-sm font-medium transition-colors duration-300
    ${!isLanding ? "text-white" : "text-gray-700"}`}
  >
    <FiHome className="text-base robotoText" />
    NavaWorks
  </span>

  {/* Right Option */}
  <span
    className={`relative z-10 w-1/2 flex items-center justify-center gap-2 
    text-sm font-medium transition-colors duration-300
    ${isLanding ? "text-white" : "text-gray-700"}`}
  >
    <FiShoppingBag className="text-base robotoText" />
    Frouv / Etsy
  </span>
</button>
          
          <div className="hidden md:flex items-center gap-4">
            <Navlinks />
            <CallButton />
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-4">
            <CallButton />
            {/* Optional: Hamburger menu for mobile if you have more nav links */}
            <button onClick={toggleMobileMenu} className="">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                
                <line
                  x1="1.42859"
                  y1="1.60714"
                  x2="18.5714"
                  y2="1.60714"
                  stroke="#1B1B1B"
                  strokeWidth="1.07143"
                />
                <line
                  x1="1.42859"
                  y1="18.0357"
                  x2="18.5714"
                  y2="18.0357"
                  stroke="#1B1B1B"
                  strokeWidth="1.07143"
                />
                <line
                  x1="9.66608"
                  y1="9.46429"
                  x2="18.5715"
                  y2="9.46429"
                  stroke="#1B1B1B"
                  strokeWidth="1.07143"
                />
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden fixed bg-white w-[180px] h-[146px]  top-[121px] left-[223px] rounded-[12px] border-[0.6px] border-[#D3D3D3] ">
            <div className="px-5 py-6">
              {/* Navigation Links */}
              <div className="mb-8 robotoText">
                <div className="text-[#1B1B1B] robotoText mb-2 text-[14px]">
                  Services
                </div>
                <div className="text-[#1B1B1B] robotoText  mb-2 text-[14px]">
                  Our Works
                </div>
                <div className="text-[#1B1B1B] robotoText mb-2 text-[14px]">
                  Our Process
                </div>
                <div className="text-[#1B1B1B] robotoText mb-2 text-[14px]">
                  About Us
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
