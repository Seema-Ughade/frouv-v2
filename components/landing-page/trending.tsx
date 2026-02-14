
"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect, useState } from "react"
import { MdOutlineDoubleArrow } from "react-icons/md"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import type { Product } from "@/app/models/product"
import { showToast } from "../landing-page/notify"
import Trendingecotab from "./trendingecotab"
import ProductActions from "@/components/landing-page/productactions" 

// Helper to chunk products into groups of 8 (4 columns × 2 rows)
function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }
  return chunks
}


const DUMMY_TRENDING_PRODUCTS: Product[] = [
  {
    _id: "1",
    documentId: "doc-1",
    name: "Organic Apples",
    slug: "organic-apples",
    sellerId: "seller-1",
    seller: "Green Farm",
    shopName: "Green Farm Store",
    category: "Groceries",
    categorySlug: "groceries",
    subCategory: "Fruits & Vegetables",
    subCategorySlug: "fruits-vegetables",
    brand: "EcoFresh",
    description: "Fresh organic apples directly from farms.",
    features: ["100% Organic", "No Chemicals"],
    speciality: "Farm Fresh",
    pkginfo: "1 Kg Pack",
    type: "Food",
    countryorigin: "India",
    exchange: "No",
    rating: 4.5,
    verification: "verified",
    status: "active",
    createdAt: new Date().toISOString(),

    variants: [
      {
        id: 1,
        type: "1 Kg",
        sku: "APPLE-1KG",
        stock: 20,
        price: "180",
        oldprice: "220",
        discount: "18%",
        images: ["/frouv-v2/banner/banner1.webp"],
        image: [
          {
            url: "/frouv-v2/banner/banner1.webp",
          },
        ],
        originalPrice: 220,
        sale_price: "180",
        net_product_price: "180",
      },
    ],
  },

  {
    _id: "2",
    documentId: "doc-2",
    name: "Fresh Green Vegetables",
    slug: "fresh-green-vegetables",
    sellerId: "seller-2",
    seller: "Nature Hub",
    shopName: "Nature Hub",
    category: "Groceries",
    categorySlug: "groceries",
    subCategory: "Vegetables",
    subCategorySlug: "vegetables",
    brand: "NatureFresh",
    description: "Healthy green vegetables combo.",
    features: ["Fresh", "Pesticide Free"],
    speciality: "Daily Essentials",
    pkginfo: "500 g",
    type: "Food",
    countryorigin: "India",
    exchange: "No",
    rating: 4.2,
    verification: "verified",
    status: "active",
    createdAt: new Date().toISOString(),

    variants: [
      {
        id: 2,
        type: "500 g",
        sku: "VEG-500G",
        stock: 35,
        price: "90",
        oldprice: "120",
        discount: "25%",
        images: ["/frouv-v2/banner/banner2.png"],
        image: [
          {
            url: "/frouv-v2/banner/banner2.png",
          },
        ],
        originalPrice: 120,
        sale_price: "90",
        net_product_price: "90",
      },
    ],
  },

  {
    _id: "3",
    documentId: "doc-3",
    name: "Eco Friendly Grocery Combo",
    slug: "eco-friendly-grocery-combo",
    sellerId: "seller-3",
    seller: "Eco Mart",
    shopName: "Eco Mart",
    category: "Groceries",
    categorySlug: "groceries",
    subCategory: "Combos",
    subCategorySlug: "combos",
    brand: "EcoLife",
    description: "Eco-friendly daily grocery essentials.",
    features: ["Eco Packaging", "Sustainable"],
    speciality: "Eco Choice",
    pkginfo: "Combo Pack",
    type: "Food",
    countryorigin: "India",
    exchange: "Yes",
    rating: 4.8,
    verification: "verified",
    status: "active",
    createdAt: new Date().toISOString(),

    variants: [
      {
        id: 3,
        type: "Combo Pack",
        sku: "ECO-COMBO",
        stock: 15,
        price: "499",
        oldprice: "599",
        discount: "17%",
        images: ["/frouv-v2/banner/banner3.png"],
        image: [
          {
            url: "/frouv-v2/banner/banner3.png",
          },
        ],
        originalPrice: 599,
        sale_price: "499",
        net_product_price: "499",
      },
    ],
  },
  {
    _id: "4",
    documentId: "doc-1",
    name: "Organic Apples",
    slug: "organic-apples",
    sellerId: "seller-1",
    seller: "Green Farm",
    shopName: "Green Farm Store",
    category: "Groceries",
    categorySlug: "groceries",
    subCategory: "Fruits & Vegetables",
    subCategorySlug: "fruits-vegetables",
    brand: "EcoFresh",
    description: "Fresh organic apples directly from farms.",
    features: ["100% Organic", "No Chemicals"],
    speciality: "Farm Fresh",
    pkginfo: "1 Kg Pack",
    type: "Food",
    countryorigin: "India",
    exchange: "No",
    rating: 4.5,
    verification: "verified",
    status: "active",
    createdAt: new Date().toISOString(),

    variants: [
      {
        id: 4,
        type: "1 Kg",
        sku: "APPLE-1KG",
        stock: 20,
        price: "180",
        oldprice: "220",
        discount: "18%",
        images: ["/frouv-v2/banner/banner1.webp"],
        image: [
          {
            url: "/frouv-v2/banner/banner1.webp",
          },
        ],
        originalPrice: 220,
        sale_price: "180",
        net_product_price: "180",
      },
    ],
  },

  {
    _id: "5",
    documentId: "doc-2",
    name: "Fresh Green Vegetables",
    slug: "fresh-green-vegetables",
    sellerId: "seller-2",
    seller: "Nature Hub",
    shopName: "Nature Hub",
    category: "Groceries",
    categorySlug: "groceries",
    subCategory: "Vegetables",
    subCategorySlug: "vegetables",
    brand: "NatureFresh",
    description: "Healthy green vegetables combo.",
    features: ["Fresh", "Pesticide Free"],
    speciality: "Daily Essentials",
    pkginfo: "500 g",
    type: "Food",
    countryorigin: "India",
    exchange: "No",
    rating: 4.2,
    verification: "verified",
    status: "active",
    createdAt: new Date().toISOString(),

    variants: [
      {
        id: 5,
        type: "500 g",
        sku: "VEG-500G",
        stock: 35,
        price: "90",
        oldprice: "120",
        discount: "25%",
        images: ["/frouv-v2/banner/banner2.png"],
        image: [
          {
            url: "/frouv-v2/banner/banner2.png",
          },
        ],
        originalPrice: 120,
        sale_price: "90",
        net_product_price: "90",
      },
    ],
  },

  {
    _id: "6",
    documentId: "doc-3",
    name: "Eco Friendly Grocery Combo",
    slug: "eco-friendly-grocery-combo",
    sellerId: "seller-3",
    seller: "Eco Mart",
    shopName: "Eco Mart",
    category: "Groceries",
    categorySlug: "groceries",
    subCategory: "Combos",
    subCategorySlug: "combos",
    brand: "EcoLife",
    description: "Eco-friendly daily grocery essentials.",
    features: ["Eco Packaging", "Sustainable"],
    speciality: "Eco Choice",
    pkginfo: "Combo Pack",
    type: "Food",
    countryorigin: "India",
    exchange: "Yes",
    rating: 4.8,
    verification: "verified",
    status: "active",
    createdAt: new Date().toISOString(),

    variants: [
      {
        id: 6,
        type: "Combo Pack",
        sku: "ECO-COMBO",
        stock: 15,
        price: "499",
        oldprice: "599",
        discount: "17%",
        images: ["/frouv-v2/banner/banner3.png"],
        image: [
          {
            url: "/frouv-v2/banner/banner3.png",
          },
        ],
        originalPrice: 599,
        sale_price: "499",
        net_product_price: "499",
      },
    ],
  },
  {
    _id: "7",
    documentId: "doc-1",
    name: "Organic Apples",
    slug: "organic-apples",
    sellerId: "seller-1",
    seller: "Green Farm",
    shopName: "Green Farm Store",
    category: "Groceries",
    categorySlug: "groceries",
    subCategory: "Fruits & Vegetables",
    subCategorySlug: "fruits-vegetables",
    brand: "EcoFresh",
    description: "Fresh organic apples directly from farms.",
    features: ["100% Organic", "No Chemicals"],
    speciality: "Farm Fresh",
    pkginfo: "1 Kg Pack",
    type: "Food",
    countryorigin: "India",
    exchange: "No",
    rating: 4.5,
    verification: "verified",
    status: "active",
    createdAt: new Date().toISOString(),

    variants: [
      {
        id: 7,
        type: "1 Kg",
        sku: "APPLE-1KG",
        stock: 20,
        price: "180",
        oldprice: "220",
        discount: "18%",
        images: ["/frouv-v2/banner/banner1.webp"],
        image: [
          {
            url: "/frouv-v2/banner/banner1.webp",
          },
        ],
        originalPrice: 220,
        sale_price: "180",
        net_product_price: "180",
      },
    ],
  },

  {
    _id: "8",
    documentId: "doc-2",
    name: "Fresh Green Vegetables",
    slug: "fresh-green-vegetables",
    sellerId: "seller-2",
    seller: "Nature Hub",
    shopName: "Nature Hub",
    category: "Groceries",
    categorySlug: "groceries",
    subCategory: "Vegetables",
    subCategorySlug: "vegetables",
    brand: "NatureFresh",
    description: "Healthy green vegetables combo.",
    features: ["Fresh", "Pesticide Free"],
    speciality: "Daily Essentials",
    pkginfo: "500 g",
    type: "Food",
    countryorigin: "India",
    exchange: "No",
    rating: 4.2,
    verification: "verified",
    status: "active",
    createdAt: new Date().toISOString(),

    variants: [
      {
        id: 8,
        type: "500 g",
        sku: "VEG-500G",
        stock: 35,
        price: "90",
        oldprice: "120",
        discount: "25%",
        images: ["/frouv-v2/banner/banner2.png"],
        image: [
          {
            url: "/frouv-v2/banner/banner2.png",
          },
        ],
        originalPrice: 120,
        sale_price: "90",
        net_product_price: "90",
      },
    ],
  },

  
]

