

"use client"
import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect, useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import shivaOrganicBeauty from "../../public/frouv-v2/banner/banner1.webp"
import organicAnand from "../../public/frouv-v2/banner/banner2.png"
import Yogez from "../../public/frouv-v2/banner/banner3.png"
import ShivaOrganic from "../../public/frouv-v2/banner/banner4.webp"
import neemtoys from "../../public/frouv-v2/banner/banner3.png"

const offers = [
  {
    id: 1,
    title: "Monsoon Skincare Sale",
    image: shivaOrganicBeauty,
    discount: "20",
    brand: "Shiva Organic",
    category: "Beauty & Personal Care",
    slug: "beauty-personal-care",
  },
  {
    id: 2,
    title: "Organic Anand Grocery Deals",
    image: organicAnand,
    discount: "20",
    brand: "Organic Anand",
    category: "Groceries",
    slug: "Groceries",
  },
  {
    id: 3,
    title: "YOGEZ Organic Wellness Week",
    image: Yogez,
    discount: "10",
    brand: "YOGEZ",
    category: "Beauty & Personal Care",
    slug: "beauty-personal-care",
  },
  {
    id: 4,
    title: "Shiva Organic Groceries",
    image: ShivaOrganic,
    discount: "20",
    brand: "Shiva Organic",
    category: "Groceries",
    slug: "Groceries",
  },
  {
    id: 5,
    title: "Eco-friendly Gifts & Toys",
    image: neemtoys,
    discount: "20",
    brand: "neemtoys®",
    category: "Toys & Games",
    slug: "toys-games",
  },
]

const SeasonalOffers: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [loading, setLoading] = useState(true) // Add loading state

  // Check screen size on mount and resize
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
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

  // Initialize the slider with different configurations for mobile vs desktop
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: "snap",
      slides: {
        perView: isMobile ? 2 : 5,
        spacing: isMobile ? 16 : 24
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: {
            perView: 3,
            spacing: 16
          }
        },
        "(min-width: 768px)": {
          slides: {
            perView: 4,
            spacing: 20
          }
        },
        "(min-width: 1024px)": {
          slides: {
            perView: 5,
            spacing: 24
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

  return (
    <section className="container dark:border border-white dark:my-4 dark:rounded-2xl mx-auto px-4 py-6">
      <h2 className="text-xl md:text-2xl dark:text-white  font-bold mb-6 text-green-900">Seasonal Offers</h2>

      {loading ? (
        <>
          {/* Desktop/Tablet Grid View Shimmer (hidden on mobile) */}
          <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className=" rounded-lg overflow-hidden shadow-sm animate-pulse">
                <div className="w-full h-[180px] sm:h-[200px] lg:h-[250px] bg-gray-300"></div>
                <div className="p-3 bg-gray-50">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Slider View Shimmer (visible only on mobile) */}
          <div className="md:hidden relative">
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="border rounded-lg overflow-hidden shadow-sm animate-pulse">
                  <div className="w-full h-[160px] bg-gray-300"></div>
                  <div className="p-3 bg-gray-50">
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Desktop/Tablet Grid View (hidden on mobile) */}
          <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {offers.map((offer) => (
              <Link
                key={offer.id}
                href={`/best-deals?category=${offer.slug}&discount=${offer.discount}&brand=${offer.brand}`}
                className=" rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <div className="w-full h-[180px] sm:h-[200px] lg:h-[250px] overflow-hidden p-2 bg-orange-50">
                  <Image
                    src={offer.image || "/placeholder.svg"}
                    alt={offer.title}
                    className="w-full h-full object-fill hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 bg-gray-50">
                  <h3 className="text-sm md:text-base font-semibold truncate text-green-900">{offer.title}</h3>
                  <p className="text-red-500 font-bold text-xs md:text-sm">Up to {offer.discount}% Off</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Slider View (visible only on mobile) */}
          <div className="md:hidden relative">
            <div ref={sliderRef} className="keen-slider">
              {offers.map((offer) => (
                <div key={offer.id} className="keen-slider__slide">
                  <Link
                    href={`/best-deals?category=${offer.slug}&discount=${offer.discount}&brand=${offer.brand}`}
                    className=" rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer block"
                  >
                    <div className="w-full h-[160px] overflow-hidden p-2 bg-orange-50">
                      <Image
                        src={offer.image || "/placeholder.svg"}
                        alt={offer.title}
                        className="w-full h-full object-fill hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3 bg-gray-50">
                      <h3 className="text-sm font-semibold truncate text-green-900">{offer.title}</h3>
                      <p className="text-red-500 font-bold text-xs">Up to {offer.discount}% Off</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Navigation Arrows for Mobile */}
            {loaded && instanceRef.current && isMobile && (
              <>
                <button
                  onClick={() => instanceRef.current?.prev()}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all"
                  aria-label="Previous slide"
                >
                  <FaChevronLeft className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => instanceRef.current?.next()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all"
                  aria-label="Next slide"
                >
                  <FaChevronRight className="w-4 h-4 text-gray-600" />
                </button>
              </>
            )}
          </div>
        </>
      )}
    </section>
  )
}

export default SeasonalOffers