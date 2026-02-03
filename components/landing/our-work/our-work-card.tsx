'use client'
import { StaticImageData } from 'next/image'

interface OurWorkCardProps {
  title: string
  description: string
  tags: { label: string; variant: 'primary' | 'secondary' }[]
  imageUrl: string | StaticImageData
  imageAlt: string
}

export default function OurWorkCard({
  title,
  description,
  tags,
  imageUrl,
  imageAlt,
}: OurWorkCardProps) {
  return (
    <div className="max-w-[548px] w-full border border-[#D3D3D3] rounded-[16px] py-6 px-12 bg-[#FCFCFC]">
      {/* Image Container */}
      <div className="mb-6  overflow-hidden bg-[#FCFCFC] h-64">
        <img
  src={typeof imageUrl === 'string' ? imageUrl : imageUrl.src}
          alt={imageAlt}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="space-y-4">
{/* Title + Tags in same line */}
<div className="flex items-start justify-between gap-4">
  <h3 className="text-[#1B1B1B] font-medium robotoText text-[16px]">
    {title}
  </h3>

  <div className="flex flex-wrap gap-2">
    {tags.map((tag, index) => (
      <button
        key={index}
        className={`px-4 py-2 rounded-full ${
          tag.variant === 'primary'
            ? 'bg-[#FBE4E3] text-[#8E2A27] text-[8px] font-medium robotoText border border-[#8E2A27]'
            : 'bg-[#E0E9FF] text-[#225295] text-[8px] font-medium robotoText border border-[#225295]'
        }`}
      >
        {tag.label}
      </button>
    ))}
  </div>
</div>

{/* Description */}
<p className="text-[#615F5F] text-[14px] robotoText leading-relaxed">
  {description}
</p>
      </div>
    </div>
  )
}
