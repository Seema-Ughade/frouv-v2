"use client";

import { useState } from "react";
import Link from "next/link";

type CategoryItem = {
  id: number;
  sub_category: string;
  slug: string;
  imageUrl: string;
};

export default function BeautyPersonalCare() {
  const [loading, setLoading] = useState(false);

  const itemsToRender: CategoryItem[] = [
    {
      id: 1,
      sub_category: "Fruits & Vegetables",
      slug: "fruits-vegetables",
      imageUrl: "/frouv-v2/banner/banner1.webp",
    },
    {
      id: 2,
      sub_category: "Dairy Products",
      slug: "dairy-products",
      imageUrl: "/frouv-v2/banner/banner2.png",
    },
    {
      id: 3,
      sub_category: "Snacks",
      slug: "snacks",
      imageUrl: "/frouv-v2/banner/banner3.png",
    },
    {
      id: 4,
      sub_category: "Beverages",
      slug: "beverages",
      imageUrl: "/frouv-v2/banner/banner4.webp",
    },
  ];
  return (
    <section className="w-full shadow-sm ring-1 dark:border border-white ring-black/5 rounded-xl p-4">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-6">
        <h2 className="text-lg text-green-900 dark:text-white sm:text-xl font-semibold tracking-tight">
          Beauty & Personal Care
        </h2>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[350px] sm:h-[460px] md:h-[200px] lg:h-[480px] md:grid-cols-4 md:grid-rows-1 lg:grid-cols-2 lg:grid-rows-2">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden shadow-md bg-gray-200 animate-pulse"
              >
                <div className="w-full h-full bg-gray-300"></div>
                <div className="pointer-events-none absolute inset-x-1 bottom-1">
                  <div className="rounded-lg px-2 py-1 bg-gray-400 h-6 w-3/4"></div>
                </div>
              </div>
            ))
          : itemsToRender.map((item) => (
              <div
                key={item.id}
                className="relative rounded-xl overflow-hidden shadow-md group"
              >
                <Link
                  href={`/category/${item.slug}`}
                  prefetch={true}
                  className="block w-full h-full"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.sub_category}
                    className="w-full h-full object-cover"
                  />
                </Link>

                <div className="absolute left-0 right-0 bottom-2 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {/* <ProductActions pro={product} variant={0} /> */}
                </div>
              </div>
            ))}
      </div>
    </section>
  );
}
