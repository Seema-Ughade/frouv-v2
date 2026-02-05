"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import first from "../../public/frouv-v2/banner/banner1.webp";
import second from "../../public/frouv-v2/banner/banner2.png";
import third from "../../public/frouv-v2/banner/banner3.png";
import four from "../../public/frouv-v2/banner/banner4.webp";
import heroDesktop from "../../public/frouv-v2/banner/banner5.png";
import heroMobile from "../../public/frouv-v2/banner/banner5.png";

const offers = [
  {
    id: 0,
    title: "Neemtoys Kids Collection",
    imageDesktop: heroDesktop,
    imageMobile: heroMobile,
    discount: "20",
    brand: "neemtoys®",
    category: "Toys & Games",
    slug: "toys-games",
    type: "big",
  },
  {
    id: 1,
    title: "Organic Anand Grocery Deals",
    image: second,
    discount: "20",
    brand: "Organic Anand",
    category: "Groceries",
    slug: "Groceries",
    type: "small",
  },
  {
    id: 2,
    title: "Monsoon Skincare Sale",
    image: first,
    discount: "20",
    brand: "Shiva Organic",
    category: "Beauty & Personal Care",
    slug: "beauty-personal-care",
    type: "small",
  },
  {
    id: 3,
    title: "YOGEZ Organic Wellness Week",
    image: third,
    discount: "10",
    brand: "YOGEZ",
    category: "Beauty & Personal Care",
    slug: "beauty-personal-care",
    type: "small",
  },
  {
    id: 4,
    title: "Shiva Organic Groceries",
    image: four,
    discount: "20",
    brand: "Shiva Organic",
    category: "Groceries",
    slug: "Groceries",
    type: "small",
  },
];

const Banner: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const bigOffer = offers.find((o) => o.type === "big");
  const smallOffers = offers.filter((o) => o.type === "small");

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* Left Large Banner */}
      {bigOffer && (
        <div className="sm:col-span-2 relative h-52 sm:h-72 md:h-72 lg:h-[420px] rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/10">
          {isClient && (
            <Link
              href=""
              className="block w-full h-full relative"
            >
              {/* Desktop/Laptop Image */}
              <Image
                src={bigOffer.imageDesktop!}
                alt={bigOffer.title}
                fill
                priority
                className="hidden md:block object-fill"
              />

              {/* Mobile / Tablet Image */}
              <Image
                src={bigOffer.imageMobile!}
                alt={bigOffer.title}
                fill
                priority
                className="block md:hidden object-fill"
              />
            </Link>
          )}
        </div>
      )}

      {/* Right Side 2x2 Grid Banner */}
      <div className="sm:col-span-1 grid grid-cols-2 grid-rows-2 gap-3 h-96 sm:h-72 md:h-72 lg:h-[420px]">
        {smallOffers.map((offer) => (
          <Link
            key={offer.id}
            href={`/best-deals?category=${offer.slug}&discount=${offer.discount}&brand=${offer.brand}`}
            className="relative rounded-xl overflow-hidden shadow-sm ring-1 ring-black/10 group"
          >
            <Image
              src={offer.image!}
              alt={offer.title}
              fill
              className="object-cover md:transition-transform duration-500 md:group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-2 md:opacity-0 md:group-hover:opacity-100 md:transition duration-300">
              <p className="text-white text-sm font-medium">{offer.title}</p>
              <span className="mt-1 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                {offer.discount}% OFF
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Banner;
