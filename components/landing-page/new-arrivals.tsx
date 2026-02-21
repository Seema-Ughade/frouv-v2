"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

type Product = {
  id: number;
  img: string;
  title: string;
  price: string;
};

const products: Product[] = [
  { id: 1, img: "/frouv-v2/demo-product/p-1.png", title: "Premium Indian Garam Masala Spice", price: "948.95" },
  { id: 2, img: "/frouv-v2/demo-product/p-2.jpg", title: "Assorted Healthy Dry Fruits Mix", price: "452.85" },
  { id: 3, img: "/frouv-v2/demo-product/p-3.webp", title: "Organic Fine Flour and Suji", price: "450" },
  { id: 4, img: "/frouv-v2/demo-product/p-4.webp", title: "Nutritious Health Food Super Mix", price: "310.55" },
];

export default function FeaturedMinismalGrid() {
  return (
    <section className="w-full lg:py-4 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 lg:mb-14">
          <h2 className="text-3xl font-bold text-black dark:text-white">
            New Arrivals
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 border border-gray-200 dark:border-gray-600 divide-x divide-y divide-gray-200 dark:divide-gray-600">
          {products.map((product) => {
            return (
              <Card
                key={product.id}
                className="group relative border-none rounded-none shadow-none bg-transparent"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* Top Icons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition">
                    <button  className="bg-white dark:bg-gray-700 p-2 rounded-full shadow cursor-pointer">
                      <FaRegHeart className="hover:text-red-500" />
                    </button >
                    <button  className="bg-white dark:bg-gray-700 p-2 rounded-full shadow cursor-pointer">
                      <IoEyeOutline className="hover:text-[#78B13F]" />
                    </button >
                  </div>

                  {/* Bottom Hover Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Button className="w-full rounded-none">Add To Cart</Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 text-center">
                  <h3 className="text-sm font-semibold text-black dark:text-white line-clamp-2 mb-1">
                    {product.title}
                  </h3>
                  <p className="text-green-600 text-sm">₹{product.price}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
