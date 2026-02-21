"use client"

import { useEffect, useRef } from "react"

/* ---------- IMAGES ---------- */
const desktopImages = [
  "/frouv-v2/Banner/Banner_1.png",
  "/frouv-v2/Banner/Banner_2.png",
  "/frouv-v2/Banner/Banner_3.png",
  "/frouv-v2/Banner/Banner_4.png",
  "/frouv-v2/Banner/Banner_5.png",
  "/frouv-v2/Banner/Banner_6.png",
  "/frouv-v2/Banner/Banner_7.png",
  "/frouv-v2/Banner/Banner_8.png",
]

const mobileImages = [
  "/frouv-v2/Banner/mobile_banner/1st_banner.png",
  "/frouv-v2/Banner/mobile_banner/2nd_banner.png",
  "/frouv-v2/Banner/mobile_banner/3rd_banner.png",
  "/frouv-v2/Banner/mobile_banner/4th_banner.png",
  "/frouv-v2/Banner/mobile_banner/5th_banner.png",
  "/frouv-v2/Banner/mobile_banner/6th_banner.png",
  "/frouv-v2/Banner/mobile_banner/7th_banner.png",
  "/frouv-v2/Banner/mobile_banner/8th_banner.png",
]

export default function HeroBanner() {
  const desktopRef = useRef<HTMLDivElement | null>(null)
  const mobileRef = useRef<HTMLDivElement | null>(null)

  const desktopIndex = useRef(1)
  const mobileIndex = useRef(1)

  const isInteracting = useRef(false)
  const desktopTimer = useRef<NodeJS.Timeout | null>(null)
  const mobileTimer = useRef<NodeJS.Timeout | null>(null)

  /* ---------- DUPLICATE FIRST & LAST SLIDE ---------- */
  const desktopSlides = [
    desktopImages[desktopImages.length - 1],
    ...desktopImages,
    desktopImages[0],
  ]

  const mobileSlides = [
    mobileImages[mobileImages.length - 1],
    ...mobileImages,
    mobileImages[0],
  ]

  /* ---------- INIT SCROLL TO FIRST REAL SLIDE ON MOUNT ---------- */
  useEffect(() => {
    if (desktopRef.current) {
      desktopRef.current.scrollTo({
        left: desktopRef.current.clientWidth,
        behavior: "auto",
      })
    }

    if (mobileRef.current) {
      mobileRef.current.scrollTo({
        left: mobileRef.current.clientWidth,
        behavior: "auto",
      })
    }
  }, [])

  /* ---------- AUTO SCROLL ---------- */
  useEffect(() => {
    const interval = setInterval(() => {
      if (isInteracting.current) return

      if (desktopRef.current) {
        desktopIndex.current += 1
        desktopRef.current.scrollTo({
          left: desktopIndex.current * desktopRef.current.clientWidth,
          behavior: "smooth",
        })
      }

      if (mobileRef.current) {
        mobileIndex.current += 1
        mobileRef.current.scrollTo({
          left: mobileIndex.current * mobileRef.current.clientWidth,
          behavior: "smooth",
        })
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  /* ---------- SCROLL END HANDLER ---------- */
  const handleScrollEnd = (
    ref: React.RefObject<HTMLDivElement | null>,
    indexRef: React.MutableRefObject<number>,
    slides: string[]
  ) => {
    if (!ref.current) return

    const width = ref.current.clientWidth
    const scrollLeft = ref.current.scrollLeft
    let index = Math.round(scrollLeft / width)

    // Handle forward reset
    if (index >= slides.length - 1) {
      indexRef.current = 1
      ref.current.scrollTo({ left: width, behavior: "auto" })
    }
    // Handle backward reset
    else if (index <= 0) {
      indexRef.current = slides.length - 2
      ref.current.scrollTo({ left: indexRef.current * width, behavior: "auto" })
    } else {
      indexRef.current = index
    }

    isInteracting.current = false
  }

  /* ---------- WRAPPER FOR SCROLL EVENT WITH MOMENTUM FIX ---------- */
  const handleScroll = (
    ref: React.RefObject<HTMLDivElement | null>,
    indexRef: React.MutableRefObject<number>,
    slides: string[],
    timerRef: React.MutableRefObject<NodeJS.Timeout | null>
  ) => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      handleScrollEnd(ref, indexRef, slides)
    }, 100) // small delay to wait for momentum
  }

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <section className="hidden lg:block w-full h-screen overflow-hidden">
        <div
          ref={desktopRef}
          className="flex h-full w-full overflow-x-scroll snap-x snap-mandatory no-scrollbar"
          onScroll={() =>
            handleScroll(desktopRef, desktopIndex, desktopSlides, desktopTimer)
          }
          onMouseDown={() => (isInteracting.current = true)}
          onTouchStart={() => (isInteracting.current = true)}
        >
          {desktopSlides.map((img, i) => (
            <div key={i} className="relative min-w-full h-full snap-center">
              <img src={img} alt="" className="w-full h-full object-fill" />
            </div>
          ))}
        </div>
      </section>

      {/* ================= MOBILE ================= */}
      <section className="lg:hidden w-full">
        <div
          ref={mobileRef}
          className="flex w-full h-[200px] overflow-x-scroll snap-x snap-mandatory no-scrollbar"
          onScroll={() =>
            handleScroll(mobileRef, mobileIndex, mobileSlides, mobileTimer)
          }
          onTouchStart={() => (isInteracting.current = true)}
          onTouchEnd={() => {
            // wait for swipe momentum to finish before resuming auto-scroll
            setTimeout(() => {
              handleScrollEnd(mobileRef, mobileIndex, mobileSlides)
            }, 50)
          }}
        >
          {mobileSlides.map((img, i) => (
            <div key={i} className="relative min-w-full h-full snap-center">
              <img src={img} alt="" className="w-full h-full object-fill" />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
