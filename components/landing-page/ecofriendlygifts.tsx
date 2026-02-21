"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  { id: 5, img: "/frouv-v2/demo-product/p-5.jpg", title: "Pure Cold-Pressed Oil and Ghee", price: "310" },
  { id: 6, img: "/frouv-v2/demo-product/p-6.jpg", title: "High-Quality Indian Pulses and Dal", price: "350" },
  { id: 7, img: "/frouv-v2/demo-product/p-7.jpg", title: "High-Quality Indian Dal", price: "450" },
  { id: 8, img: "/frouv-v2/demo-product/p-8.jpg", title: "High-Quality Indian Pulses and Dal", price: "350" },
  { id: 9, img: "/frouv-v2/demo-product/p-9.webp", title: "High-Quality Indian Dal", price: "450" },
];

export default function FeaturedProductsSplit() {
  const leftProducts = products.slice(0, 3);
  const rightProducts = products.slice(3, 9);
  return (
    <section className="w-full bg-white dark:bg-[#0a0a0a] py-14">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-black dark:text-white">
          Trending This Week - Eco-Friendly Gifts
        </h2>
        {/* MOBILE HORIZONTAL SCROLL */}
        <div className="lg:hidden flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          {products.map((product, i) => (
            <Card
              key={product.id ?? i}
              className="min-w-[260px] py-0 bg-white dark:bg-gray-700 border-none rounded-2xl shadow-md"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <CardContent className="p-4">
                <h3 className="text-sm font-semibold text-black dark:text-white line-clamp-2 mb-2">
                  {product.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-green-900 dark:text-green-400 font-bold">
                    ₹{product.price}
                  </span>
                  <Button size="sm" className="rounded-full">
                    Buy now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="hidden lg:grid lg:grid-cols-2 gap-10">
          {/* LEFT LARGE FEATURE */}
          <div className="space-y-12">
            {leftProducts.map((product, i) => {
              return (
                <Card
                  key={product.id ?? i}
                  className="flex flex-col md:flex-row bg-white dark:bg-gray-700 border-none rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
                >
                  <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden group">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-black text-white">
                      Sale
                    </Badge>
                  </div>

                  <CardContent className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold hover:text-[#78B13F] text-black dark:text-white mb-3 line-clamp-2">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        Premium quality product with modern design and best
                        performance.
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-green-900 dark:text-green-400 font-bold text-xl">
                        ₹{product.price}
                      </span>
                      <Button size="sm" className="rounded-full px-6">
                        Buy now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* RIGHT SMALL GRID */}
          <div className="grid sm:grid-cols-2 gap-6">
            {rightProducts.map((product, i) => {
              return (
                <Card
                  key={product.id ?? i}
                  className="group relative bg-white dark:bg-gray-700 py-0 border-none rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition"
                >
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />

                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                      <div className="bg-white dark:bg-gray-800 p-2 rounded-full shadow cursor-pointer">
                        <FaRegHeart className="text-sm hover:text-red-500" />
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-2 rounded-full shadow cursor-pointer">
                        <IoEyeOutline className="text-sm" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="text-sm font-semibold hover:text-[#78B13F] text-black dark:text-white line-clamp-2 mb-3">
                      {product.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-green-900 dark:text-green-400 font-bold">
                        ₹{product.price}
                      </span>
                      <Button size="sm" className="rounded-full">
                        Buy now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
