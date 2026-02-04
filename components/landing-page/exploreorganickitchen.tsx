
"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect, useState } from "react"
import { MdOutlineDoubleArrow } from "react-icons/md"
import type { Product } from "@/app/models/product"
import ProductImgTab from "./productimgtab"
import first from "../../public/frouv-v2/banner/banner1.webp";
import second from "../../public/frouv-v2/banner/banner2.png";
import third from "../../public/frouv-v2/banner/banner3.png";
import four from "../../public/frouv-v2/banner/banner4.webp";
import heroDesktop from "../../public/frouv-v2/banner/banner5.png";

export default function ExploreOrganicKitchen() {
  const [products, setProducts] = useState<Product[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

const DUMMY_PRODUCTS: Product[] = [
  {
    documentId: "doc-1",
    _id: "1",
    name: "Neemtoys Kids Collection",
    slug: "neemtoys-kids",
    sellerId: "seller-1",
    seller: "Neemtoys",
    shopName: "Neemtoys Store",
    category: "Toys & Games",
    categorySlug: "toys-games",
    subCategory: "Kids Toys",
    subCategorySlug: "kids-toys",
    brand: "Neemtoys®",
    description: "Eco-friendly toys for kids",
    features: [],
    speciality: "",
    pkginfo: "",
    type: "simple",
    countryorigin: "India",
    exchange: "No",
    rating: 4.6,
    verification: "verified",
    status: "active",
    createdAt: new Date().toISOString(),
    variants: [
      {
        id: 1,
        type: "Default",
        sku: "NEEM-001",
        stock: 50,
        price: "999",
        oldprice: "1299",
        discount: "20%",
        images: [],
        originalPrice: 1299,
        sale_price: "999",
        net_product_price: "999",
        image: heroDesktop,
      },
    ],
  },

  {
    documentId: "doc-2",
    _id: "2",
    name: "Organic Anand Grocery Deals",
    slug: "organic-anand-grocery",
    sellerId: "seller-2",
    seller: "Organic Anand",
    shopName: "Organic Anand",
    category: "Groceries",
    categorySlug: "groceries",
    subCategory: "Daily Essentials",
    subCategorySlug: "daily-essentials",
    brand: "Organic Anand",
    description: "Pure organic grocery essentials",
    features: [],
    speciality: "",
    pkginfo: "",
    type: "simple",
    countryorigin: "India",
    exchange: "No",
    rating: 4.4,
    verification: "verified",
    status: "active",
    createdAt: new Date().toISOString(),
    variants: [
      {
        id: 2,
        type: "Default",
        sku: "ORG-001",
        stock: 80,
        price: "499",
        oldprice: "699",
        discount: "20%",
        images: [],
        originalPrice: 699,
        sale_price: "499",
        net_product_price: "499",
        image: second,
      },
    ],
  },

  {
    documentId: "doc-3",
    _id: "3",
    name: "Monsoon Skincare Sale",
    slug: "monsoon-skincare",
    sellerId: "seller-3",
    seller: "Shiva Organic",
    shopName: "Shiva Organic",
    category: "Beauty & Personal Care",
    categorySlug: "beauty-personal-care",
    subCategory: "Skincare",
    subCategorySlug: "skincare",
    brand: "Shiva Organic",
    description: "Natural skincare for monsoon",
    features: [],
    speciality: "",
    pkginfo: "",
    type: "simple",
    countryorigin: "India",
    exchange: "No",
    rating: 4.5,
    verification: "verified",
    status: "active",
    createdAt: new Date().toISOString(),
    variants: [
      {
        id: 3,
        type: "Default",
        sku: "SKIN-001",
        stock: 60,
        price: "799",
        oldprice: "999",
        discount: "20%",
        images: [],
        originalPrice: 999,
        sale_price: "799",
        net_product_price: "799",
        image: first,
      },
    ],
  },

  {
    documentId: "doc-4",
    _id: "4",
    name: "YOGEZ Organic Wellness",
    slug: "yogez-wellness",
    sellerId: "seller-4",
    seller: "YOGEZ",
    shopName: "YOGEZ Wellness",
    category: "Beauty & Personal Care",
    categorySlug: "beauty-personal-care",
    subCategory: "Wellness",
    subCategorySlug: "wellness",
    brand: "YOGEZ",
    description: "Organic wellness products",
    features: [],
    speciality: "",
    pkginfo: "",
    type: "simple",
    countryorigin: "India",
    exchange: "No",
    rating: 4.3,
    verification: "verified",
    status: "active",
    createdAt: new Date().toISOString(),
    variants: [
      {
        id: 4,
        type: "Default",
        sku: "WELL-001",
        stock: 40,
        price: "899",
        oldprice: "999",
        discount: "10%",
        images: [],
        originalPrice: 999,
        sale_price: "899",
        net_product_price: "899",
        image: third,
      },
    ],
  },

  {
    documentId: "doc-5",
    _id: "5",
    name: "Shiva Organic Groceries",
    slug: "shiva-organic-groceries",
    sellerId: "seller-3",
    seller: "Shiva Organic",
    shopName: "Shiva Organic",
    category: "Groceries",
    categorySlug: "groceries",
    subCategory: "Staples",
    subCategorySlug: "staples",
    brand: "Shiva Organic",
    description: "Organic grocery essentials",
    features: [],
    speciality: "",
    pkginfo: "",
    type: "simple",
    countryorigin: "India",
    exchange: "No",
    rating: 4.4,
    verification: "verified",
    status: "active",
    createdAt: new Date().toISOString(),
    variants: [
      {
        id: 5,
        type: "Default",
        sku: "GROC-001",
        stock: 90,
        price: "599",
        oldprice: "749",
        discount: "20%",
        images: [],
        originalPrice: 749,
        sale_price: "599",
        net_product_price: "599",
        image: four,
      },
    ],
  },

  {
    documentId: "doc-6",
    _id: "6",
    name: "Hero Organic Collection",
    slug: "hero-organic-collection",
    sellerId: "seller-5",
    seller: "Frouv",
    shopName: "Frouv Store",
    category: "Featured",
    categorySlug: "featured",
    subCategory: "Highlights",
    subCategorySlug: "highlights",
    brand: "Frouv",
    description: "Top organic picks",
    features: [],
    speciality: "",
    pkginfo: "",
    type: "simple",
    countryorigin: "India",
    exchange: "No",
    rating: 4.8,
    verification: "verified",
    status: "active",
    createdAt: new Date().toISOString(),
    variants: [
      {
        id: 6,
        type: "Default",
        sku: "HERO-001",
        stock: 100,
        price: "1299",
        oldprice: "1599",
        discount: "20%",
        images: [],
        originalPrice: 1599,
        sale_price: "1299",
        net_product_price: "1299",
        image: heroDesktop,
      },
    ],
  },
];


useEffect(() => {
  setProducts(DUMMY_PRODUCTS)
}, [])


  // Calculate slides per view based on container width
  const calculateSlidesPerView = (containerWidth: number) => {
    if (containerWidth >= 1280) return 5;
    if (containerWidth >= 1024) return 3;
    if (containerWidth >= 640) return 3;
    return 1;
  }

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    mode: "snap",
    slides: { perView: 1, spacing: 16 },
    created(slider) {
      setLoaded(true);

      // Set initial slides per view based on container width
      const containerWidth = slider.container.clientWidth;
      slider.options.slides = {
        perView: calculateSlidesPerView(containerWidth),
        spacing: 16
      };
      slider.update();
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    updated(slider) {
      // Update slides per view when slider is updated (e.g., on resize)
      const containerWidth = slider.container.clientWidth;
      slider.options.slides = {
        perView: calculateSlidesPerView(containerWidth),
        spacing: 16
      };
    },
  }, [
    // Auto-play functionality
    (slider) => {
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
        }, 2000)
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
    },
    // Resize observer to update slider on window resize
    (slider) => {
      const observer = new ResizeObserver(() => {
        slider.update()
      })

      slider.on("created", () => {
        observer.observe(slider.container)
      })

      slider.on("destroyed", () => {
        observer.unobserve(slider.container)
      })
    }
  ])
  const category = "Explore Organic Home & Kitchen Products";
  const encodedCategory = encodeURIComponent(category);


  
  return (
    <section className="py-10 md:py-9 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 md:mb-10">
          <h2 className="flex text-2xl md:text-3xl font-bold text-green-900">
            Explore Organic Home & Kitchen Products
            <span className="text-green-600 ml-2 text-4xl">
              <MdOutlineDoubleArrow />
            </span>
          </h2>

        </div>

        {/* Slider Container */}
        <div className="relative px-4">
          {/* Slider */}
          <div ref={sliderRef} className="keen-slider">
            {products.length > 0
              ? products.map((pro, index) => (
                <div key={index} className="keen-slider__slide flex justify-center">
                  <div className="group relative">
                    <ProductImgTab pro={pro} variant={0} width={0} height={0} />
                    <div className="absolute left-0 right-0 bottom-2 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {/* <ProductActions pro={pro} variant={0} /> */}
                    </div>
                  </div>
                </div>
              ))
              : Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="keen-slider__slide flex justify-center">
                  <div className="w-full max-w-[320px]">
                    <div className="bg-gray-200 animate-pulse rounded-lg aspect-square w-full"></div>
                    <div className="mt-3 bg-gray-200 animate-pulse h-5 w-3/4 rounded"></div>
                    <div className="mt-2 bg-gray-200 animate-pulse h-6 w-1/2 rounded"></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
