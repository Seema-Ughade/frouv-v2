"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaRegHeart } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";

type Product = {
  id: number;
  img: string;
  title: string;
  price: string;
};

const products: Product[] = [
  { id: 1, img: "/frouv-v2/demo-product/p-5.jpg", title: "Pure Cold-Pressed Oil and Ghee", price: "310" },
  { id: 2, img: "/frouv-v2/demo-product/p-4.webp", title: "Nutritious Health Food Super Mix", price: "310.55" },
  { id: 3, img: "/frouv-v2/demo-product/p-1.png", title: "Premium Indian Garam Masala Spice", price: "948.95" },
  { id: 4, img: "/frouv-v2/demo-product/p-2.jpg", title: "Assorted Healthy Dry Fruits Mix", price: "452.85" },
  { id: 5, img: "/frouv-v2/demo-product/p-3.webp", title: "Organic Fine Flour and Suji", price: "450" },
  { id: 6, img: "/frouv-v2/demo-product/p-6.jpg", title: "High-Quality Indian Pulses and Dal", price: "350" },
];

export default function Groceries() {
  return (
    <section className="w-full bg-white dark:bg-[#0a0a0a] py-8 lg:py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-5 lg:mb-10">
          <h2 className="text-3xl font-bold text-black dark:text-white">
            Groceries
          </h2>
          <Button variant="outline" className="rounded-full px-6">
            View All
          </Button>
        </div>

<div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3">          {products.map((product) => {
            return (
              <Card
                key={product.id}
                className="group relative overflow-hidden min-w-[280px] md:min-w-0 bg-white dark:bg-gray-700 border-none rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Top Icons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition">
                    <div className="bg-white dark:bg-gray-800 p-2 rounded-full shadow cursor-pointer hover:scale-110 transition">
                      <FaRegHeart className="text-lg hover:text-red-500" />
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-2 rounded-full shadow cursor-pointer hover:scale-110 transition">
                      <FaInfinity className="text-lg" />
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-2 rounded-full shadow cursor-pointer hover:scale-110 transition">
                      <IoEyeOutline className="text-lg" />
                    </div>
                  </div>

                  {/* Bottom Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4">
                    <Button className="w-full rounded-xl text-white">Add To Cart</Button>
                  </div>
                </div>

                <CardContent className="p-5">
                  <h3 className="text-sm font-semibold hover:text-[#78B13F] text-black dark:text-white line-clamp-2 mb-3">
                    {product.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-[#78B13F] hover:text-[#78B13F] dark:text-white text-sm font-bold">
                      ₹{product.price}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Free Delivery
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
