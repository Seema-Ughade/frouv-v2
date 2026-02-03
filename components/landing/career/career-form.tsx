"use client";

import { HoverButton } from "@/components/ui/Button/button";

export default function CareerForm() {
  return (
    <form className="w-full max-w-6xl robotoText space-y-6">
      {/* Full Name and Email Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label className="block text-[14px] lg:text-[20px] text-[#615F5F] mb-2">
            Full Name<span className="text-[#FF0000]">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Type your awesome name here"
              className="w-full px-4  font-light py-3 lg:text-[20px] text-[12px] border-[0.6px] border-[#D3D3D3] placeholder:text-[#615F5F] rounded-[8px] focus:border-transparent"
            />

            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-3 top-2 "
            >
              <mask
                id="mask0_124_1587"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="40"
                height="40"
              >
                <rect width="40" height="40" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_124_1587)">
                <path
                  d="M20 18.9741C18.625 18.9741 17.4479 18.4845 16.4687 17.5054C15.4896 16.5262 15 15.3491 15 13.9741C15 12.5991 15.4896 11.422 16.4687 10.4429C17.4479 9.4637 18.625 8.97412 20 8.97412C21.375 8.97412 22.5521 9.4637 23.5312 10.4429C24.5104 11.422 25 12.5991 25 13.9741C25 15.3491 24.5104 16.5262 23.5312 17.5054C22.5521 18.4845 21.375 18.9741 20 18.9741ZM8.33333 31.0258V28.282C8.33333 27.594 8.53361 26.9502 8.93416 26.3508C9.33499 25.7516 9.87402 25.2863 10.5512 24.955C12.124 24.2008 13.6978 23.6351 15.2725 23.2579C16.8472 22.8809 18.4231 22.6925 20 22.6925C21.5769 22.6925 23.1528 22.8809 24.7275 23.2579C26.3022 23.6351 27.876 24.2008 29.4487 24.955C30.126 25.2863 30.665 25.7516 31.0658 26.3508C31.4664 26.9502 31.6667 27.594 31.6667 28.282V31.0258H8.33333ZM9.99999 29.3591H30V28.282C30 27.9123 29.8808 27.5651 29.6425 27.2404C29.4044 26.9156 29.0749 26.6411 28.6537 26.4166C27.2821 25.7522 25.8678 25.2431 24.4108 24.8895C22.9539 24.5359 21.4836 24.3591 20 24.3591C18.5164 24.3591 17.0461 24.5359 15.5892 24.8895C14.1322 25.2431 12.7179 25.7522 11.3462 26.4166C10.9251 26.6411 10.5956 26.9156 10.3575 27.2404C10.1192 27.5651 9.99999 27.9123 9.99999 28.282V29.3591ZM20 17.3075C20.9167 17.3075 21.7014 16.9811 22.3542 16.3283C23.0069 15.6755 23.3333 14.8908 23.3333 13.9741C23.3333 13.0575 23.0069 12.2727 22.3542 11.62C21.7014 10.9672 20.9167 10.6408 20 10.6408C19.0833 10.6408 18.2986 10.9672 17.6458 11.62C16.9931 12.2727 16.6667 13.0575 16.6667 13.9741C16.6667 14.8908 16.9931 15.6755 17.6458 16.3283C18.2986 16.9811 19.0833 17.3075 20 17.3075Z"
                  fill="#615F5F"
                />
              </g>
            </svg>
          </div>
        </div>
        <div>
          <label className="block text-[14px] lg:text-[20px] text-[#615F5F] mb-2">
            Email<span className="text-[#FF0000]">*</span>
          </label>
          <div className="relative">
            <input
              type="email"
              placeholder="Stay connected with us"
              className="w-full px-4  font-light py-3 lg:text-[20px] text-[12px] border-[0.6px] border-[#D3D3D3] placeholder:text-[#615F5F] rounded-[8px] focus:border-transparent"
            />
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-3 top-2 text-gray-400"
            >
              <mask
                id="mask0_1_7581"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="32"
                height="32"
              >
                <rect width="32" height="32" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1_7581)">
                <path
                  d="M6.154 25.3334C5.54022 25.3334 5.02778 25.1278 4.61667 24.7167C4.20556 24.3056 4 23.7931 4 23.1794V8.82069C4 8.20691 4.20556 7.69446 4.61667 7.28335C5.02778 6.87224 5.54022 6.66669 6.154 6.66669H25.846C26.4598 6.66669 26.9722 6.87224 27.3833 7.28335C27.7944 7.69446 28 8.20691 28 8.82069V23.1794C28 23.7931 27.7944 24.3056 27.3833 24.7167C26.9722 25.1278 26.4598 25.3334 25.846 25.3334H6.154ZM16 16.154L5.33333 9.17935V23.1794C5.33333 23.4187 5.41022 23.6154 5.564 23.7694C5.718 23.9231 5.91467 24 6.154 24H25.846C26.0853 24 26.282 23.9231 26.436 23.7694C26.5898 23.6154 26.6667 23.4187 26.6667 23.1794V9.17935L16 16.154ZM16 14.6667L26.2563 8.00002H5.74367L16 14.6667ZM5.33333 9.17935V8.00002V23.1794C5.33333 23.4187 5.41022 23.6154 5.564 23.7694C5.718 23.9231 5.91467 24 6.154 24H5.33333V9.17935Z"
                  fill="#615F5F"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* LinkedIn and Portfolio Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label className="block text-[14px] lg:text-[20px] text-[#615F5F] mb-2">
            LinkedIn Profile URL<span className="text-[#FF0000]">*</span>
          </label>
          <div className="relative">
            <input
              type="url"
              placeholder="Show us your professional story"
              className="w-full px-4  font-light py-3 lg:text-[20px] text-[12px] border-[0.6px] border-[#D3D3D3] placeholder:text-[#615F5F] rounded-[8px] focus:border-transparent"
            />
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-3 top-2 text-gray-400"
            >
              <mask
                id="mask0_1_7595"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="32"
                height="32"
              >
                <rect width="32" height="32" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1_7595)">
                <path
                  d="M14.154 21.436H9.436C7.932 21.436 6.65 20.9061 5.59 19.8464C4.53 18.7866 4 17.5049 4 16.0014C4 14.4978 4.53 13.2157 5.59 12.155C6.65 11.0944 7.932 10.564 9.436 10.564H14.154V11.8974H9.436C8.30778 11.8974 7.34189 12.2991 6.53833 13.1027C5.735 13.906 5.33333 14.8718 5.33333 16C5.33333 17.1282 5.735 18.094 6.53833 18.8974C7.34189 19.7009 8.30778 20.1027 9.436 20.1027H14.154V21.436ZM11.3333 16.6667V15.3334H20.6667V16.6667H11.3333ZM17.846 21.436V20.1027H22.564C23.6922 20.1027 24.6581 19.7009 25.4617 18.8974C26.265 18.094 26.6667 17.1282 26.6667 16C26.6667 14.8718 26.265 13.906 25.4617 13.1027C24.6581 12.2991 23.6922 11.8974 22.564 11.8974H17.846V10.564H22.564C24.068 10.564 25.35 11.0939 26.41 12.1537C27.47 13.2135 28 14.4951 28 15.9987C28 17.5022 27.47 18.7844 26.41 19.845C25.35 20.9057 24.068 21.436 22.564 21.436H17.846Z"
                  fill="#615F5F"
                />
              </g>
            </svg>
          </div>
        </div>
        <div>
          <label className="block text-[14px] lg:text-[20px] text-[#615F5F] mb-2">
            Portfolio Website URL
          </label>
          <div className="relative">
            <input
              type="url"
              placeholder="Drop the link to your proudest work"
              className="w-full px-4  font-light py-3 lg:text-[20px] text-[12px] border-[0.6px] border-[#D3D3D3] placeholder:text-[#615F5F] rounded-[8px] focus:border-transparent"
            />
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-3 top-2 text-gray-400"
            >
              <mask
                id="mask0_1_7595"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="32"
                height="32"
              >
                <rect width="32" height="32" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1_7595)">
                <path
                  d="M14.154 21.436H9.436C7.932 21.436 6.65 20.9061 5.59 19.8464C4.53 18.7866 4 17.5049 4 16.0014C4 14.4978 4.53 13.2157 5.59 12.155C6.65 11.0944 7.932 10.564 9.436 10.564H14.154V11.8974H9.436C8.30778 11.8974 7.34189 12.2991 6.53833 13.1027C5.735 13.906 5.33333 14.8718 5.33333 16C5.33333 17.1282 5.735 18.094 6.53833 18.8974C7.34189 19.7009 8.30778 20.1027 9.436 20.1027H14.154V21.436ZM11.3333 16.6667V15.3334H20.6667V16.6667H11.3333ZM17.846 21.436V20.1027H22.564C23.6922 20.1027 24.6581 19.7009 25.4617 18.8974C26.265 18.094 26.6667 17.1282 26.6667 16C26.6667 14.8718 26.265 13.906 25.4617 13.1027C24.6581 12.2991 23.6922 11.8974 22.564 11.8974H17.846V10.564H22.564C24.068 10.564 25.35 11.0939 26.41 12.1537C27.47 13.2135 28 14.4951 28 15.9987C28 17.5022 27.47 18.7844 26.41 19.845C25.35 20.9057 24.068 21.436 22.564 21.436H17.846Z"
                  fill="#615F5F"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Area of Expertise and Experience Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label className="block text-[14px] lg:text-[20px] text-[#615F5F] mb-2">
            Area of Expertise<span className="text-[#FF0000]">*</span>
          </label>
          <select className="w-full px-4 py-3 font-light py-3 lg:text-[20px] text-[12px] border-[0.6px] border-[#D3D3D3] placeholder:text-[#615F5F] rounded-[8px] focus:outline-none   bg-white ">
            <option value="">Where do you excel?</option>
            <option value="design">Design</option>
            <option value="development">Development</option>
            <option value="product">Product</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <div>
          <label className="block text-[14px] lg:text-[20px] text-[#615F5F] mb-2">
            Experience<span className="text-[#FF0000]">*</span>
          </label>
          <select className="w-full px-4 py-3 font-light py-3 lg:text-[20px] text-[12px] border-[0.6px] border-[#D3D3D3] placeholder:text-[#615F5F] rounded-[8px] focus:outline-none  bg-white ">
            <option value="">Your journey in years?</option>
            <option value="0-2">0-2 years</option>
            <option value="2-5">2-5 years</option>
            <option value="5-10">5-10 years</option>
            <option value="10+">10+ years</option>
          </select>
        </div>
      </div>

      {/* Resume Link */}
      <div>
        <label className="block text-[14px] lg:text-[20px] text-[#615F5F] mb-2">
          Resume Link<span className="text-[#FF0000]">*</span>
        </label>
        <div className="relative">
          <input
            type="url"
            placeholder="Your career story — share the link"
            className="w-full px-4  font-light py-3 lg:text-[20px] text-[12px] border-[0.6px] border-[#D3D3D3] placeholder:text-[#615F5F] rounded-[8px] "
          />
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-3 top-2 text-gray-400"
          >
            <mask
              id="mask0_1_7595"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="32"
              height="32"
            >
              <rect width="32" height="32" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1_7595)">
              <path
                d="M14.154 21.436H9.436C7.932 21.436 6.65 20.9061 5.59 19.8464C4.53 18.7866 4 17.5049 4 16.0014C4 14.4978 4.53 13.2157 5.59 12.155C6.65 11.0944 7.932 10.564 9.436 10.564H14.154V11.8974H9.436C8.30778 11.8974 7.34189 12.2991 6.53833 13.1027C5.735 13.906 5.33333 14.8718 5.33333 16C5.33333 17.1282 5.735 18.094 6.53833 18.8974C7.34189 19.7009 8.30778 20.1027 9.436 20.1027H14.154V21.436ZM11.3333 16.6667V15.3334H20.6667V16.6667H11.3333ZM17.846 21.436V20.1027H22.564C23.6922 20.1027 24.6581 19.7009 25.4617 18.8974C26.265 18.094 26.6667 17.1282 26.6667 16C26.6667 14.8718 26.265 13.906 25.4617 13.1027C24.6581 12.2991 23.6922 11.8974 22.564 11.8974H17.846V10.564H22.564C24.068 10.564 25.35 11.0939 26.41 12.1537C27.47 13.2135 28 14.4951 28 15.9987C28 17.5022 27.47 18.7844 26.41 19.845C25.35 20.9057 24.068 21.436 22.564 21.436H17.846Z"
                fill="#615F5F"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* Cover Letter */}
      <div>
        <label className="block text-[14px] lg:text-[20px] text-[#615F5F] mb-2">
          Cover Letter<span className="text-[#FF0000]">*</span>
        </label>
        <textarea
          placeholder="What draws you to Nava? Share what excites you about working with us."
          className="w-full px-4 py-3 font-light py-3 lg:text-[20px] text-[12px] border-[0.6px] border-[#D3D3D3] placeholder:text-[#615F5F] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          rows={8}
        />
      </div>

<div className="flex justify-center items-center pt-4">
  <HoverButton
    // type="submit"
    className="
      flex items-center justify-center
      w-[148px] h-[32px]
      lg:w-[240px] lg:h-[56px]
      text-[12px] lg:text-[19.9px]
      bg-[#1B1B1B] text-white
      rounded-full font-medium
    "
  >
    Submit
  </HoverButton>
</div>
    </form>
  );
}
