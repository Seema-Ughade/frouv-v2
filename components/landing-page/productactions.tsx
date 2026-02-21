"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaClock, FaArrowRight } from "react-icons/fa";

type Product = {
  id?: string | number;
  img: string;
  title: string;
};

interface Props {
  products?: Product[];
}

const defaultProducts: Product[] = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop",
    title: "Luxurious Rose Gold Bracelet with Customizable charms,948.95",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=600&fit=crop",
    title: "Minimalist Smart Watch with Fitness Tracker,599.00",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop",
    title:
      "5G Smartphone with 128GB storage,48MP Triple Camera,and AMOLED Display,450",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
    title: "Comfortable Running Shoes for Daily Training,420.50",
  },
];

export default function LimitedDropTimeline({
  products = defaultProducts,
}: Props) {
  const dropProduct = products[0];
  const price = dropProduct.title.split(",").pop();
  const name = dropProduct.title.split(",")[0];

  return (
    <section className="w-full bg-gray-50 dark:bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-black dark:text-white flex items-center justify-center gap-3">
            <FaClock className="text-red-500" />
            Limited Edition Drop
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3">
            A rare release crafted for those who value exclusivity.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-200 dark:bg-gray-800 -translate-x-1/2 hidden md:block" />

          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="md:text-right space-y-4">
              <Badge className="bg-black text-white dark:bg-white dark:text-black">
                Step 01
              </Badge>
              <h3 className="text-2xl font-bold text-black dark:text-white">
                Designed With Purpose
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Every detail of this piece has been carefully engineered to
                bring timeless elegance and premium craftsmanship.
              </p>
            </div>
            <div className="hidden md:block" />
          </div>

          {/* Step 2 - Product Showcase */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative flex justify-center">
              <Card className="overflow-hidden rounded-3xl shadow-2xl border-none w-full max-w-md">
                <img
                  src={dropProduct.img}
                  alt={name}
                  className="w-full h-[400px] object-cover"
                />
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg text-black dark:text-white mb-2">
                    {name}
                  </h4>
                  <p className="text-red-600 font-bold text-xl">
                    ₹{price}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Badge className="bg-red-500 text-white">
                Step 02
              </Badge>
              <h3 className="text-2xl font-bold text-black dark:text-white">
                Exclusive Release
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Produced in limited quantity. Once sold out, it may never
                return.
              </p>
              <Button className="rounded-full px-8 flex items-center gap-2">
                Secure Yours <FaArrowRight />
              </Button>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:text-right space-y-4">
              <Badge className="bg-black text-white dark:bg-white dark:text-black">
                Step 03
              </Badge>
              <h3 className="text-2xl font-bold text-black dark:text-white">
                Become Part of the Story
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Own a piece that represents individuality, luxury, and
                distinction.
              </p>
            </div>
            <div className="hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
