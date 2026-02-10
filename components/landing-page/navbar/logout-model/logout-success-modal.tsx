"use client"

import { useRouter } from "next/navigation"
import checkicon from "@/public/frouv-v2/checkicon.png"

export default function LogoutSuccessModal() {
  const router = useRouter()

  return (
    <div className="fixed inset-0 lg:bg-[#0016144D] lg:backdrop-blur-[11.4px] bg-white flex items-center justify-center z-50">
      <div className="bg-white rounded-[10px] w-[568px] p-6 text-center">
        {/* Icon */}
      {/* Success Icon */}
         <div className="flex justify-center mb-4">
          <div className="w-[75px] h-[75px] bg-green-500 rounded-full flex items-center justify-center">
            <img src={checkicon.src} alt="Frouv logo" className="w-[75px] h-[75px]" />
          </div>
        </div>


        {/* Title */}
        <h2 className="text-[16px] font-medium  mb-1">You've Been Logged Out Successfully</h2>

        {/* Description */}
        <p className="text-[14px] text-[#757575] mb-4">Thanks For Using Frouy. See You Soon!</p>


        {/* Buttons */}
        <div className="flex flex-col-reverse lg:flex-row justify-between w-full gap-4">
          <button
            onClick={() => router.push("/")}
            className="w-auto px-4 py-3 border border-[#8BC34A] text-[#8BC34A] lg:border lg:border-[#9E9E9E] rounded-[5px] text-[16px] font-medium lg:text-[#001F1C] "
          >
            Go To Home
          </button>
          <button
            onClick={() => router.push("/user/login")}
            className="w-auto px-8 py-3  bg-[#7CB342] rounded-[5px] text-[16px] font-medium text-white hover:bg-[#689834] transition-colors"
          >
            Login Again
          </button>
        </div>
      </div>
    </div>
  )
}
