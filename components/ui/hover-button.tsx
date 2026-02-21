'use client';

import React from 'react';

interface HoverButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export function HoverButton({
  children,
  href,
  className = '',
}: HoverButtonProps) {
  return (
    <button
      className={`
        relative overflow-hidden
        transition-colors duration-300
        group rounded-full          
        ${className}
      `}
    >
      {/* Half-circle hover background */}
      <span
        className=" absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[140%] 
        aspect-square rounded-full bg-[#9542cf] scale-0 origin-top 
        transition-transform duration-500 ease-out group-hover:scale-100 " /> 
      {/* Text */}
      <span className="relative z-10 group-hover:text-white flex items-center justify-center gap-2 transition-colors duration-300">
        {children}
      </span>
    </button>
  );
} 