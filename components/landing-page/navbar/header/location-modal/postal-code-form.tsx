"use client"

import type React from "react"

import { useState } from "react"

interface PostalCodeFormProps {
  onSuccess: () => void
}

export default function PostalCodeForm({ onSuccess }: PostalCodeFormProps) {
  const [postalCode, setPostalCode] = useState("")
  const [error, setError] = useState("")

  const validatePostalCode = () => {
    if (!postalCode.trim()) {
      setError("Please enter a valid 6-digit postal code.")
      return false
    }
    if (!/^\d{6}$/.test(postalCode)) {
      setError("Please enter a valid 6-digit postal code.")
      return false
    }
    return true
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validatePostalCode()) {
      onSuccess()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostalCode(e.target.value)
    if (error) {
      setError("")
    }
  }

  const handleUseCurrentLocation = () => {
    // Placeholder for geolocation logic
    onSuccess()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Description */}
      <p className="text-gray-500 text-[16px]">
We'll fetch your area details automatically using your postal code or current location.      </p>

      {/* Postal Code Input */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">Postal Code</label>
        <input
          type="text"
          value={postalCode}
          onChange={handleChange}
          placeholder="Enter your 6-digital code"
          maxLength={6}
          className={`w-full px-4 py-3 border rounded-[4px] text-gray-900 placeholder:text-gray-400 outline-none transition-colors ${
            error ? "border-red-500 focus:border-red-500" : "border-gray-300 "
          }`}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>

      {/* Confirm Button */}
      <button
        type="submit"
        className="w-full bg-[#8BC34A] hover:bg-[#689f38]  text-white font-medium py-3 rounded-[4px] transition-colors"
      >
        Confirm Location
      </button>

      {/* Divider */}
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px ml-32 bg-gray-300" />
        <span className="text-gray-400 text-sm">OR</span>
        <div className="flex-1 h-px mr-32 bg-gray-300" />
      </div>

      {/* Use Current Location Button */}
      <button
        type="button"
        onClick={handleUseCurrentLocation}
        className="w-full border-2 border-[#8BC34A] hover:bg-[#689f38] hover:text-white text-[#8BC34A]  font-medium py-3 rounded-[4px] "
      >
        Use my current location
      </button>
    </form>
  )
}
