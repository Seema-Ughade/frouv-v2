"use client";
import { usePathname } from "next/navigation";

export default function AnnouncementBar() {
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <div className="w-full bg-gradient-to-r from-[#7415B7] to-[#B85DF8]">
      <div className="max-w-[1440px] lg:min-h-[80px] h-[58px] mx-auto px-6 flex items-center justify-center relative">
        {/* Text */}
        <p className="text-white lg:text-[22px] text-[10px] robotoText font-medium text-center">
          Helping teams build clear brands and launch faster.
          <a
            href="#"
            className="underline decoration-solid decoration-white underline-offset-4 decoration-[1px] decoration-skip-ink-auto font-semibold"
          >
            Work with us
          </a>
        </p>

        {/* Close icon */}
        <button
          type="button"
          className="absolute right-0 text-white  leading-none "
          aria-label="Close"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" > <mask id="mask0_124_3194" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32" > <rect width="32" height="32" fill="#D9D9D9" /> </mask> <g mask="url(#mask0_124_3194)"> <path d="M8.53339 24.4103L7.58972 23.4667L15.0564 16L7.58972 8.53335L8.53339 7.58968L16.0001 15.0563L23.4667 7.58968L24.4104 8.53335L16.9437 16L24.4104 23.4667L23.4667 24.4103L16.0001 16.9437L8.53339 24.4103Z" fill="white" /> </g> </svg> </button>
      </div>
    </div>
  );
}
