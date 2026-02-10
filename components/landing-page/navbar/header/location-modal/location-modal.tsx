"use client"

import { useState } from "react"
import { X } from "lucide-react"
import AddressForm from "./address-form"
import PostalCodeForm from "./postal-code-form"
import SuccessMessage from "./success-message"

type FormTab = "address" | "postal"
type ModalState = "form" | "success"

export default function LocationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<FormTab>("address")
  const [modalState, setModalState] = useState<ModalState>("form")

  const handleSuccess = () => {
    setModalState("success")
    setTimeout(() => {
      onClose()
      setModalState("form")
      setActiveTab("address")
    }, 20000)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop with blur */}
      <div className="fixed  inset-0 z-99 bg-[#0016144D] backdrop-blur-[11.4px]" onClick={onClose} aria-hidden="true" />

      {/* Modal */}
      <div className="fixed  inset-0 z-100 flex items-center justify-center p-4">
        <div className="relative w-full  max-w-[710px] bg-white rounded-[5px] shadow-lg">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 inline-flex h-8 w-8 items-center border border-[#9E9E9E] justify-center text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Modal Content */}
          {modalState === "form" ? (
            <div className="px-14 py-4 ">
              {/* Header */}
              <h2 className="text-[22px] font-semibold mb-2">Set Your Delivery Location</h2>
              <p className="text-[#9E9E9E] text-[16px] mb-6">
                Enter your address manually or use your postal code to find your area.              </p>

              {/* Tab Buttons */}
              <div className="flex gap-32 text-[16px] mb-8 bg-[#F5F5F5]  h-[43px]">
                <button
                  onClick={() => setActiveTab("address")}
                  className={`flex-1 rounded-[15px]   ${activeTab === "address" ? "bg-[#8BC34A] text-white" : "bg-[#F5F5F5] text-[#001F1C] "
                    }`}
                >
                  Enter Address
                </button>
                <button
                  onClick={() => setActiveTab("postal")}
                  className={`flex-1 rounded-[15px]  ${activeTab === "postal" ? "bg-[#8BC34A] text-white" : "bg-[#F5F5F5] text-[#001F1C] "
                    }`}
                >
                  Use Postal Code
                </button>
              </div>

              {/* Form Content */}
              {activeTab === "address" ? (
                <AddressForm onSuccess={handleSuccess} />
              ) : (
                <PostalCodeForm onSuccess={handleSuccess} />
              )}
            </div>
          ) : (
            <SuccessMessage />
          )}
        </div>
      </div>
    </>
  )
}
