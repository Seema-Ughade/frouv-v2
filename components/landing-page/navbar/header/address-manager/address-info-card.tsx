"use client"

import { X } from "lucide-react"


interface AddressInfoCardProps {
  onOpenManager: () => void
  onClose: () => void
}

export default function AddressInfoCard({ onOpenManager, onClose }: AddressInfoCardProps) {
  return (
    <div className="fixed inset-0 z-99 bg-[#0016144D] backdrop-blur-[11.4px] flex items-center justify-center ">

      <div className=" relative  bg-gray-50 rounded-lg  p-6 max-w-[421px] w-full shadow-lg">
        {/* Close Button (Top Right) */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 p-1 border border-[#9E9E9E] rounded-xs "
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        <div className="flex justify-center mb-4 w-9 h-9 mx-auto">

          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.8402 31.23C18.5954 31.4058 18.3016 31.5004 18.0002 31.5004C17.6988 31.5004 17.405 31.4058 17.1602 31.23C9.91666 26.067 2.22916 15.447 10.0007 7.773C12.1342 5.67427 15.0074 4.49869 18.0002 4.5C21.0002 4.5 23.8787 5.6775 25.9997 7.7715C33.7712 15.4455 26.0837 26.064 18.8402 31.23Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 18C18.7956 18 19.5587 17.6839 20.1213 17.1213C20.6839 16.5587 21 15.7956 21 15C21 14.2044 20.6839 13.4413 20.1213 12.8787C19.5587 12.3161 18.7956 12 18 12C17.2044 12 16.4413 12.3161 15.8787 12.8787C15.3161 13.4413 15 14.2044 15 15C15 15.7956 15.3161 16.5587 15.8787 17.1213C16.4413 17.6839 17.2044 18 18 18Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        </div>

        <h2 className="text-[16px] font-medium text-center mb-3">Manage Your Address</h2>

        <p className="text-center text-[#9E9E9E] text-[14px] mb-6">
          View, Edit, And Manage Your Delivery Address For A Seamless Shopping Experience.
        </p>

        <button
          onClick={onOpenManager}
          className="w-full bg-[#8BC34A] flex items-center font-semibold justify-center max-w-[226px] text-white mx-auto py-3 px-4 rounded-sm mb-6"
        >
          Open Address Manager
        </button>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <input type="checkbox" className="w-4 h-4 text-[#8BC34A] accent-white" />
            <span className="text-gray-700 text-sm">Set Default Delivery Address</span>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" className="w-4 h-4 text-[#8BC34A] accent-white" />
            <span className="text-gray-700 text-sm">Save Multiple Address (Home, Work, Other)</span>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" className="w-4 h-4 text-[#8BC34A] accent-white " />
            <span className="text-gray-700 text-sm">Easy Editing And Deletion</span>
          </div>
        </div>
      </div>
    </div>
  )
}
