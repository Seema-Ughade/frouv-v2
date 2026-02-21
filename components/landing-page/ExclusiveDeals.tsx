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
  { id: 5, img: "/frouv-v2/demo-product/p-5.jpg", title: "Pure Cold-Pressed Oil and Ghee", price: "310" },
  { id: 6, img: "/frouv-v2/demo-product/p-6.jpg", title: "High-Quality Indian Pulses and Dal", price: "350" },
];


export default function FeaturedMosaic() {
  return (
    <section className="w-full py-16 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-black dark:text-white">
          Exclusive Deals
        </h2>

        {/* TOP MOSAIC */}
<div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 mb-10">
          {/* LEFT STACK */}
<div className="hidden lg:flex flex-col gap-6">
              {products.slice(0, 2).map((product, i) => (
              <Card
                key={product.id ?? i}
                className="group rounded-2xl py-0 border-none overflow-hidden shadow-md hover:shadow-xl transition bg-white dark:bg-gray-700"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-fill group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 p-2 rounded-full shadow cursor-pointer">
                    <FaRegHeart className="hover:text-red-500" />
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="text-sm font-semibold text-black dark:text-white line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-green-600 font-bold mt-1">
                    ₹{product.price}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* RIGHT TALL FEATURE CARD */}
<Card className="w-full lg:col-span-2 py-0 border-none group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition bg-white dark:bg-gray-700"> 
             <div className="relative h-[350px] lg:h-[875px] overflow-hidden">
              <img
                src={products[2].img}
                alt={products[2].title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-white">
                <h3 className="text-2xl font-semibold mb-2">
                  {products[2].title}
                </h3>
                <p className="text-xl font-bold mb-4">
                  ₹{products[2].price}
                </p>
                <Button className="rounded-full bg-white text-black hover:bg-gray-200">
                  Shop Now
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* BOTTOM HORIZONTAL SCROLL */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
{products.slice(0).map((product, i) => (           
   <Card
              key={product.id ?? i}
              className="min-w-[250px] py-0 rounded-xl border-none shadow-md hover:shadow-xl transition bg-white dark:bg-gray-700"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="text-sm font-medium text-black dark:text-white line-clamp-2">
                  {product.title.split(",")[0]}
                </h4>
                <p className="text-green-600 font-bold mt-1">
                  ₹{product.price.split(",").pop()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