export default function Trending() {
  const [products, setProducts] = useState<Product[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => {
      window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  // Auto-play plugin for the slider
  const autoPlayPlugin = (slider: any) => {
    let timeout: ReturnType<typeof setTimeout>
    let mouseOver = false

    function clearNextTimeout() {
      clearTimeout(timeout)
    }

    function nextTimeout() {
      clearTimeout(timeout)
      if (mouseOver) return
      timeout = setTimeout(() => {
        slider.next()
      }, 3000) // Auto-slide every 3 seconds
    }

    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true
        clearNextTimeout()
      })
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false
        nextTimeout()
      })
      nextTimeout()
    })

    slider.on("dragStarted", clearNextTimeout)
    slider.on("animationEnded", nextTimeout)
    slider.on("updated", nextTimeout)
  }

  // Initialize the slider with different configurations for desktop vs mobile/tablet
  const [desktopSliderRef, desktopInstanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: "snap",
      slides: {
        perView: 1,
        spacing: 0
      },
      created() {
        setLoaded(true)
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
    },
    [autoPlayPlugin]
  )

  const [mobileTabletSliderRef, mobileTabletInstanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: "snap",
      slides: {
        perView: 2, // Default for mobile
        spacing: 16
      },
      breakpoints: {
        "(min-width: 768px)": {
          slides: {
            perView: 3, // 3 for tablet
            spacing: 16
          }
        }
      },
      created() {
        setLoaded(true)
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
    },
    [autoPlayPlugin]
  )


  // Chunk products into groups of 8 for desktop (4 columns × 2 rows)
  const productChunks = chunkArray(products, 8)

