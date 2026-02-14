"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/app/models/product";
import Ecogiftstab from "./ecogiftstab";
import { MdOutlineDoubleArrow } from "react-icons/md";

export default function EcoFriendlyGifts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const category = "Discover Eco-friendly Gifts & Toys";
  const encodedCategory = encodeURIComponent(category);

  const DUMMY_ECO_GIFTS: Product[] = [
    {
      _id: "eco-1",
      documentId: "eco-doc-1",
      name: "Eco Bamboo Toy Set",
      slug: "eco-bamboo-toy-set",
      sellerId: "seller-eco-1",
      seller: "Eco World",
      shopName: "Eco World Store",
      category: "Gifts",
      categorySlug: "gifts",
      subCategory: "Eco-friendly Toys",
      subCategorySlug: "eco-toys",
      brand: "GreenPlay",
      description: "Safe, eco-friendly bamboo toys for kids.",
      features: ["Bamboo", "Non-toxic", "Eco-friendly"],
      speciality: "Sustainable Toy",
      pkginfo: "Toy Set",
      type: "Toy",
      countryorigin: "India",
      exchange: "No",
      rating: 4.6,
      verification: "verified",
      status: "active",
      createdAt: new Date().toISOString(),

      variants: [
        {
          id: 1,
          type: "Standard",
          sku: "BAMBOO-TOY-1",
          stock: 25,
          price: "799",
          oldprice: "999",
          discount: "20%",
          images: ["/frouv-v2/banner/banner1.webp"],
          image: [{ url: "/frouv-v2/banner/banner1.webp" }],
          originalPrice: 999,
          sale_price: "799",
          net_product_price: "799",
        },
      ],
    },

    {
      _id: "eco-2",
      documentId: "eco-doc-2",
      name: "Reusable Eco Gift Box",
      slug: "reusable-eco-gift-box",
      sellerId: "seller-eco-2",
      seller: "Green Gifting",
      shopName: "Green Gifting Hub",
      category: "Gifts",
      categorySlug: "gifts",
      subCategory: "Eco Gifts",
      subCategorySlug: "eco-gifts",
      brand: "EcoWrap",
      description: "Reusable eco-friendly gift packaging box.",
      features: ["Reusable", "Plastic Free"],
      speciality: "Eco Gift",
      pkginfo: "1 Box",
      type: "Gift",
      countryorigin: "India",
      exchange: "Yes",
      rating: 4.3,
      verification: "verified",
      status: "active",
      createdAt: new Date().toISOString(),

      variants: [
        {
          id: 1,
          type: "Medium",
          sku: "ECO-BOX-1",
          stock: 40,
          price: "299",
          oldprice: "399",
          discount: "25%",
          images: ["/frouv-v2/banner/banner2.png"],
          image: [{ url: "/frouv-v2/banner/banner2.png" }],
          originalPrice: 399,
          sale_price: "299",
          net_product_price: "299",
        },
      ],
    },

    {
      _id: "eco-3",
      documentId: "eco-doc-3",
      name: "Organic Cotton Soft Toy",
      slug: "organic-cotton-soft-toy",
      sellerId: "seller-eco-3",
      seller: "Nature Kids",
      shopName: "Nature Kids Store",
      category: "Toys",
      categorySlug: "toys",
      subCategory: "Eco Toys",
      subCategorySlug: "eco-toys",
      brand: "SoftGreen",
      description: "Soft toy made from organic cotton.",
      features: ["Organic Cotton", "Safe for Kids"],
      speciality: "Eco Toy",
      pkginfo: "1 Toy",
      type: "Toy",
      countryorigin: "India",
      exchange: "No",
      rating: 4.8,
      verification: "verified",
      status: "active",
      createdAt: new Date().toISOString(),

      variants: [
        {
          id: 1,
          type: "Small",
          sku: "COTTON-TOY-1",
          stock: 18,
          price: "649",
          oldprice: "799",
          discount: "19%",
          images: ["/frouv-v2/banner/banner3.png"],
          image: [{ url: "/frouv-v2/banner/banner3.png" }],
          originalPrice: 799,
          sale_price: "649",
          net_product_price: "649",
        },
      ],
    },
    {
      _id: "eco-4",
      documentId: "eco-doc-4",
      name: "Eco Bamboo Toy Set",
      slug: "eco-bamboo-toy-set",
      sellerId: "seller-eco-1",
      seller: "Eco World",
      shopName: "Eco World Store",
      category: "Gifts",
      categorySlug: "gifts",
      subCategory: "Eco-friendly Toys",
      subCategorySlug: "eco-toys",
      brand: "GreenPlay",
      description: "Safe, eco-friendly bamboo toys for kids.",
      features: ["Bamboo", "Non-toxic", "Eco-friendly"],
      speciality: "Sustainable Toy",
      pkginfo: "Toy Set",
      type: "Toy",
      countryorigin: "India",
      exchange: "No",
      rating: 4.6,
      verification: "verified",
      status: "active",
      createdAt: new Date().toISOString(),

      variants: [
        {
          id: 4,
          type: "Standard",
          sku: "BAMBOO-TOY-1",
          stock: 25,
          price: "799",
          oldprice: "999",
          discount: "20%",
          images: ["/frouv-v2/banner/banner1.webp"],
          image: [{ url: "/frouv-v2/banner/banner1.webp" }],
          originalPrice: 999,
          sale_price: "799",
          net_product_price: "799",
        },
      ],
    },

    {
      _id: "eco-5",
      documentId: "eco-doc-4",
      name: "Eco Bamboo Toy Set",
      slug: "eco-bamboo-toy-set",
      sellerId: "seller-eco-1",
      seller: "Eco World",
      shopName: "Eco World Store",
      category: "Gifts",
      categorySlug: "gifts",
      subCategory: "Eco-friendly Toys",
      subCategorySlug: "eco-toys",
      brand: "GreenPlay",
      description: "Safe, eco-friendly bamboo toys for kids.",
      features: ["Bamboo", "Non-toxic", "Eco-friendly"],
      speciality: "Sustainable Toy",
      pkginfo: "Toy Set",
      type: "Toy",
      countryorigin: "India",
      exchange: "No",
      rating: 4.6,
      verification: "verified",
      status: "active",
      createdAt: new Date().toISOString(),

      variants: [
        {
          id: 5,
          type: "Standard",
          sku: "BAMBOO-TOY-1",
          stock: 25,
          price: "799",
          oldprice: "999",
          discount: "20%",
          images: ["/frouv-v2/banner/banner1.webp"],
          image: [{ url: "/frouv-v2/banner/banner1.webp" }],
          originalPrice: 999,
          sale_price: "799",
          net_product_price: "799",
        },
      ],
    },

    {
      _id: "eco-6",
      documentId: "eco-doc-4",
      name: "Eco Bamboo Toy Set",
      slug: "eco-bamboo-toy-set",
      sellerId: "seller-eco-1",
      seller: "Eco World",
      shopName: "Eco World Store",
      category: "Gifts",
      categorySlug: "gifts",
      subCategory: "Eco-friendly Toys",
      subCategorySlug: "eco-toys",
      brand: "GreenPlay",
      description: "Safe, eco-friendly bamboo toys for kids.",
      features: ["Bamboo", "Non-toxic", "Eco-friendly"],
      speciality: "Sustainable Toy",
      pkginfo: "Toy Set",
      type: "Toy",
      countryorigin: "India",
      exchange: "No",
      rating: 4.6,
      verification: "verified",
      status: "active",
      createdAt: new Date().toISOString(),

      variants: [
        {
          id: 6,
          type: "Standard",
          sku: "BAMBOO-TOY-1",
          stock: 25,
          price: "799",
          oldprice: "999",
          discount: "20%",
          images: ["/frouv-v2/banner/banner1.webp"],
          image: [{ url: "/frouv-v2/banner/banner1.webp" }],
          originalPrice: 999,
          sale_price: "799",
          net_product_price: "799",
        },
      ],
    },

    {
      _id: "eco-4",
      documentId: "eco-doc-4",
      name: "Eco Bamboo Toy Set",
      slug: "eco-bamboo-toy-set",
      sellerId: "seller-eco-1",
      seller: "Eco World",
      shopName: "Eco World Store",
      category: "Gifts",
      categorySlug: "gifts",
      subCategory: "Eco-friendly Toys",
      subCategorySlug: "eco-toys",
      brand: "GreenPlay",
      description: "Safe, eco-friendly bamboo toys for kids.",
      features: ["Bamboo", "Non-toxic", "Eco-friendly"],
      speciality: "Sustainable Toy",
      pkginfo: "Toy Set",
      type: "Toy",
      countryorigin: "India",
      exchange: "No",
      rating: 4.6,
      verification: "verified",
      status: "active",
      createdAt: new Date().toISOString(),

      variants: [
        {
          id: 4,
          type: "Standard",
          sku: "BAMBOO-TOY-1",
          stock: 25,
          price: "799",
          oldprice: "999",
          discount: "20%",
          images: ["/frouv-v2/banner/banner1.webp"],
          image: [{ url: "/frouv-v2/banner/banner1.webp" }],
          originalPrice: 999,
          sale_price: "799",
          net_product_price: "799",
        },
      ],
    },
    {
      _id: "eco-4",
      documentId: "eco-doc-4",
      name: "Eco Bamboo Toy Set",
      slug: "eco-bamboo-toy-set",
      sellerId: "seller-eco-1",
      seller: "Eco World",
      shopName: "Eco World Store",
      category: "Gifts",
      categorySlug: "gifts",
      subCategory: "Eco-friendly Toys",
      subCategorySlug: "eco-toys",
      brand: "GreenPlay",
      description: "Safe, eco-friendly bamboo toys for kids.",
      features: ["Bamboo", "Non-toxic", "Eco-friendly"],
      speciality: "Sustainable Toy",
      pkginfo: "Toy Set",
      type: "Toy",
      countryorigin: "India",
      exchange: "No",
      rating: 4.6,
      verification: "verified",
      status: "active",
      createdAt: new Date().toISOString(),

      variants: [
        {
          id: 4,
          type: "Standard",
          sku: "BAMBOO-TOY-1",
          stock: 25,
          price: "799",
          oldprice: "999",
          discount: "20%",
          images: ["/frouv-v2/banner/banner1.webp"],
          image: [{ url: "/frouv-v2/banner/banner1.webp" }],
          originalPrice: 999,
          sale_price: "799",
          net_product_price: "799",
        },
      ],
    },
    {
      _id: "eco-2",
      documentId: "eco-doc-2",
      name: "Reusable Eco Gift Box",
      slug: "reusable-eco-gift-box",
      sellerId: "seller-eco-2",
      seller: "Green Gifting",
      shopName: "Green Gifting Hub",
      category: "Gifts",
      categorySlug: "gifts",
      subCategory: "Eco Gifts",
      subCategorySlug: "eco-gifts",
      brand: "EcoWrap",
      description: "Reusable eco-friendly gift packaging box.",
      features: ["Reusable", "Plastic Free"],
      speciality: "Eco Gift",
      pkginfo: "1 Box",
      type: "Gift",
      countryorigin: "India",
      exchange: "Yes",
      rating: 4.3,
      verification: "verified",
      status: "active",
      createdAt: new Date().toISOString(),

      variants: [
        {
          id: 1,
          type: "Medium",
          sku: "ECO-BOX-1",
          stock: 40,
          price: "299",
          oldprice: "399",
          discount: "25%",
          images: ["/frouv-v2/banner/banner2.png"],
          image: [{ url: "/frouv-v2/banner/banner2.png" }],
          originalPrice: 399,
          sale_price: "299",
          net_product_price: "299",
        },
      ],
    },

    {
      _id: "eco-3",
      documentId: "eco-doc-3",
      name: "Organic Cotton Soft Toy",
      slug: "organic-cotton-soft-toy",
      sellerId: "seller-eco-3",
      seller: "Nature Kids",
      shopName: "Nature Kids Store",
      category: "Toys",
      categorySlug: "toys",
      subCategory: "Eco Toys",
      subCategorySlug: "eco-toys",
      brand: "SoftGreen",
      description: "Soft toy made from organic cotton.",
      features: ["Organic Cotton", "Safe for Kids"],
      speciality: "Eco Toy",
      pkginfo: "1 Toy",
      type: "Toy",
      countryorigin: "India",
      exchange: "No",
      rating: 4.8,
      verification: "verified",
      status: "active",
      createdAt: new Date().toISOString(),

      variants: [
        {
          id: 1,
          type: "Small",
          sku: "COTTON-TOY-1",
          stock: 18,
          price: "649",
          oldprice: "799",
          discount: "19%",
          images: ["/frouv-v2/banner/banner3.png"],
          image: [{ url: "/frouv-v2/banner/banner3.png" }],
          originalPrice: 799,
          sale_price: "649",
          net_product_price: "649",
        },
      ],
    },
    {
      _id: "eco-4",
      documentId: "eco-doc-4",
      name: "Eco Bamboo Toy Set",
      slug: "eco-bamboo-toy-set",
      sellerId: "seller-eco-1",
      seller: "Eco World",
      shopName: "Eco World Store",
      category: "Gifts",
      categorySlug: "gifts",
      subCategory: "Eco-friendly Toys",
      subCategorySlug: "eco-toys",
      brand: "GreenPlay",
      description: "Safe, eco-friendly bamboo toys for kids.",
      features: ["Bamboo", "Non-toxic", "Eco-friendly"],
      speciality: "Sustainable Toy",
      pkginfo: "Toy Set",
      type: "Toy",
      countryorigin: "India",
      exchange: "No",
      rating: 4.6,
      verification: "verified",
      status: "active",
      createdAt: new Date().toISOString(),

      variants: [
        {
          id: 4,
          type: "Standard",
          sku: "BAMBOO-TOY-1",
          stock: 25,
          price: "799",
          oldprice: "999",
          discount: "20%",
          images: ["/frouv-v2/banner/banner1.webp"],
          image: [{ url: "/frouv-v2/banner/banner1.webp" }],
          originalPrice: 999,
          sale_price: "799",
          net_product_price: "799",
        },
      ],
    },
  ];

  useEffect(() => {
    setLoading(true);

    const shuffled = [...DUMMY_ECO_GIFTS].sort(() => Math.random() - 0.5);
    setProducts(shuffled.slice(0, 10));

    setLoading(false);
  }, []);
  return (
    <section className="container dark:border dark:rounded-2xl border-white mx-auto dark:bg-black p-4 sm:p-5 px-4 md:px-6 lg:px-8">
      {/* Header */}
      <h2 className="flex text-2xl dark:text-white md:text-3xl font-bold text-green-900 mb-8 tracking-tight">
        Discover Eco-friendly Gifts & Toys
        <span className="text-green-600 ml-2 text-4xl">
          <MdOutlineDoubleArrow />
        </span>
      </h2>

      {/* Grid Container - Responsive: 2 cols mobile/tablet, 3 cols small desktop, 4 cols desktop, 5 cols large desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {loading ? (
          
          Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="border rounded-lg overflow-hidden shadow-sm animate-pulse"
            >
              <div className="w-full h-44 bg-gray-300"></div>
              <div className="p-2 ">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              </div>
            </div>
          ))
        ) : products.length > 0 ? (
          products.map((pro, index) => (
            <div key={`${pro._id}-${index}`} className="w-full group relative">
              <Ecogiftstab pro={pro} variant={0} width={0} height={0} />
              {/* Add ProductActions component */}
              <div className="absolute left-0 right-0 bottom-2 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                {/* <ProductActions pro={pro} variant={0} /> */}
              </div>
            </div>
          ))
        ) : (
          // Empty state
          <div className="col-span-full text-center py-12">
            <div className="text-gray-500 text-lg mb-2">No products found</div>
            <div className="text-gray-400 text-sm">
              Try refreshing the page or check back later
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
