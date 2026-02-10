import checkicon from "@/public/frouv-v2/checkicon.png"


export default function SuccessMessage() {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-8">
      {/* Success Icon */}
         <div className="flex justify-center mb-4">
          <div className="w-[75px] h-[75px] bg-green-500 rounded-full flex items-center justify-center">
            <img src={checkicon.src} alt="Frouv logo" className="w-[75px] h-[75px]" />
          </div>
        </div>


      {/* Success Text */}
      <h3 className="text-xl font-bold text-gray-900">Address saved successfully!</h3>
    </div>
  )
}
