"use client"

import type React from "react"

import { useState } from "react"
// import { createUserAddress } from "@/lib/actions/user-actions"
import { useRouter } from "next/navigation"

interface AddressFormProps {
  onSuccess: () => void
}

export default function AddressForm({ onSuccess }: AddressFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    type: "Home",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postalCode: "",
    state: "",
    mobileNumber: "",
    isDefault: true,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name."
    }
    if (!formData.addressLine1.trim()) {
      newErrors.addressLine1 = "Please enter your address or area name."
    }
    if (!formData.city.trim()) {
      newErrors.city = "Please enter your city or district name."
    }
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "Please enter a valid 6-digit postal code."
    } else if (!/^\d{6}$/.test(formData.postalCode)) {
      newErrors.postalCode = "Please enter a valid 6-digit postal code."
    }
    if (!formData.state) {
      newErrors.state = "Please select your state."
    }
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Please enter your mobile number."
    } else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Please enter a valid 10-digit mobile number."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)
    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('type', formData.type)
      formDataToSend.append('addressLine1', formData.addressLine1)
      formDataToSend.append('addressLine2', formData.addressLine2 || '')
      formDataToSend.append('city', formData.city)
      formDataToSend.append('postalCode', formData.postalCode)
      formDataToSend.append('state', formData.state)
      formDataToSend.append('mobileNumber', formData.mobileNumber)
      formDataToSend.append('isDefault', formData.isDefault.toString())

      const result = await createUserAddress(formDataToSend)
      
      if (result.error) {
        setErrors({ submit: result.error })
        setIsLoading(false)
        return
      }

      onSuccess()
      router.refresh()
    } catch (error) {
      setErrors({ submit: 'Failed to save address. Please try again.' })
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Description */}
      <p className="text-[#9E9E9E] text-[16px]">
Enter your address details manually. This helps us deliver even in areas not listed on maps.      </p>

      {/* Name */}
      <div>
        <label className="block text-[16px] mb-2">
          Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className={`w-full px-4 py-3 border rounded-[4px] text-gray-900 placeholder:text-[#9E9E9E] outline-none transition-colors ${
            errors.name ? "border-red-500 focus:border-red-500" : "border-[#9E9E9E] "
          }`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Mobile Number */}
      <div>
        <label className="block text-[16px] mb-2">
          Mobile Number<span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          placeholder="Enter 10-digit mobile number"
          maxLength={10}
          className={`w-full px-4 py-3 border rounded-[4px] text-gray-900 placeholder:text-[#9E9E9E] outline-none transition-colors ${
            errors.mobileNumber ? "border-red-500 focus:border-red-500" : "border-[#9E9E9E] "
          }`}
        />
        {errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>}
      </div>

      {/* Address Type */}
      <div>
        <label className="block text-[16px] mb-2">
          Address Type<span className="text-red-500">*</span>
        </label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="type"
              value="Home"
              checked={formData.type === "Home"}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <span className="text-gray-700">Home</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="type"
              value="Work"
              checked={formData.type === "Work"}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <span className="text-gray-700">Work</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="type"
              value="Other"
              checked={formData.type === "Other"}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <span className="text-gray-700">Other</span>
          </label>
        </div>
      </div>

      {/* Address Line 1 */}
      <div>
        <label className="block text-[16px]  mb-2">
          Address Line 1<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleChange}
          placeholder="Enter your area, street, or village"
          className={`w-full px-4 py-3 border rounded-[4px] text-gray-900 placeholder:text-[#9E9E9E] outline-none transition-colors ${
            errors.addressLine1 ? "border-red-500 focus:border-red-500" : "border-[#9E9E9E] "
          }`}
        />
        {errors.addressLine1 && <p className="text-red-500 text-sm mt-1">{errors.addressLine1}</p>}
      </div>

      {/* Address Line 2 */}
      <div>
        <label className="block text-[16px] mb-2">
          Address Line 2</label>
        <input
          type="text"
          name="addressLine2"
          value={formData.addressLine2}
          onChange={handleChange}
          placeholder="Landmark (optional)"
          className="w-full px-4 py-3 border border-[#9E9E9E] rounded-[4px] text-gray-900 placeholder:text-[#9E9E9E] "
        />
      </div>

      {/* City / District and Postal Code */}
      <div className="grid grid-cols-2 gap-4">
        <div>
        <label className="block text-[16px] mb-2">
            City / District<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Landmark (optional)"
            className={`w-full px-4 py-3 border rounded-[4px] text-gray-900 placeholder:text-[#9E9E9E] outline-none transition-colors ${
              errors.city ? "border-red-500 focus:border-red-500" : "border-[#9E9E9E] "
            }`}
          />
          {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
        </div>

        <div>
        <label className="block text-[16px] mb-2">
            Postal Code<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="6-digital code"
            maxLength={6}
            className={`w-full px-4 py-3 border rounded-[4px] text-gray-900 placeholder:text-[#9E9E9E] outline-none transition-colors ${
              errors.postalCode ? "border-red-500 focus:border-red-500" : "border-[#9E9E9E] "
            }`}
          />
          {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
        </div>
      </div>

      {/* State */}
      <div>
        <label className="block text-[16px] mb-2">
          State<span className="text-red-500">*</span>
        </label>
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-[4px] text-gray-900 outline-none transition-colors appearance-none bg-white cursor-pointer ${
            errors.state ? "border-red-500 focus:border-red-500" : "border-[#9E9E9E] "
          }`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%239E9E9E' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 12px center",
            backgroundSize: "20px",
            paddingRight: "40px"
            
          }}
        >
          <option value="">Select your state</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Odisha">Odisha</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>
          <option value="Delhi">Delhi</option>
        </select>
        {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
      </div>

      {/* Error Message */}
      {errors.submit && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {errors.submit}
        </div>
      )}

      {/* Confirm Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-[#78B13F] hover:bg-[#689f38] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 rounded-[4px] transition-colors"
      >
        {isLoading ? "Saving..." : "Confirm Location"}
      </button>
    </form>
  )
}
