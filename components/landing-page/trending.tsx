"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaRegHeart } from "react-icons/fa";

type Product = {
  id: number;
  img: string[];
  title: string;
  price: string;
};

const products: Product[] = [
  { id: 1, img: [ "/frouv-v2/demo-product/p-1.png", "/frouv-v2/demo-product/p-7.jpg", "/frouv-v2/demo-product/p-9.webp", "/frouv-v2/demo-product/p-4.webp", ], title: "Premium Indian Garam Masala Spice", price: "948.95", },
  { id: 2, img: [ "/frouv-v2/demo-product/p-2.jpg", "/frouv-v2/demo-product/p-1.png", "/frouv-v2/demo-product/p-4.webp", "/frouv-v2/demo-product/p-3.webp", ], title: "Assorted Healthy Dry Fruits Mix", price: "452.85", },
  { id: 3, img: [ "/frouv-v2/demo-product/p-6.jpg", "/frouv-v2/demo-product/p-9.webp", "/frouv-v2/demo-product/p-3.webp", "/frouv-v2/demo-product/p-1.png", ], title: "Organic Fine Flour and Suji", price: "450", }, 
  { id: 4, img: [ "/frouv-v2/demo-product/p-7.jpg", "/frouv-v2/demo-product/p-6.jpg", "/frouv-v2/demo-product/p-1.png", "/frouv-v2/demo-product/p-2.jpg", ], title: "Nutritious Health Food Super Mix", price: "310.55", },
  { id: 5, img: [ "/frouv-v2/demo-product/p-2.jpg", "/frouv-v2/demo-product/p-4.webp", "/frouv-v2/demo-product/p-3.webp", "/frouv-v2/demo-product/p-3.webp", ], title: "Pure Cold-Pressed Oil and Ghee", price: "310", },
  { id: 6, img: [ "/frouv-v2/demo-product/p-9.webp", "/frouv-v2/demo-product/p-3.webp", "/frouv-v2/demo-product/p-4.webp", "/frouv-v2/demo-product/p-7.webp", ], title: "High-Quality Indian Pulses and Dal", price: "350", }, 
];

export default function FeaturedProducts() {
  return (
    <div className="w-full bg-white dark:bg-[#0a0a0a] py-12">
      <div className="max-w-full mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">
          Trending Products
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 4 },
            1440: { slidesPerView: 4 },
          }}
        >
          {products.map((product, i) => (
            <SwiperSlide key={product.id ?? i}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
//card
function ProductCard({ product }: { product: Product }) {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % product.img.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [product.img.length]);

  return (
    <Card className="bg-white py-0 border-none dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 h-full">
      <div className="relative h-72 overflow-hidden">
        {/* Images */}
        {product.img.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={product.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Heart Icon */}
        <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md cursor-pointer hover:scale-110 transition">
          <FaRegHeart className="hover:text-red-500 text-lg" />
        </div>

        {/* Dots */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {product.img.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current ? "w-6 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="text-sm font-semibold text-black dark:text-white line-clamp-2 mb-2">
          {product.title}
        </h3>
        <span className="text-[#78B13F] hover:text-[#78B13F] dark:text-white font-bold">
          ₹{product.price}
        </span>
      </CardContent>
    </Card>
  );
}
