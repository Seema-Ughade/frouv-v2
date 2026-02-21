"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaFire, FaShoppingBag } from "react-icons/fa";

type Product = {
  id: number;
  img: string;
  title: string;
  price: string;
};

const products: Product[] = [
  { id: 1, img: "/frouv-v2/demo-product/p-4.webp", title: "Nutritious Health Food Super Mix", price: "310.55" },
  { id: 2, img: "/frouv-v2/demo-product/p-3.webp", title: "Organic Fine Flour and Suji", price: "450" },
  { id: 3, img: "/frouv-v2/demo-product/p-5.jpg", title: "Pure Cold-Pressed Oil and Ghee", price: "310" },
  { id: 4, img: "/frouv-v2/demo-product/p-6.jpg", title: "High-Quality Indian Pulses and Dal", price: "350" },
];

export default function PremiumMembershipSection() {
  const featured = products[0];
  const featuredPrice = Number(featured.price.split(",").pop());
  const featuredName = featured.title.split(",")[0];

  return (
    <section className="w-full bg-gray-100 dark:bg-[#0a0a0a] py-8 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl dark:text-white font-bold flex items-center gap-3">
              <FaFire className="text-orange-500 " />
              Best Sellers
            </h2>
            <p className=" mt-3 dark:text-white max-w-xl">
              Our most loved and top-rated products.
            </p>
          </div>

          <Button className="bg-yellow-400 text-white hover:bg-yellow-500 rounded-full px-8">
            view all
          </Button>
        </div>

        {/* Featured Hero Card */}
        <Card className="relative border-none py-0 overflow-hidden rounded-3xl shadow-2xl bg-neutral-50">
          <div className="grid md:grid-cols-2 items-center">
            {/* Image */}
            <div className="relative h-[250px] md:h-[500px] overflow-hidden">
              <img
                src={featured.img}
                alt={featuredName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
              <Badge className="absolute top-6 left-6 bg-yellow-400 text-black px-4 py-1">
                #1 Bestseller
              </Badge>
            </div>

            {/* Content */}
            <CardContent className="lg:p-10 p-4">
              <h3 className="lg:text-3xl dark:text-black text-base font-bold mb-4 lg:mb-6">{featuredName}</h3>

              <div className="flex items-center gap-4 mb-4 lg:mb-6">
                <span className="lg:text-4xl text-base font-bold text-yellow-400">
                  ₹{featuredPrice}
                </span>
                <span className="text-gray-400 line-through text-lg">
                  ₹{(featuredPrice * 1.4).toFixed(2)}
                </span>
              </div>

              <ul className="space-y-3 lg:text-base dark:text-black text-sm mb-4 lg:mb-8">
                <li>✔ Early access to new collections</li>
                <li>✔ Extra 10% member-only discount</li>
                <li>✔ Priority shipping</li>
              </ul>

              <Button className=" text-black bg-gray-200 rounded-full px-8 flex items-center gap-2">
                <FaShoppingBag />
                Buy Now
              </Button>
            </CardContent>
          </div>
        </Card>

        {/* Small Member Picks */}
<div className="flex gap-6 mt-16 overflow-x-auto scroll-smooth scrollbar-hide pb-4">
            {products.slice(1).map((product, i) => {
            return (
              <Card
                key={product.id ?? i}
  className="min-w-[280px] sm:min-w-[320px] bg-gray-50 py-0 border-none rounded-2xl scrollbar-hide overflow-hidden hover:shadow-xl transition"              >
                <div className="h-60 lg:h-72 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <CardContent className="lg:p-6 p-4">
                  <h4 className="font-semibold  hover:text-[#78B13F] text-black dark:text-black mb-2 lg:mb-3 line-clamp-2">
                    {product.title}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-red-500 font-bold">
                      ₹{product.price}
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-black text-black hover:bg-black hover:text-white rounded-full"
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
    </section>
  );
}