useEffect(() => {
  setProducts(DUMMY_TRENDING_PRODUCTS)
}, [])

  return (
    <section className="dark:bg-black dark:border border-white rounded-2xl shadow-sm ring-1 ring-black/5 p-4 sm:p-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="flex text-xl md:text-3xl dark:text-white font-bold text-green-900">
          Trending Eco-Products
          <span className="text-green-600 dark:text-white ml-2 text-4xl">
            <MdOutlineDoubleArrow />
          </span>
        </h2>
      </div>

      {/* Desktop Slider Layout (4 columns × 2 rows) */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Slider */}
          <div ref={desktopSliderRef} className="keen-slider">
            {productChunks.length > 0
              ? productChunks.map((chunk, index) => (
                <div key={index} className="keen-slider__slide">
                  <div className="grid grid-cols-4 gap-4">
                    {chunk.map((pro, idx) => (
                      <div key={idx} className="group  rounded-lg overflow-hidden shadow-sm hover:shadow-md transition relative">
                        <Trendingecotab pro={pro} variant={0} />
                        
                        <div className="absolute left-0 right-0 bottom-2 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                          {/* <ProductActions pro={pro} variant={0} /> */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
              : Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="keen-slider__slide">
                  <div className="grid grid-cols-4 gap-4">
                    {Array.from({ length: 8 }).map((_, j) => (
                      <div key={j} className="flex justify-center">
                        <div className="w-full max-w-[280px]">
                          <div className="bg-gray-200 animate-pulse rounded-lg aspect-square w-full"></div>
                          <div className="mt-3 bg-gray-200 animate-pulse h-4 w-3/4 rounded"></div>
                          <div className="mt-2 bg-gray-200 animate-pulse h-4 w-1/2 rounded"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          {/* Navigation Arrows */}
          {loaded && desktopInstanceRef.current && (
            <>
              <button
                onClick={() => desktopInstanceRef.current?.prev()}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all"
                aria-label="Previous slide"
              >
                <FaChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <button
                onClick={() => desktopInstanceRef.current?.next()}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all"
                aria-label="Next slide"
              >
                <FaChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile/Tablet Slider Layout */}
      <div className="lg:hidden">
        <div className="relative">
          {/* Slider */}
          <div ref={mobileTabletSliderRef} className="keen-slider">
            {products.length > 0
              ? products.map((pro, index) => (
                <div key={index} className="keen-slider__slide flex justify-center">
                  <div className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition relative w-full max-w-[280px]">
                    <Trendingecotab pro={pro} variant={0} />
                    {/* Add ProductActions for mobile/tablet */}
                    <div className="absolute left-0 right-0 bottom-2 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {/* <ProductActions pro={pro} variant={0} /> */}
                    </div>
                  </div>
                </div>
              ))
              : Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="keen-slider__slide flex justify-center">
                  <div className="w-full max-w-[280px]">
                    <div className="bg-gray-200 animate-pulse rounded-lg aspect-square w-full"></div>
                    <div className="mt-3 bg-gray-200 animate-pulse h-5 w-3/4 rounded"></div>
                    <div className="mt-2 bg-gray-200 animate-pulse h-6 w-1/2 rounded"></div>
                  </div>
                </div>
              ))}
          </div>

          {/* Navigation Arrows */}
          {loaded && mobileTabletInstanceRef.current && (
            <>
              <button
                onClick={() => mobileTabletInstanceRef.current?.prev()}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all"
                aria-label="Previous slide"
              >
                <FaChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <button
                onClick={() => mobileTabletInstanceRef.current?.next()}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all"
                aria-label="Next slide"
              >
                <FaChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}