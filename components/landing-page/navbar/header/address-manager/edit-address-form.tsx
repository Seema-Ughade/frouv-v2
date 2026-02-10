"use client"

import { X, ChevronLeft } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
// import { updateUserAddress } from "@/lib/actions/user-actions"

interface Address {
  id: string
  type: "home" | "work"
  name: string
  address: string
  phone: string
  isDefault: boolean
}

interface EditAddressFormProps {
  address: Address
  onClose: () => void
  onSave: () => void
}

export default function EditAddressForm({ address, onClose, onSave }: EditAddressFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  
  // Parse address string back to components
  const addressParts = address.address.split('\n')
  const [formData, setFormData] = useState({
    name: address.name,
    type: address.type.charAt(0).toUpperCase() + address.type.slice(1),
    addressLine1: addressParts[0] || "",
    addressLine2: addressParts[1] || "",
    city: addressParts[2]?.split(',')[0]?.trim() || "",
    postalCode: addressParts[2]?.split('-')[1]?.trim() || "",
    state: addressParts[2]?.split('-')[0]?.split(',')[1]?.trim() || "",
    mobileNumber: address.phone.replace(/[^\d]/g, '').slice(-10),
    isDefault: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleTypeChange = (type: string) => {
    setFormData((prev) => ({ ...prev, type }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name."
    }
    if (!formData.addressLine1.trim()) {
      newErrors.addressLine1 = "Please enter your address."
    }
    if (!formData.city.trim()) {
      newErrors.city = "Please enter your city."
    }
    if (!formData.postalCode.trim() || !/^\d{6}$/.test(formData.postalCode)) {
      newErrors.postalCode = "Please enter a valid 6-digit postal code."
    }
    if (!formData.state) {
      newErrors.state = "Please select your state."
    }
    if (!formData.mobileNumber.trim() || !/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
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
      formDataToSend.append('addressId', address.id)
      formDataToSend.append('name', formData.name)
      formDataToSend.append('type', formData.type)
      formDataToSend.append('addressLine1', formData.addressLine1)
      formDataToSend.append('addressLine2', formData.addressLine2 || '')
      formDataToSend.append('city', formData.city)
      formDataToSend.append('postalCode', formData.postalCode)
      formDataToSend.append('state', formData.state)
      formDataToSend.append('mobileNumber', formData.mobileNumber)
      formDataToSend.append('isDefault', formData.isDefault.toString())

      const result = await updateUserAddress(formDataToSend)
      
      if (result.error) {
        setErrors({ submit: result.error })
        setIsLoading(false)
        return
      }

      router.refresh()
      onSave()
    } catch (error) {
      setErrors({ submit: 'Failed to update address. Please try again.' })
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[99] bg-[#0016144D] backdrop-blur-[11.4px] flex items-center justify-center p-4 ">
      <div className="bg-white rounded-lg max-w-[686px] w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 sticky top-0 bg-white">
          <div className="flex items-center gap-4">
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-md transition">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div>
              <h2 className="text-[22px] font-semibold ">Edit Address & Set As Default</h2>
              <p className="text-[16px] text-[#9E9E9E]">
                Edit Your Address Details Below And Set It As Your Primary Delivery Location For All Upcoming
                Deliveries.
              </p>
            </div>
          </div>
          <button onClick={onClose} className="border border-[#9E9E9E] mb-10">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 w-[582px] mx-auto">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 ${
                errors.name ? "border-red-500 focus:ring-red-400" : "border-[#9E9E9E] focus:ring-blue-400"
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Address Line 1 */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Address Line 1<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 ${
                errors.addressLine1 ? "border-red-500 focus:ring-red-400" : "border-[#9E9E9E] focus:ring-blue-400"
              }`}
            />
            {errors.addressLine1 && <p className="text-red-500 text-sm mt-1">{errors.addressLine1}</p>}
          </div>

          {/* Address Line 2 */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Address Line 2</label>
            <input
              type="text"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
              placeholder="Landmark (Optional)"
              className="w-full border border-[#9E9E9E] rounded-md px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* City and Postal Code */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                City / District<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`w-full border rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 ${
                  errors.city ? "border-red-500 focus:ring-red-400" : "border-[#9E9E9E] focus:ring-blue-400"
                }`}
              />
              {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Postal Code<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                maxLength={6}
                className={`w-full border rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 ${
                  errors.postalCode ? "border-red-500 focus:ring-red-400" : "border-[#9E9E9E] focus:ring-blue-400"
                }`}
              />
              {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
            </div>
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              State<span className="text-red-500">*</span>
            </label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 ${
                errors.state ? "border-red-500 focus:ring-red-400" : "border-[#9E9E9E] focus:ring-blue-400"
              }`}
            >
              <option value="">Select state</option>
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
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Ladakh">Ladakh</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
              <option value="Lakshadweep">Lakshadweep</option>
            </select>
            {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Mobile Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              maxLength={10}
              className={`w-full border rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 ${
                errors.mobileNumber ? "border-red-500 focus:ring-red-400" : "border-[#9E9E9E] focus:ring-blue-400"
              }`}
            />
            {errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>}
          </div>

          {/* Address Type */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-3">
              Address Type<span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="Home"
                  checked={formData.type === "Home"}
                  onChange={() => handleTypeChange("Home")}
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
                  onChange={() => handleTypeChange("Work")}
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
                  onChange={() => handleTypeChange("Other")}
                  className="w-4 h-4"
                />
                <span className="text-gray-700">Other</span>
              </label>
            </div>
          </div>

          {/* Error Message */}
          {errors.submit && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {errors.submit}
            </div>
          )}

          {/* Save Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#8BC34A] disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-2 px-4 rounded-[4px] mt-6"
          >
            {isLoading ? "Saving..." : "Save & Make A Default Address"}
          </button>
        </form>
      </div>
    </div>
  )
}
