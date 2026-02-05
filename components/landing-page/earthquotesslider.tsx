"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const EarthQuotesSlider: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    created: (instance) => {
      if (timer.current) clearInterval(timer.current);
      timer.current = setInterval(() => {
        instance.next();
      }, 4000);
    },
    destroyed: () => {
      if (timer.current) clearInterval(timer.current);
    },
  });

  const quotes = [
    "The Earth does not belong to us: we belong to the Earth. 🌿",
    "Protect our planet like your home — because it is. 🌎",
    "Nature doesn’t need us, but we need nature. 🌱",
  ];

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 0);

    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="w-full mt-6 flex justify-center items-center">
        <div className="bg-gray-100 border border-gray-200 text-center py-4 px-6 rounded-md shadow-sm w-full  animate-pulse  flex items-center justify-center">
          <div className="h-10 bg-gray-200 rounded lg:w-3/6 sm:w-3/5  w-3/4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mt-6">
      <div ref={sliderRef} className="keen-slider">
        {quotes.map((quote, index) => (
          <div
            key={index}
            className="keen-slider__slide flex justify-center items-center"
          >
            <div className="bg-green-100 border border-green-200 text-center text-lg text-black py-4 px-6 rounded-md shadow-sm w-full">
              {quote}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarthQuotesSlider;
