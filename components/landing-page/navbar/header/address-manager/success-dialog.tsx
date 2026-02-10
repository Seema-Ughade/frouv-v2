"use client"

import icon from "@/public/frouv-v2/checkicon.png"
import { useEffect } from "react"
import { X } from "lucide-react"


interface SuccessDialogProps {
  message: string
  onClose: () => void
}

export default function SuccessDialog({ message, onClose }: SuccessDialogProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[99] bg-[#0016144D] backdrop-blur-[11.4px] flex items-center justify-center p-4">
      <div className="bg-white relative rounded-lg p-8 max-w-[668px] w-full text-center">
        
                {/* Close Button (Top Right) */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1 border-[1px] borde-[#9E9E9E] rounded-[2px] transition"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        
        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-[75px] h-[75px] bg-green-500 rounded-full flex items-center justify-center">
            <img src={icon.src} alt="Frouv logo" className="w-[75px] h-[75px]" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{message}</h3>
      </div>
    </div>
  )
}
