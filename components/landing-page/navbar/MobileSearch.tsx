"use client";

import { SearchIcon } from "lucide-react";

interface MobileSearchProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export default function MobileSearch({ value, onChange, onSubmit }: MobileSearchProps) {
  return (
    <div className="relative w-full md:hidden h-12 mt-2 px-2">
      <input
        type="text"
        placeholder="Search by product, brand, or category..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSubmit()}
        className="w-full h-full pl-4 pr-16 text-[14px] text-gray-700 border border-[#78B13F]/30 rounded-sm outline-none placeholder:text-gray-400"
      />
      <button
        type="button"
        onClick={onSubmit}
        className="absolute right-2 top-0 w-[58px] h-12 bg-[#78B13F] hover:bg-[#689f38] flex items-center justify-center rounded-r-sm"
      >
        <SearchIcon className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}

