"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { MENU_ITEMS } from "./menu-items";

interface UserDropdownProps {
  userName: string;
  isOpen: boolean;
  onToggle: () => void;
  onMenuClick: (path: string) => void;
  onLogout: () => void;
}

export default function UserDropdown({
  userName,
  isOpen,
  onToggle,
  onMenuClick,
  onLogout,
}: UserDropdownProps) {
  return (
    <>
      <button
        onClick={onToggle}
        className="flex text-[16px] items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 font-medium rounded-lg"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_3250_56220)">
            <path
              d="M12.0002 11.3333C12.9231 11.3333 13.8254 11.0596 14.5928 10.5469C15.3603 10.0341 15.9584 9.30525 16.3116 8.45252C16.6648 7.5998 16.7572 6.66149 16.5772 5.75625C16.3971 4.851 15.9526 4.01948 15.3 3.36684C14.6473 2.71419 13.8158 2.26974 12.9106 2.08967C12.0053 1.90961 11.067 2.00202 10.2143 2.35523C9.36158 2.70844 8.63275 3.30658 8.11997 4.07401C7.60719 4.84144 7.3335 5.74369 7.3335 6.66667C7.3335 7.90435 7.82516 9.09133 8.70033 9.9665C9.5755 10.8417 10.7625 11.3333 12.0002 11.3333ZM12.0002 3.33334C12.6594 3.33334 13.3039 3.52883 13.8521 3.8951C14.4002 4.26137 14.8275 4.78197 15.0798 5.39106C15.3321 6.00014 15.3981 6.67037 15.2694 7.31697C15.1408 7.96357 14.8234 8.55752 14.3572 9.02369C13.891 9.48987 13.2971 9.80734 12.6505 9.93595C12.0039 10.0646 11.3336 9.99856 10.7246 9.74627C10.1155 9.49397 9.59487 9.06673 9.2286 8.51857C8.86233 7.97041 8.66683 7.32594 8.66683 6.66667C8.66683 5.78261 9.01802 4.93477 9.64314 4.30965C10.2683 3.68452 11.1161 3.33334 12.0002 3.33334Z"
              fill="#9E9E9E"
            />
            <path
              d="M20.3135 16.2495C19.2444 15.1195 17.956 14.2194 16.5272 13.6043C15.0984 12.9891 13.5591 12.6719 12.0035 12.6719C10.4479 12.6719 8.90863 12.9891 7.4798 13.6043C6.05098 14.2194 4.76263 15.1195 3.6935 16.2495C3.46171 16.497 3.33297 16.8236 3.3335 17.1628V20.6695C3.3335 21.0231 3.47397 21.3622 3.72402 21.6123C3.97407 21.8623 4.31321 22.0028 4.66683 22.0028H19.3335C19.6871 22.0028 20.0263 21.8623 20.2763 21.6123C20.5264 21.3622 20.6668 21.0231 20.6668 20.6695V17.1628C20.6692 16.8246 20.5429 16.4981 20.3135 16.2495ZM19.3335 20.6695H4.66683V17.1561C5.61165 16.1612 6.74902 15.369 8.00974 14.8277C9.27045 14.2863 10.6281 14.0071 12.0002 14.0071C13.3722 14.0071 14.7299 14.2863 15.9906 14.8277C17.2513 15.369 18.3887 16.1612 19.3335 17.1561V20.6695Z"
              fill="#9E9E9E"
            />
          </g>
          <defs>
            <clipPath id="clip0_3250_56220">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        {userName || "Profile"}
        <ChevronDown
          className={`w-4 h-4 font-inter transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 ml-4 mt-2 w-[200px] bg-white rounded-lg shadow-[0px_4px_4px_0px_#00000040] z-50">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.value}
              href={item.path}
              onClick={() => onMenuClick(item.path)}
              className="w-full text-left px-2 py-3 flex items-center gap-3 hover:bg-gray-50"
            >
              <span>{item.icon}</span>
              <span className="text-gray-700 text-[16px]">{item.label}</span>
            </Link>
          ))}
          <button
            onClick={onLogout}
            className="w-full text-left px-4 py-3 text-red-600 hover:bg-gray-50"
          >
            Log out
          </button>
        </div>
      )}
    </>
  );
}

