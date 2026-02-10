"use client"

import { X } from "lucide-react"
import { useState } from "react"
import LocationModal from "../location-modal/location-modal"

interface Address {
  id: string
  type: "home" | "work"
  name: string
  address: string
  phone: string
  isDefault: boolean
}

interface CurrentDeliveryAddressModalProps {
  address: Address
  onChangeAddress: () => void
  onAddNewAddress: () => void
  onClose: () => void
}

export default function CurrentDeliveryAddressModal({
  address,
  onChangeAddress,
  onAddNewAddress,
  onClose,
}: CurrentDeliveryAddressModalProps) {
      const [isLocationModalOpen, setIsLocationModalOpen] = useState(false)
    
  return (
    <><LocationModal isOpen={isLocationModalOpen} onClose={() => setIsLocationModalOpen(false)} /><div className="fixed inset-0 z-[99] bg-[#0016144D] backdrop-blur-[11.4px] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-[446px] w-full">
              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-1">
                  <h2 className="text-[22px] font-semibold">Current Delivery Address</h2>
                  <button onClick={onClose} className="p-1 border border-[#9E9E9E] rounded-[2px] hover:bg-gray-100">
                      <X className="w-6 h-6 text-gray-600" />
                  </button>
              </div>

              {/* <div className="border-t border-[#9E9E9E] mx-6"></div> */}

              {/* Content */}
              <div className="px-6 pb-6 pt-2 space-y-6">
                  {/* Address Details */}
                  <div className="space-y-2">
                      <h3 className="text-[16px] font-semibold text-gray-900">{address.name}</h3>
                      <p className="text-sm text-gray-600 whitespace-pre-line">{address.address}</p>
                      <div className="flex items-center gap-2">
                          {/* <input type="checkbox" className="w-4 h-4" defaultChecked /> */}
                          <p className="text-sm text-gray-600">{address.phone}</p>
                      </div>
                  </div>

                  {/* Divider */}
                  {/* <div className="border-t border-gray-200"></div> */}

                  {/* Action Buttons */}
                  <div className="flex gap-4 mx-4">
                      <button
                          onClick={onChangeAddress}
                          className="flex-1 border border-dashed border-[#8BC34A] text-[#8BC34A] hover:bg-[#689f38] font-semibold py-3 px-4 rounded-[10px] hover:text-white "
                      >
                          Change Address
                      </button>
                      <button
                          onClick={() => setIsLocationModalOpen(true)}
                          className="flex-1  text-[#8BC34A] hover:text-white font-semibold py-3 px-4 border border-dashed border-[#8BC34A] rounded-[10px] hover:bg-[#689f38] "
                      >
                          Add New Address
                      </button>
                  </div>
              </div>
          </div>
      </div></>
  )
}
