"use client";

import Link from "next/link";
import { Heart, ShoppingCart,  Search } from "lucide-react";
import { FiHome, FiShoppingBag } from "react-icons/fi";
import { Themetoggle } from "./Themetoggle";

interface NavbarProps {
  isLanding: boolean;
  onToggle: () => void;
}
const logo = "/logo.webp";

export default function Navbar({ isLanding, onToggle }: NavbarProps) {
  return (
    <div className="">
      <div className=" z-50 bg-white dark:bg-black w-full mx-auto h-[92px] px-4 py-2 flex flex-col items-center">
        <div className="max-w-[1440px] w-full h-[76px] flex items-center justify-between">
          <div className="flex items-center gap-[38px] w-[609px] h-[76px]">
            <Link
              href="/"
              prefetch={true}
              className="w-[126px] relative h-[76px] flex items-center"
            >
              <img src={logo || "/placeholder.svg"} alt="Frouv Logo" width={126} height={76} className="object-contain" />
               <span className="absolute top-2 -right-2 rounded-2xl border border-[#FF9800] dark:border-white  px-2 py-0.5 text-[10px] font-semibold dark:text-white text-[#FF9800]">
                BETA
              </span>
            </Link>
          
        <div className="hidden md:flex items-center bg-white border border-gray-200 shadow-sm hover:shadow-md transition rounded-full px-4 py-2 w-[420px]">
          <input
            type="text"
            placeholder="Search products, brands..."
            className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
          />
          <button className="bg-[#78B13F] hover:bg-[#689f38] p-2 rounded-full transition">
            <Search className="w-4 h-4 text-white" />
          </button>
        </div>

          </div>

          <div className="flex items-center justify-end gap-[50px] ml-[59px]">

                                              <Themetoggle />

      
<button
  onClick={onToggle}
  className="relative w-[70px] h-[38px] rounded-full bg-white border border-gray-300 flex items-center p-[4px] shadow-sm transition-all duration-300"
>
  {/* Sliding Indicator */}
  <div
    className={`absolute top-[4px] left-[4px] w-[30px] h-[30px] rounded-full bg-[#78B13F] transition-transform duration-300 ${
      isLanding ? "translate-x-[32px]" : "translate-x-0"
    }`}
  />

  {/* Home */}
  <span
    className={`relative z-10 flex-1 flex items-center justify-center transition-colors duration-300 ${
      !isLanding ? "text-white" : "text-gray-500"
    }`}
  >
    <FiHome size={15} />
  </span>

  {/* Shop */}
  <span
    className={`relative z-10 flex-1 flex items-center justify-center transition-colors duration-300 ${
      isLanding ? "text-white" : "text-gray-500"
    }`}
  >
    <FiShoppingBag size={15} />
  </span>
</button>

            <div className="relative">
              <div className="flex items-center justify-end gap-[60px] w-[595px] h-[47px]">
                <div className="flex items-center gap-[60px]">
                  <Link href="" className="w-6 h-6 text-gray-700 dark:text-white cursor-pointer" > 
                  <Heart className="w-6 h-6" />
                  </Link>
                  <Link href="" className="w-6 h-6 text-gray-700 dark:text-white cursor-pointer relative" > 
                  <ShoppingCart className="w-6 h-6" />
                  </Link>
                </div>

                <div className="flex items-center gap-[42px] w-[449px] h-[47px]">
                  <Link
                    href=""
                    className="w-[193px] gap-2 h-[47px] border border-[#78B13F] dark:text-white dark:border-white dark:hover:border-[#78B13F] text-[#78B13F] flex items-center justify-center rounded-4xl font-inter font-semibold text-[16px] leading-none tracking-[0.01em] hover:bg-[#689f38] hover:text-white"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" > <g clipPath="url(#clip0_5330_156900)"> <path d="M14.666 3.33268H1.33268C1.15587 3.33268 0.986302 3.40292 0.861278 3.52794C0.736253 3.65297 0.666016 3.82254 0.666016 3.99935V6.66602C0.667175 7.07865 0.795935 7.48082 1.03464 7.81739C1.27335 8.15397 1.61032 8.40847 1.99935 8.54602V14.666C1.99935 14.8428 2.06959 15.0124 2.19461 15.1374C2.31964 15.2624 2.4892 15.3327 2.66602 15.3327H13.3327C13.5095 15.3327 13.6791 15.2624 13.8041 15.1374C13.9291 15.0124 13.9993 14.8428 13.9993 14.666V8.54602C14.3884 8.40847 14.7254 8.15397 14.9641 7.81739C15.2028 7.48082 15.3315 7.07865 15.3327 6.66602V3.99935C15.3327 3.82254 15.2624 3.65297 15.1374 3.52794C15.0124 3.40292 14.8428 3.33268 14.666 3.33268ZM9.99935 4.66602H11.3327V6.66602C11.3327 6.84283 11.2624 7.0124 11.1374 7.13742C11.0124 7.26244 10.8428 7.33268 10.666 7.33268C10.4892 7.33268 10.3196 7.26244 10.1946 7.13742C10.0696 7.0124 9.99935 6.84283 9.99935 6.66602V4.66602ZM7.33268 4.66602H8.66602V6.66602C8.66602 6.84283 8.59578 7.0124 8.47075 7.13742C8.34573 7.26244 8.17616 7.33268 7.99935 7.33268C7.82254 7.33268 7.65297 7.26244 7.52794 7.13742C7.40292 7.0124 7.33268 6.84283 7.33268 6.66602V4.66602ZM4.66602 4.66602H5.99935V6.66602C5.99935 6.84283 5.92911 7.0124 5.80409 7.13742C5.67906 7.26244 5.50949 7.33268 5.33268 7.33268C5.15587 7.33268 4.9863 7.26244 4.86128 7.13742C4.73625 7.0124 4.66602 6.84283 4.66602 6.66602V4.66602ZM2.66602 7.33268C2.4892 7.33268 2.31964 7.26244 2.19461 7.13742C2.06959 7.0124 1.99935 6.84283 1.99935 6.66602V4.66602H3.33268V6.66602C3.33268 6.84283 3.26244 7.0124 3.13742 7.13742C3.0124 7.26244 2.84283 7.33268 2.66602 7.33268ZM9.33268 13.9993H6.66602V12.666C6.66602 12.3124 6.80649 11.9733 7.05654 11.7232C7.30659 11.4732 7.64573 11.3327 7.99935 11.3327C8.35297 11.3327 8.69211 11.4732 8.94216 11.7232C9.19221 11.9733 9.33268 12.3124 9.33268 12.666V13.9993ZM12.666 13.9993H10.666V12.666C10.666 11.9588 10.3851 11.2805 9.88497 10.7804C9.38487 10.2803 8.70659 9.99935 7.99935 9.99935C7.29211 9.99935 6.61383 10.2803 6.11373 10.7804C5.61363 11.2805 5.33268 11.9588 5.33268 12.666V13.9993H3.33268V8.54602C3.57753 8.45464 3.8035 8.31906 3.99935 8.14602C4.36603 8.47399 4.84073 8.6553 5.33268 8.6553C5.82464 8.6553 6.29933 8.47399 6.66602 8.14602C7.0327 8.47399 7.50739 8.6553 7.99935 8.6553C8.4913 8.6553 8.966 8.47399 9.33268 8.14602C9.69936 8.47399 10.1741 8.6553 10.666 8.6553C11.158 8.6553 11.6327 8.47399 11.9993 8.14602C12.1952 8.31906 12.4212 8.45464 12.666 8.54602V13.9993ZM13.9993 6.66602C13.9993 6.84283 13.9291 7.0124 13.8041 7.13742C13.6791 7.26244 13.5095 7.33268 13.3327 7.33268C13.1559 7.33268 12.9863 7.26244 12.8613 7.13742C12.7363 7.0124 12.666 6.84283 12.666 6.66602V4.66602H13.9993V6.66602ZM2.86602 1.99935H13.3327C13.5095 1.99935 13.6791 1.92911 13.8041 1.80409C13.9291 1.67906 13.9993 1.50949 13.9993 1.33268C13.9993 1.15587 13.9291 0.986302 13.8041 0.861278C13.6791 0.736253 13.5095 0.666016 13.3327 0.666016H2.86602C2.6892 0.666016 2.51964 0.736253 2.39461 0.861278C2.26959 0.986302 2.19935 1.15587 2.19935 1.33268C2.19935 1.50949 2.26959 1.67906 2.39461 1.80409C2.51964 1.92911 2.6892 1.99935 2.86602 1.99935Z" /> </g> <defs> <clipPath id="clip0_5330_156900"> <rect width="16" height="16" fill="white" /> </clipPath> </defs> </svg>
                    <span>Become a seller</span>
                  </Link>
                  <Link href="" className="w-[193px] gap-1 h-[47px] dark:text-white dark:border-white bg-[#78B13F] flex items-center justify-center text-white rounded-4xl font-inter font-semibold text-[16px] leading-none tracking-[0.01em] hover:bg-[#689f38]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" > <g clipPath="url(#clip0_5330_156904)"> <path d="M12.0007 11.3333C12.9236 11.3333 13.8259 11.0596 14.5933 10.5469C15.3607 10.0341 15.9589 9.30525 16.3121 8.45252C16.6653 7.5998 16.7577 6.66149 16.5777 5.75625C16.3976 4.851 15.9531 4.01948 15.3005 3.36684C14.6478 2.71419 13.8163 2.26974 12.9111 2.08967C12.0058 1.90961 11.0675 2.00202 10.2148 2.35523C9.36207 2.70844 8.63324 3.30658 8.12046 4.07401C7.60768 4.84144 7.33398 5.74369 7.33398 6.66667C7.33398 7.90435 7.82565 9.09133 8.70082 9.9665C9.57599 10.8417 10.763 11.3333 12.0007 11.3333ZM12.0007 3.33334C12.6599 3.33334 13.3044 3.52883 13.8526 3.8951C14.4007 4.26137 14.828 4.78197 15.0802 5.39106C15.3325 6.00014 15.3986 6.67037 15.2699 7.31697C15.1413 7.96357 14.8238 8.55752 14.3577 9.02369C13.8915 9.48987 13.2976 9.80734 12.651 9.93595C12.0043 10.0646 11.3341 9.99856 10.725 9.74627C10.116 9.49397 9.59536 9.06673 9.22909 8.51857C8.86281 7.97041 8.66732 7.32594 8.66732 6.66667C8.66732 5.78261 9.01851 4.93477 9.64363 4.30965C10.2687 3.68452 11.1166 3.33334 12.0007 3.33334Z" fill="white" /> <path d="M20.314 16.2475C19.2449 15.1175 17.9565 14.2174 16.5277 13.6023C15.0989 12.9872 13.5596 12.6699 12.004 12.6699C10.4484 12.6699 8.90911 12.9872 7.48029 13.6023C6.05147 14.2174 4.76311 15.1175 3.69399 16.2475C3.46219 16.4951 3.33346 16.8217 3.33399 17.1608V20.6675C3.33399 21.0211 3.47446 21.3603 3.72451 21.6103C3.97456 21.8604 4.3137 22.0008 4.66732 22.0008H19.334C19.6876 22.0008 20.0267 21.8604 20.2768 21.6103C20.5268 21.3603 20.6673 21.0211 20.6673 20.6675V17.1608C20.6697 16.8226 20.5434 16.4961 20.314 16.2475ZM19.334 20.6675H4.66732V17.1542C5.61214 16.1593 6.74951 15.3671 8.01022 14.8257C9.27094 14.2843 10.6286 14.0052 12.0007 14.0052C13.3727 14.0052 14.7304 14.2843 15.9911 14.8257C17.2518 15.3671 18.3892 16.1593 19.334 17.1542V20.6675Z" fill="white" /> </g> <defs> <clipPath id="clip0_5330_156904"> <rect width="24" height="24" fill="white" /> </clipPath> </defs> </svg> 
                    <span>Login / Register</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
