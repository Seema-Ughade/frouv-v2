
"use client"

import { Product } from "@/app/models/product"
import Link from "next/link"

export default function Ecogiftstab({
  pro,
  variant = 0,
}: {
  pro: Product
  variant: number
  width?: number
  height?: number
}) {
  const variantData = pro.variants?.[variant] ?? pro.variants?.[0]
const rawUrl = variantData?.image?.[0]?.url || ""

const imageUrl = rawUrl.startsWith("/")
  ? rawUrl // local/public image
  : `${process.env.NEXT_PUBLIC_API_PATH}${rawUrl}`
  const productLink = `/product/${pro?.slug}?variant=${variant}&name=${variantData?.type}`

  return (
    <div className="group relative p-2 w-full sm:max-w-[260px] bg-gradient-to-r from-orange-50 to-green-50 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      {/* Image Section */}
      <Link href={productLink} prefetch={true}>
        <div className="relative aspect-square overflow-hidden border border-gray-200 rounded-lg  shadow-sm">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={pro?.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>
    </div>
  )
}
