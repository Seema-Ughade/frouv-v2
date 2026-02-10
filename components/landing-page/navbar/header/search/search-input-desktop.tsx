"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { SearchIcon } from "lucide-react"
// import SearchSuggestions from "./search-suggestions"

export default function SearchInputDesktop() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    setIsOpen(value.trim().length > 0)
  }, [])

  const handleInputFocus = useCallback(() => {
    if (searchQuery.trim().length > 0) {
      setIsOpen(true)
    }
  }, [searchQuery])

  const handleSearch = useCallback(() => {
    const query = searchQuery.trim()
    if (!query) return
    router.push(`/search?q=${encodeURIComponent(query)}`)
    setIsOpen(false)
  }, [searchQuery, router])

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleSearch()
    } else if (e.key === "Escape") {
      setIsOpen(false)
      inputRef.current?.blur()
    }
  }, [handleSearch])

  return (
    <div ref={containerRef} className="relative w-full max-w-[459px]">
      <div className="flex bg-[#F5F5F5] items-center w-full h-12 border border-gray-300 rounded-xl gap-1 px-2">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search by product, brand, or category..."
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          className="flex-1 h-full outline-none text-sm text-gray-700 bg-transparent placeholder:text-gray-400"
          autoComplete="off"
        />
        <button
          onClick={handleSearch}
          type="button"
          className="bg-[#78B13F] hover:bg-[#689f38] w-14 h-10 flex items-center justify-center rounded-lg transition-colors duration-200 active:scale-95"
          aria-label="Search"
        >
          <SearchIcon className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* <SearchSuggestions
        isOpen={isOpen}
        searchQuery={searchQuery}
        onQueryChange={setSearchQuery}
        onSearch={handleSearch}
      /> */}
    </div>
  )
}
