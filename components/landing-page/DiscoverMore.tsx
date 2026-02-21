"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaArrowRight, FaStar } from "react-icons/fa";

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

export default function UniqueShowcaseSection() {
  const featured = products[0];
  const others = products.slice(1, 4);

  const featuredPrice = featured.title.split(",").pop();
  const featuredName = featured.title.split(",")[0];

  return (
    <section className="w-full bg-white dark:bg-[#0a0a0a] lg:py-20 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-black dark:text-white">
            Discover More
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3">
            Handpicked premium product specially curated for you
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-stretch">
          {/* BIG FEATURE CARD */}
          <Card className="lg:col-span-2 py-0 group relative overflow-hidden rounded-3xl border-none shadow-xl">
            <div className="relative sm:h-[300px] lg:h-[688px] overflow-hidden">
              <img
                src={featured.img}
                alt={featuredName}
                className="w-full h-full object-fill lg:object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 lg:p-10 text-white max-w-lg">
                <Badge className="mb-4 bg-white text-black">Premium Pick</Badge>

                <h3 className="lg:text-3xl text-base font-bold mb-4">
                  {featuredName}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                  <span className="text-sm opacity-80">(Top Rated)</span>
                </div>

                <p className="lg:text-2xl text-base font-semibold mb-6">
                  ₹{featuredPrice}
                </p>

                <Button className="rounded-full px-8">
                  Shop Now <FaArrowRight className="ml-2 text-sm" />
                </Button>
              </div>
            </div>
          </Card>

          {/* SIDE STACK CARDS */}
          <div className="flex gap-4 overflow-x-auto pb-0 scrollbar-hide lg:flex-col lg:overflow-visible" >
            {others.map((product, i) => {
              return (
                <Card
                  key={product.id ?? i}
                  className="min-w-[250px] dark:bg-[#161616] lg:min-w-0 flex items-center gap-[30px] p-4 rounded-2xl border-none shadow-md hover:shadow-lg transition"
                >
                  <div className="w-24 h-24 rounded-xl overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <CardContent className="p-0 flex-1">
                    <h4 className="text-sm font-semibold text-black dark:text-white line-clamp-2 mb-2">
                      {product.title}
                    </h4>
                    <div className="flex items-center justify-between">
                      <span className="text-green-700 dark:text-green-400 font-bold">
                        ₹{product.price}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-full"
                      >
                        View
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
