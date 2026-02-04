
"use client";

import Image, { type StaticImageData } from "next/image";
import type { FC } from "react";
import img1 from "../../public/frouv-v2/banner/banner1.webp";

interface FunFactProps {
  title?: string;
  content?: string;
  image?: StaticImageData | string;
  alt?: string;
}

const FunFact: FC<FunFactProps> = ({
  title = "Fun Fact !!",
  content = "The combined weight of ants on the planet is higher than all human beings. The world has over 7 billion people, and 100 trillion ants.",
  image = img1,
  alt = "Cartoon ant on a leaf",
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-3 py-4">
      <div className="bg-green-50 border border-green-200 rounded-2xl shadow-sm md:p-6 p-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">

        {/* Image (Mobile first – centered) */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:col-span-3 mx-auto md:mx-0 order-1 md:order-last">
          <Image
            src={image || "/placeholder.svg"}
            alt={alt}
            fill
            sizes="96px"
            className="object-contain"
            priority
          />
        </div>

        {/* Title & Content */}
        <div className="md:col-span-9 text-center md:text-left order-2">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed font-medium">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FunFact;
