"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaMagic, FaArrowRight } from "react-icons/fa";

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

export default function BundleDealSection() {
  const bundlePrice = products.reduce((acc, p) => {
    return acc + Number(p.price);
  }, 0);
  const discounted = (bundlePrice * 0.75).toFixed(2);

  return (
    <section className="w-full bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 lg:py-20 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6 lg:mb-14">
          <h2 className="text-4xl font-bold flex items-center justify-center gap-3 text-black dark:text-white">
            <FaMagic className="text-purple-600" />
            Smart Bundle Offer
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3">
            Buy together & save more. Limited time curated combo.
          </p>
        </div>

        {/* Bundle Card */}
        <Card className="border-none rounded-3xl shadow-2xl overflow-hidden bg-white dark:bg-gray-800">
          <div className="grid lg:grid-cols-3 gap-8 p-6 lg:p-10 items-center">
            {/* Product Preview */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4 lg:gap-6">
              {products.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="flex items-center gap-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-2xl"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-sm font-semibold text-black dark:text-white line-clamp-2">
                      {product.title}
                    </h4>
                  </div>
                );
              })}
            </div>

            {/* Pricing Box */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-8 rounded-3xl text-center shadow-xl">
              <Badge className="bg-white text-purple-700 mb-4">
                25% OFF Bundle
              </Badge>

              <p className="text-sm opacity-80 mb-2">Original Total</p>
              <p className="text-lg line-through opacity-70 mb-4">
                ₹{bundlePrice.toFixed(2)}
              </p>

              <p className="text-sm opacity-80 mb-2">Bundle Price</p>
              <p className="text-4xl font-bold mb-6">
                ₹{discounted}
              </p>

              <Button className="bg-white text-purple-700 hover:bg-gray-100 rounded-full px-8 flex items-center gap-2 mx-auto">
                Buy Bundle <FaArrowRight />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
