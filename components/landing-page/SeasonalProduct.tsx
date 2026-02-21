"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaRegHeart } from "react-icons/fa";

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

export default function FeaturedTabbed() {

  return (
    <section className="w-full py-8 lg:py-16 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">
          Seasonal Products
        </h2>

        {/* Product Grid */}
<div className="
  flex gap-6 overflow-x-auto pb-4 scrollbar-hide
  md:grid md:grid-cols-2
  lg:grid-cols-4
">          {products.map((product, i) => {
            return (
              <Card
                key={product.id ?? i}
className="min-w-[250px] md:min-w-0 group py-0 border-none rounded-xl shadow-md hover:shadow-xl transition bg-white dark:bg-gray-700 overflow-hidden"              >
                <div className="relative h-60 lg:h-72 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 p-2 rounded-full shadow cursor-pointer">
                    <FaRegHeart className="hover:text-red-500" />
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="text-sm font-semibold text-black dark:text-white line-clamp-2 mb-2">
                    {product.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">
                      ₹{product.price}
                    </span>

                    <Button
                      size="sm"
                      className="rounded-full px-4 text-xs"
                    >
                      Buy Now
                    </Button>
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
