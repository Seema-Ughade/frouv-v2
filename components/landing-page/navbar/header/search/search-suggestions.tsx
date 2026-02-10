"use client"

import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { useRouter } from "next/navigation"
import { getSearchSuggestions, type SearchSuggestion } from "@/lib/actions/search-actions"

interface SearchSuggestionsProps {
  isOpen: boolean
  searchQuery: string
  onQueryChange: (query: string) => void
  onSearch?: () => void
}

const RECENT_SEARCHES_KEY = "recent_searches"
const MAX_RECENT_SEARCHES = 5
const DEBOUNCE_DELAY = 250 // Reduced from 300ms for faster response

// Get recent searches from localStorage
const getRecentSearches = (): string[] => {
  if (typeof window === "undefined") return []
  try {
    const stored = localStorage.getItem(RECENT_SEARCHES_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

// Save recent search to localStorage
const saveRecentSearch = (query: string) => {
  if (typeof window === "undefined") return
  try {
    const recent = getRecentSearches()
    const updated = [query, ...recent.filter((q) => q !== query)].slice(0, MAX_RECENT_SEARCHES)
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated))
  } catch {
    // Ignore localStorage errors
  }
}

export default function SearchSuggestions({ isOpen, searchQuery, onQueryChange, onSearch }: SearchSuggestionsProps) {
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const router = useRouter()
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null)
  const abortControllerRef = useRef<AbortController | null>(null)

  // Load recent searches from localStorage on mount
  useEffect(() => {
    setRecentSearches(getRecentSearches())
  }, [])

  // Fetch suggestions from API with debouncing and cancellation
  useEffect(() => {
    // Cancel previous request if any
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }

    // Clear previous timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current)
    }

    const trimmedQuery = searchQuery.trim()

    if (!trimmedQuery) {
      setSuggestions([])
      setIsLoading(false)
      return
    }

    // Only search if query is at least 2 characters
    if (trimmedQuery.length < 2) {
      setSuggestions([])
      setIsLoading(false)
      return
    }

    setIsLoading(true)

    // Create new abort controller for this request
    abortControllerRef.current = new AbortController()

    // Debounce server action call
    debounceTimerRef.current = setTimeout(async () => {
      try {
        const suggestionsData = await getSearchSuggestions(trimmedQuery)
        // Only update if request wasn't aborted
        if (!abortControllerRef.current?.signal.aborted) {
          setSuggestions(suggestionsData || [])
        }
      } catch (error: any) {
        // Ignore abort errors
        if (error?.name !== 'AbortError') {
          console.error("Error fetching search suggestions:", error)
          setSuggestions([])
        }
      } finally {
        if (!abortControllerRef.current?.signal.aborted) {
          setIsLoading(false)
        }
      }
    }, DEBOUNCE_DELAY)

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current)
      }
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
    }
  }, [searchQuery])

  const handleSuggestionClick = useCallback((suggestion: SearchSuggestion) => {
    saveRecentSearch(suggestion.name)
    setRecentSearches(getRecentSearches())
    router.push(`/search?q=${encodeURIComponent(suggestion.name)}`)
  }, [router])

  const handleClearRecent = useCallback(() => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(RECENT_SEARCHES_KEY)
    }
    setRecentSearches([])
  }, [])

  const handleRecentClick = useCallback((search: string) => {
    onQueryChange(search)
    // Trigger search after setting query
    setTimeout(() => {
      if (onSearch) {
        onSearch()
      } else {
        router.push(`/search?q=${encodeURIComponent(search)}`)
      }
    }, 0)
  }, [onQueryChange, onSearch, router])

  const handleShowAllResults = useCallback(() => {
    const trimmedQuery = searchQuery.trim()
    if (trimmedQuery) {
      saveRecentSearch(trimmedQuery)
      setRecentSearches(getRecentSearches())
    }
    if (onSearch) {
      onSearch()
    } else {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }, [searchQuery, onSearch, router])

  // Memoize whether to show suggestions or recent searches
  const showSuggestions = useMemo(() => {
    return searchQuery.trim().length >= 2 && (suggestions.length > 0 || isLoading)
  }, [searchQuery, suggestions.length, isLoading])

  if (!isOpen) return null

  return (
    <div className="absolute z-50 left-0 right-0 top-full mt-2 w-full max-w-[459px] shadow-lg rounded-xl bg-white border border-gray-200 overflow-hidden">
      <div className="max-h-[440px] overflow-y-auto">
        {showSuggestions ? (
          <div className="p-2">
            {isLoading ? (
              <div className="py-8 text-center">
                <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Searching...</span>
                </div>
              </div>
            ) : (
              <>
                {/* Product suggestions */}
                <div className="space-y-1">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={suggestion.id}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className={`group w-full flex items-center justify-between px-4 py-2.5 text-left rounded-lg transition-all duration-150 ${
                        hoveredIndex === index 
                          ? "bg-[#ECF8D9]" 
                          : "hover:bg-[#F5F5F5]"
                      }`}
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <svg 
                          width="20" 
                          height="20" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0"
                        >
                          <path
                            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                            stroke="#9E9E9E"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 21L16.65 16.65"
                            stroke="#9E9E9E"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-[#001F1C] text-sm truncate">{suggestion.name}</span>
                      </div>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0"
                      >
                        <path
                          d="M9 18L15 12L9 6"
                          stroke="#78B13F"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  ))}
                </div>

                {/* Show All Results button */}
                {suggestions.length > 0 && (
                  <button
                    onClick={handleShowAllResults}
                    className="w-full mt-2 bg-[#78B13F] hover:bg-[#689f38] text-white py-2.5 px-4 text-sm font-medium rounded-lg transition-colors duration-200"
                  >
                    Show All Results for "{searchQuery}"
                  </button>
                )}
              </>
            )}
          </div>
        ) : (
          <div className="p-2">
            {recentSearches.length > 0 && (
              <div>
                <div className="flex items-center justify-between px-2 py-2 mb-1">
                  <div className="flex items-center gap-2">
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" 
                        stroke="#9E9E9E" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                      <path 
                        d="M20.9999 20.9999L16.6499 16.6499" 
                        stroke="#9E9E9E" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                    </svg>
                    <h3 className="text-sm font-medium text-gray-700">Recent Searches</h3>
                  </div>
                  <button
                    onClick={handleClearRecent}
                    className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Clear
                  </button>
                </div>
                <div className="space-y-1">
                  {recentSearches.map((search, index) => (
                    <button
                      key={`${search}-${index}`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onClick={() => handleRecentClick(search)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left rounded-lg transition-all duration-150 ${
                        hoveredIndex === index 
                          ? "bg-[#F5F5F5]" 
                          : "hover:bg-[#F5F5F5]"
                      }`}
                    >
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0"
                      >
                        <path 
                          d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" 
                          stroke="#9E9E9E" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                        />
                        <path 
                          d="M20.9999 20.9999L16.6499 16.6499" 
                          stroke="#9E9E9E" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                        />
                      </svg>
                      <span className="text-[#757575] text-sm truncate">{search}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
