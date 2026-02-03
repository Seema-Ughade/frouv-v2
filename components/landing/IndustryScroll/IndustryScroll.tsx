"use client";

import { useEffect, useRef } from "react";

const industries = [
  "Healthcare",
  "Fintech",
  "Security",
  "AI/ML",
  "IOT",
  "Martech",
  "Ecommerce",
];

export function IndustryScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInteracting = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scroll = 0;

    const animate = () => {
      if (!isInteracting.current) {
        scroll += 0.4;

        if (scroll >= container.scrollWidth / 2) {
          scroll = 0;
        }

        container.scrollLeft = scroll;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleUserStart = () => {
    isInteracting.current = true;
  };

  const handleUserEnd = () => {
    setTimeout(() => {
      isInteracting.current = false;
    }, 1200);
  };

  return (
    <div className="bg-[#F8F8F8] py-10">
    <div className="w-full max-w-[1440px] mx-auto lg:min-h-[210px] h-[130px]  bg-[#1B1B1B]">
      {/* Title */}
      <h2 className="text-white robotoText text-center h-[31px] lg:py-12 py-6 lg:text-[24px] text-[12px] font-medium py-8">
        We empower product focussed companies across
      </h2>

      {/* Scroll strip */}
      <div className="w-full mt-1 lg:h-[84px] h-[44px] overflow-hidden">
        <div
          ref={containerRef}
          className="flex  h-full items-center whitespace-nowrap overflow-x-auto scrollbar-hide"
          onMouseEnter={handleUserStart}
          onMouseLeave={handleUserEnd}
          onTouchStart={handleUserStart}
          onTouchEnd={handleUserEnd}
          onWheel={handleUserStart}
          onScroll={handleUserEnd}
        >
          {[...industries, ...industries].map((item, index) => (
            <span
              key={index}
              className="mx-10 text-white robotoText lg:text-[24px] text-[12px] font-medium flex-shrink-0"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scrollbar hide */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
    </div>
  );
}
