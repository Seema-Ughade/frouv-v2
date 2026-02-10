"use client"

import { useState, useTransition } from "react"
import LogoutSuccessModal from "./logout-success-modal"
import { LogOut } from "lucide-react"
import { userLogout } from "@/lib/actions/user-actions"

interface LogoutModalProps {
  onClose: () => void
}

export default function LogoutModal({ onClose }: LogoutModalProps) {
  const [showSuccess, setShowSuccess] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)

  if (showSuccess) {
    return <LogoutSuccessModal />
  }

  return (
    <div className="fixed inset-0 lg:bg-[#0016144D] lg:backdrop-blur-[11.4px] bg-white flex items-center justify-center z-50">
      <div className="bg-white rounded-[5px] w-[568px] p-6 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-[75px] h-[75px] rounded-full bg-[#ECF8D9] flex items-center justify-center">
            <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="75" width="75" height="75" rx="20" transform="rotate(90 75 0)" fill="#ECF8D9" />
              <path d="M25.7906 15.625H18.75C17.9212 15.625 17.1263 15.9542 16.5403 16.5403C15.9542 17.1263 15.625 17.9212 15.625 18.75L15.625 56.25C15.625 57.0788 15.9542 57.8737 16.5403 58.4597C17.1263 59.0458 17.9212 59.375 18.75 59.375L25.7906 59.375M56.5094 38.1312H29.9469M49.1656 48.5812L59.375 38.1312L49.1656 27.6812" stroke="#689F38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-[16px] font-medium  mb-2">Log Out Of Frouy?</h2>

        {/* Description */}
        <p className="text-[14px] text-[#757575] mb-4">
          Are You Sure You Want To Log Out Of Your Account? You Can Always Sign In Again Anytime.
        </p>
        {error && <p className="text-sm text-red-600 mb-3">{error}</p>}

        {/* Buttons */}
        <div className="flex flex-col-reverse lg:flex-row justify-between w-full gap-4">
          <button
            onClick={onClose}
className="w-auto px-4 py-3 rounded-[5px] text-[16px] font-medium border border-[#8BC34A] text-[#8BC34A] lg:border-[#004D40] lg:text-[#004D40]"
          >
            Cancel
          </button>
          <button
            disabled={isPending}
            onClick={() => {
              startTransition(async () => {
                setError(null)
                const result = await userLogout()
                if (result?.success) {
                  setShowSuccess(true)
                } else {
                  setError("Logout failed. Please try again.")
                }
              })
            }}
            className="w-auto px-10 py-3 bg-[#689F38] rounded-[5px] text-[16px] font-medium text-white disabled:opacity-70"
          >
            {isPending ? "Logging out..." : "Yes, Logout"}
          </button>
        </div>
      </div>
    </div>
  )
}
