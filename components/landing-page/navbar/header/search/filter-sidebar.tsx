"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FilterSidebarProps {
  filters: {
    category: string[]
    priceRange: { min: number; max: number }
    availability: string[]
    rating: string[]
    brand: string[]
    certification: string[]
    packagingSize: string[]
  }
  setFilters: (filters: any) => void
}

export default function FilterSidebar({ filters, setFilters }: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    category: false,
    priceRange: true,
    availability: false,
    rating: false,
    brand: false,
    certification: false,
    packagingSize: false,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleCategoryChange = (category: string) => {
    setFilters({
      ...filters,
      category: filters.category.includes(category)
        ? filters.category.filter((c) => c !== category)
        : [...filters.category, category],
    })
  }

  const handleAvailabilityChange = (availability: string) => {
    setFilters({
      ...filters,
      availability: filters.availability.includes(availability)
        ? filters.availability.filter((a) => a !== availability)
        : [...filters.availability, availability],
    })
  }

  const handlePriceChange = (type: "min" | "max", value: number) => {
    setFilters({
      ...filters,
      priceRange: {
        ...filters.priceRange,
        [type]: value,
      },
    })
  }

  const handleClearFilters = () => {
    setFilters({
      category: [],
      priceRange: { min: 1, max: 0 },
      availability: [],
      rating: [],
      brand: [],
      certification: [],
      packagingSize: [],
    })
  }

  return (
    <aside className="w-[217px] flex-shrink-0">
      <div className=" border-[#9E9E9E]  border-r-[1px] bg-card p-6">
        <h2 className="mb-6 text-[16px] ">Filters</h2>

        {/* Category Filter */}
        <div className="mb-6  border-b-[1px] border-[#9E9E9E] pb-4">
          <button
            onClick={() => toggleSection("category")}
            className="flex w-full items-center justify-between text-[14px] font-medium text-foreground"
          >
            Category
            <ChevronDown
              size={16}
              className={`transition-transform ${expandedSections.category ? "rotate-180" : ""}`}
            />
          </button>
          {expandedSections.category && (
            <div className="mt-4 space-y-3">
              {["Beauty & Personal Care", "Groceries", "Natural Health & Wellness"].map((cat) => (
                <label key={cat} className="flex items-center gap-2">
                  {/* <input
                    type="checkbox"
                    checked={filters.category.includes(cat)}
                    onChange={() => handleCategoryChange(cat)}
                    className="h-4 w-4 rounded border-[#9E9E9E] border-border"
                  /> */}
                  <span className="text-sm text-foreground/80">{cat}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Price Range Filter */}
        <div className="mb-6 border-b border-[#9E9E9E] pb-4">
          <button
            onClick={() => toggleSection("priceRange")}
            className="flex w-full items-center justify-between text-[14px] font-medium text-foreground"
          >
            Price Range
            <ChevronDown
              size={16}
              className={`transition-transform ${expandedSections.priceRange ? "rotate-180" : ""}`}
            />
          </button>
          {expandedSections.priceRange && (
            <div className="mt-4 flex gap-2">
                           <label className="flex w-[70px]  h-[40px] gap-1 rounded border border-[#9E9E9E]  items-center">
                            <div className="ml-1"> <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.78103 2.40632L6.44296 3.55973H-0.000221934L0.337846 2.40632H6.78103ZM3.7583 10.1819L0.119096 5.72734L0.0992099 4.89211H1.90887C2.37951 4.89211 2.78055 4.82582 3.11199 4.69325C3.44343 4.55736 3.69698 4.35518 3.87265 4.08671C4.04831 3.81493 4.13614 3.47355 4.13614 3.06257C4.13614 2.45603 3.95385 1.98042 3.58927 1.63572C3.22468 1.28771 2.66455 1.1137 1.90887 1.1137H-0.000221934L0.337846 6.62804e-05H1.90887C2.71758 6.62804e-05 3.38046 0.134299 3.89751 0.402765C4.41787 0.667917 4.80234 1.0325 5.05091 1.49651C5.30281 1.95722 5.42876 2.47923 5.42876 3.06257C5.42876 3.58955 5.31275 4.07511 5.08074 4.51924C4.85205 4.96006 4.48415 5.3147 3.97705 5.58316C3.47326 5.85163 2.80707 5.98586 1.97847 5.98586H1.94864L5.30944 10.1023V10.1819H3.7583ZM6.78103 6.62804e-05L6.44296 1.15348L1.37194 1.1137L1.71001 6.62804e-05H6.78103Z" fill="#9E9E9E"/>
</svg>
</div>
                           
              <input
                type="number"
                placeholder="₹0"
                value={filters.priceRange.min}
                onChange={(e) => handlePriceChange("min", Number(e.target.value))}
                className="w-[51.33px] h-[20px]              focus:outline-none focus:border-transparent focus:ring-0
 px-2 py-1 text-[14px] placeholder:text-[14px]  text-[9E9E9E] "
              />
                            </label>

              <span className="flex items-center text-foreground/60">To</span>
             <label className="flex w-[70px]  h-[40px] gap-1 rounded border border-[#9E9E9E]  items-center">
                            <div className="ml-1"> <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.78103 2.40632L6.44296 3.55973H-0.000221934L0.337846 2.40632H6.78103ZM3.7583 10.1819L0.119096 5.72734L0.0992099 4.89211H1.90887C2.37951 4.89211 2.78055 4.82582 3.11199 4.69325C3.44343 4.55736 3.69698 4.35518 3.87265 4.08671C4.04831 3.81493 4.13614 3.47355 4.13614 3.06257C4.13614 2.45603 3.95385 1.98042 3.58927 1.63572C3.22468 1.28771 2.66455 1.1137 1.90887 1.1137H-0.000221934L0.337846 6.62804e-05H1.90887C2.71758 6.62804e-05 3.38046 0.134299 3.89751 0.402765C4.41787 0.667917 4.80234 1.0325 5.05091 1.49651C5.30281 1.95722 5.42876 2.47923 5.42876 3.06257C5.42876 3.58955 5.31275 4.07511 5.08074 4.51924C4.85205 4.96006 4.48415 5.3147 3.97705 5.58316C3.47326 5.85163 2.80707 5.98586 1.97847 5.98586H1.94864L5.30944 10.1023V10.1819H3.7583ZM6.78103 6.62804e-05L6.44296 1.15348L1.37194 1.1137L1.71001 6.62804e-05H6.78103Z" fill="#9E9E9E"/>
</svg>
</div>
                           
              <input
                type="number"
                placeholder="₹1"
                value={filters.priceRange.max}
                onChange={(e) => handlePriceChange("max", Number(e.target.value))}
                className="w-[51.33px]  focus:outline-none focus:border-transparent focus:ring-0
 h-[20px]  px-2 py-1 text-[14px] placeholder:text-[14px]  text-[9E9E9E] "
              />
              </label>

            </div>
          )}
        </div>

        {/* Availability Filter */}
        <div className="mb-6 border-b border-[#9E9E9E] pb-4">
          <button
            onClick={() => toggleSection("availability")}
            className="flex w-full items-center justify-between text-[14px] font-medium text-foreground"
          >
            Availability
            <ChevronDown
              size={16}
              className={`transition-transform ${expandedSections.availability ? "rotate-180" : ""}`}
            />
          </button>
          {expandedSections.availability && (
            <div className="mt-4 space-y-3">
              {["In Stock", "Out of Stock"].map((avail) => (
                <label key={avail} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={filters.availability.includes(avail)}
                    onChange={() => handleAvailabilityChange(avail)}
                    className="h-4 w-4 rounded border-border"
                  />
                  <span className="text-sm text-foreground/80">{avail}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Rating Filter */}
        <div className="mb-6 border-b border-[#9E9E9E] pb-4">
          <button
            onClick={() => toggleSection("rating")}
            className="flex w-full items-center justify-between text-[14px] font-medium text-foreground"
          >
            Rating
            <ChevronDown size={16} className={`transition-transform ${expandedSections.rating ? "rotate-180" : ""}`} />
          </button>
          {expandedSections.rating && (
            <div className="mt-4 space-y-2">
              {["4★ & up", "3★ & up", "2★ & up", "1★ & up"].map((rating) => (
                <label key={rating} className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-border" />
                  <span className="text-sm text-foreground/80">{rating}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Brand Filter */}
        <div className="mb-6 border-b border-[#9E9E9E] pb-4">
          <button
            onClick={() => toggleSection("brand")}
            className="flex w-full items-center justify-between text-[14px] font-medium text-foreground"
          >
            Brand
            <ChevronDown size={16} className={`transition-transform ${expandedSections.brand ? "rotate-180" : ""}`} />
          </button>
          {expandedSections.brand && (
            <div className="mt-4 space-y-2">
              {["24 Mantra Organic", "Organic India", "Pro nature", "Just organik"].map((brand) => (
                <label key={brand} className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-border" />
                  <span className="text-sm text-foreground/80">{brand}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Certification Filter */}
        <div className="mb-6 border-b border-[#9E9E9E] pb-4">
          <button
            onClick={() => toggleSection("certification")}
            className="flex w-full items-center justify-between text-[14px] font-medium text-foreground"
          >
            Certification
            <ChevronDown
              size={16}
              className={`transition-transform ${expandedSections.certification ? "rotate-180" : ""}`}
            />
          </button>
          {expandedSections.certification && (
            <div className="mt-4 space-y-2">
              {["Fassi certificate", "NPOP Certificate", "PGS - India", "USDA Organic"].map((cert) => (
                <label key={cert} className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-border" />
                  <span className="text-sm text-foreground/80">{cert}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Packaging Size Filter */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection("packagingSize")}
            className="flex w-full items-center justify-between text-sm font-semibold text-foreground"
          >
            Packaging Size
            <ChevronDown
              size={16}
              className={`transition-transform ${expandedSections.packagingSize ? "rotate-180" : ""}`}
            />
          </button>
          {expandedSections.packagingSize && (
            <div className="mt-4 space-y-2">
              {["100gm", "200gm", "500gm", "1kg"].map((size) => (
                <label key={size} className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-border" />
                  <span className="text-sm text-foreground/80">{size}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button className="w-full rounded bg-[#D4D4D4] px-4 py-2 font-semibold text-[#6B7280] transition hover:bg-[#689f38] hover:text-white">
            Apply Filters
          </button>
          <button
            onClick={handleClearFilters}
            className="w-full rounded border border-[#8BC34A] px-4 py-2 font-semibold text-[#8BC34A] transition hover:bg-[#689f38] hover:text-white"
          >
            Clear All
          </button>
        </div>
      </div>
    </aside>
  )
}
