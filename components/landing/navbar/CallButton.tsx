

export default function CallButton() {
  return (
    <div className="top-[24px] left-[1176px]">
      <button
        className="
          w-[106px] h-[32px]
          lg:w-[164px] lg:h-[48px]
          px-[12px] py-[12px]
          bg-[#1B1B1B] hover:bg-[#9542cf]
          rounded-[40px]
          flex items-center justify-center
          transition-colors duration-500 ease-in-out
        "
      >
        <span
          className="
           robotoText w-[181px] h-[20px]
            text-white font-medium lg:text-[17px] text-[10px]
            leading-[20px]
            text-center
          "
        >
          Schedule a Call
        </span>
      </button>
    </div>
  );
}
