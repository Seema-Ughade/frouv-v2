"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaGem, FaArrowRight } from "react-icons/fa";

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
];

export default function LookbookStorySection() {
  const storyProduct = products[0];
  const price = storyProduct.price.split(",").pop();
  const name = storyProduct.title.split(",")[0];

  return (
    <section className="w-full bg-white dark:bg-[#0a0a0a] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black dark:text-white flex items-center justify-center gap-3">
            <FaGem className="text-pink-500" />
            Top Selling Product Spotlight
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3">
            Discover how this piece transforms your everyday style
          </p>
        </div>

        {/* Main Story Layout */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Large Lifestyle Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <img
              src={storyProduct.img}
              alt={name}
              className="w-full h-[300px] lg:h-[500px] lg:object-cover object-fill group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            <div className="absolute bottom-0 p-10 text-white">
              <Badge className="bg-white text-black mb-4">
                Trending Style
              </Badge>

              <h3 className="text-3xl font-bold mb-4">{name}</h3>

              <p className="text-sm opacity-90 max-w-md mb-6">
                Designed for elegance and confidence. Crafted with premium
                materials to complement your modern lifestyle.
              </p>

              <Button className="rounded-full px-8 bg-white text-black hover:bg-gray-200 flex items-center gap-2">
                Shop Now <FaArrowRight />
              </Button>
            </div>
          </div>

          {/* Story Side Content */}
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl shadow-md">
              <h4 className="text-2xl font-semibold text-black dark:text-white mb-4">
                Why You'll Love It
              </h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
                <li>✔ Premium handcrafted finish</li>
                <li>✔ Modern minimalist design</li>
                <li>✔ Perfect for gifting & occasions</li>
                <li>✔ Long-lasting durability</li>
              </ul>
            </div>

            <Card className="border-none shadow-lg rounded-3xl">
              <CardContent className="p-8 flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm dark:bg-[#0a0a0a] mb-2">Starting From</p>
                  <p className="text-3xl font-bold text-pink-600">
                    ₹{price}
                  </p>
                </div>
                <Button className="rounded-full px-6">
                  Add To Cart
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Mini Gallery */}
<div className="flex gap-6 mt-16 overflow-x-auto pb-2 scrollbar-hide">
            {products.slice(1).map((product, i) => {
            const itemName = product.title.split(",")[0];

            return (
              <div
                key={product.id ?? i}
        className="min-w-[250px] rounded-2xl overflow-hidden shadow-md group cursor-pointer"
              >
                <img
                  src={product.img}
                  alt={itemName}
                  className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
