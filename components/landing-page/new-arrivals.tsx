"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ProductActions from "@/components/landing-page/productactions";

export default function NewArrivals() {
  type Product = {
    documentId: string;
    name: string;
    slug: string;
    variants: {
      type: string;
      image: { url: string }[];
    }[];
  };

  /* 🔹 Sample Data */
  const products: Product[] = [
    {
      documentId: "1",
      name: "Organic Honey",
      slug: "organic-honey",
      variants: [
        {
          type: "500g",
          image: [{ url: "/frouv-v2/banner/banner1.webp" }],
        },
      ],
    },
    {
      documentId: "2",
      name: "Herbal Tea",
      slug: "herbal-tea",
      variants: [
        {
          type: "250g",
          image: [{ url: "/frouv-v2/banner/banner2.png" }],
        },
      ],
    },
    {
      documentId: "3",
      name: "Natural Soap",
      slug: "natural-soap",
      variants: [
        {
          type: "Pack of 3",
          image: [{ url: "/frouv-v2/banner/banner3.png" }],
        },
      ],
    },
    {
      documentId: "4",
      name: "Cold Press Oil",
      slug: "cold-press-oil",
      variants: [
        {
          type: "1L",
          image: [{ url: "/frouv-v2/banner/banner4.webp" }],
        },
      ],
    },
    {
      documentId: "5",
      name: "Dry Fruits Mix",
      slug: "dry-fruits",
      variants: [
        {
          type: "500g",
          image: [{ url: "/frouv-v2/banner/banner2.png" }],
        },
      ],
    },
    {
      documentId: "6",
      name: "Organic Jaggery",
      slug: "organic-jaggery",
      variants: [
        {
          type: "1kg",
          image: [{ url: "/frouv-v2/banner/banner4.webp" }],
        },
      ],
    },
    {
      documentId: "7",
      name: "Millet Cookies",
      slug: "millet-cookies",
      variants: [
        {
          type: "200g",
          image: [{ url: "/frouv-v2/banner/banner1.webp" }],
        },
      ],
    },
    {
      documentId: "8",
      name: "Organic Rice",
      slug: "organic-rice",
      variants: [
        {
          type: "5kg",
          image: [{ url: "/frouv-v2/banner/banner3.png" }],
        },
      ],
    },
  ];

  const getProductImage = (product: Product) =>
    product.variants[0].image[0].url;

  return (
    <section className="container mx-auto bg-white rounded-2xl shadow-sm ring-1 ring-black/5 p-4 sm:p-5">
      <h2 className="text-xl font-bold text-green-900 mb-4 tracking-tight">
        New Arrivals
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-4 gap-4">
        {products.map((product) => {
          const variant = product.variants[0];

          return (
            <div
              key={product.documentId}
              className="group  rounded-lg overflow-hidden shadow-sm hover:shadow-md transition relative"
            >
              <Link
                href={`/product/${product.slug}?variant=${variant}&name=${variant?.type}`}
                prefetch={true}
              >
                <img
                  src={getProductImage(product)}
                  alt={product.name}
                  className="w-full bg-violet-50 p-2 h-48 sm:h-48 lg:h-56 object-contain"
                />
              </Link>
              <div className="absolute left-0 right-0 bottom-2 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <ProductActions product={product} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
