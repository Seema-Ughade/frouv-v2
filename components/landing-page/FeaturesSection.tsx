"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
  { id: 1, img: "/frouv-v2/demo-product/p-1.png", title: "Premium Indian Garam Masala Spice", price: "948.95" },
  { id: 2, img: "/frouv-v2/demo-product/p-2.jpg", title: "Assorted Healthy Dry Fruits Mix", price: "452.85" },
  { id: 3, img: "/frouv-v2/demo-product/p-3.webp", title: "Organic Fine Flour and Suji", price: "450" },
  { id: 4, img: "/frouv-v2/demo-product/p-4.webp", title: "Nutritious Health Food Super Mix", price: "310.55" },
  { id: 5, img: "/frouv-v2/demo-product/p-5.jpg", title: "Pure Cold-Pressed Oil and Ghee", price: "310" },
  { id: 6, img: "/frouv-v2/demo-product/p-6.jpg", title: "High-Quality Indian Pulses and Dal", price: "350" },
];

export default function FeaturedProducts() {
  return (
    <div className="w-full bg-white dark:bg-[#0a0a0a] py-12">
      <div className="max-w-full mx-auto px-2 lg:px-4">
        <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">
          Featured Products
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            375: { slidesPerView: 2 },
            425: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4, navigation: false },
            1280: { slidesPerView: 5, navigation: false },
            1440: { slidesPerView: 5, navigation: false },
          }}
          className="featured-products-slider"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Card className="bg-white dark:bg-gray-700 border-none rounded-lg overflow-hidden shadow-lg hover:shadow-lg transition-shadow h-full py-0 gap-0">
                <div className="relative group overflow-hidden bg-gray-100 dark:bg-gray-600 h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:scale-110 transition-transform cursor-pointer">
                    <FaRegHeart className="hover:text-red-500 text-lg" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-3 justify-center">
                      <div className="bg-white p-2 rounded-lg text-black hover:bg-[#78B13F] hover:text-white hover:scale-110 transition cursor-pointer">
                        <FaInfinity className="text-lg" />
                      </div>
                      <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-[#78B13F] hover:text-white font-semibold transition text-sm">
                        Add To Cart
                      </button>
                      <div className="bg-white p-2 rounded-lg text-black hover:bg-[#78B13F] hover:text-white hover:scale-110 transition cursor-pointer">
                        <IoEyeOutline className="text-lg" />
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-3 lg:p-4">
                  <h3 className="text-sm font-semibold hover:text-[#78B13F] text-black dark:text-white line-clamp-2 mb-3">
                    {product.title}
                  </h3>
                  <div className="flex gap-2 text-sm">
                    <span className="text-[#78B13F] hover:text-[#78B13F] dark:text-white font-bold">
                    ₹{product.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
