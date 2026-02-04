
"use client"

import type { Product } from "@/app/models/product"
import Link from "next/link"

export default function Trendingecotab({
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
    <div className=" rounded-lg overflow-hidden shadow-sm hover:shadow-md transition relative">
      <Link href={productLink} prefetch={true}>
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={pro?.name}
          className="w-full bg-teal-50 h-48 sm:h-48 lg:h-56 object-contain p-2"
          loading="lazy"
        />
      </Link>
    </div>
  )
}