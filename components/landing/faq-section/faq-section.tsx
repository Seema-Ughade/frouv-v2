"use client";

import { useState } from "react";
import { faqItems } from "./faq-data";
import image1 from "../../../public/images/image1.png"
import Image from "next/image";
import image2 from "../../../public/images/image5.png"
interface FAQItemOpen {
  [key: string]: boolean;
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<FAQItemOpen>({});

const toggleFAQ = (id: string) => {
  setOpenItems((prev) => ({
    [id]: !prev[id],
  }));
};

  

  return (
    <section className="w-full bg-[#FCFCFC] lg:py-16 py-8 px-6">
      {/* Header */}
      <div className="max-w-[1080px] mx-auto mb-12">
        <div className="flex justify-center mb-6">
          <div className="flex justify-center">
            <div className="lg:w-[124px] lg:h-[50px] h-[24px] lg:px-0 px-4 flex items-center justify-center bg-[#F5EAFD] border border-[#A23BEA] rounded-[32px]">
              <span className="text-[#9F1FFA] robotoText text-[12px] lg:text-[15px]">
                FAQs
              </span>
            </div>
          </div>
        </div>
        <h2 className="text-[#1B1B1B] font-semibold lg:text-[48px] text-[32px] robotoText text-center lg:mb-12 mb-6">
          All your Questions, Answered
        </h2>

        {/* Main FAQ Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:max-w-[320px] w-full border-[0.6px] border-[#D3D3D3] rounded-[8px] p-6 bg-white top-6">
              {/* Icon */}
              <div className="flex justify-center mb-5">
                <div className="w-[48px] h-[48px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-[24px] flex items-center justify-center">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_124_3165"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="28"
                      height="28"
                    >
                      <rect width="28" height="28" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_124_3165)">
                      <path
                        d="M3.02896 21.7184V19.7978C3.02896 19.2562 3.16916 18.7906 3.44954 18.401C3.72993 18.0115 4.10677 17.7002 4.58004 17.4671C5.59213 16.9852 6.59692 16.6011 7.59442 16.3147C8.59211 16.0283 9.79252 15.8851 11.1956 15.8851C12.5985 15.8851 13.7989 16.0283 14.7965 16.3147C15.7942 16.6011 16.799 16.9852 17.8109 17.4671C18.2842 17.7002 18.661 18.0115 18.9414 18.401C19.222 18.7906 19.3623 19.2562 19.3623 19.7978V21.7184H3.02896ZM21.6956 21.7184V19.7438C21.6956 19.0677 21.5587 18.4296 21.285 17.8293C21.0114 17.2291 20.6233 16.7141 20.1206 16.2844C20.6935 16.401 21.2454 16.5629 21.7764 16.77C22.3073 16.9773 22.8323 17.2102 23.3514 17.4688C23.857 17.7231 24.2534 18.0485 24.5405 18.445C24.8275 18.8417 24.971 19.2746 24.971 19.7438V21.7184H21.6956ZM11.1956 13.2822C10.2331 13.2822 9.40917 12.9395 8.72375 12.2541C8.03834 11.5687 7.69563 10.7447 7.69563 9.78223C7.69563 8.81973 8.03834 7.99577 8.72375 7.31035C9.40917 6.62493 10.2331 6.28223 11.1956 6.28223C12.1581 6.28223 12.9821 6.62493 13.6675 7.31035C14.3529 7.99577 14.6956 8.81973 14.6956 9.78223C14.6956 10.7447 14.3529 11.5687 13.6675 12.2541C12.9821 12.9395 12.1581 13.2822 11.1956 13.2822ZM19.6764 9.78223C19.6764 10.7447 19.3337 11.5687 18.6483 12.2541C17.9629 12.9395 17.1389 13.2822 16.1764 13.2822C16.127 13.2822 16.0641 13.2767 15.9877 13.2656C15.9115 13.2543 15.8487 13.242 15.7993 13.2286C16.1946 12.7444 16.4983 12.2073 16.7105 11.6174C16.9228 11.0274 17.029 10.4149 17.029 9.7796C17.029 9.14435 16.9178 8.5373 16.6956 7.95843C16.4735 7.37957 16.1748 6.83882 15.7993 6.33618C15.8621 6.31382 15.9249 6.29924 15.9877 6.29243C16.0505 6.28563 16.1134 6.28223 16.1764 6.28223C17.1389 6.28223 17.9629 6.62493 18.6483 7.31035C19.3337 7.99577 19.6764 8.81973 19.6764 9.78223ZM4.19563 20.5517H18.1956V19.7978C18.1956 19.524 18.1272 19.2846 17.9903 19.0797C17.8534 18.8749 17.6077 18.679 17.2533 18.492C16.3827 18.0269 15.465 17.6705 14.5002 17.423C13.5356 17.1755 12.434 17.0517 11.1956 17.0517C9.95702 17.0517 8.85539 17.1755 7.89075 17.423C6.92592 17.6705 6.00824 18.0269 5.13771 18.492C4.78324 18.679 4.53756 18.8749 4.40067 19.0797C4.26398 19.2846 4.19563 19.524 4.19563 19.7978V20.5517ZM11.1956 12.1156C11.8373 12.1156 12.3866 11.8871 12.8435 11.4301C13.3005 10.9732 13.529 10.4239 13.529 9.78223C13.529 9.14056 13.3005 8.59125 12.8435 8.13431C12.3866 7.67737 11.8373 7.44889 11.1956 7.44889C10.554 7.44889 10.0047 7.67737 9.54771 8.13431C9.09077 8.59125 8.8623 9.14056 8.8623 9.78223C8.8623 10.4239 9.09077 10.9732 9.54771 11.4301C10.0047 11.8871 10.554 12.1156 11.1956 12.1156Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </div>
              </div>

              {/* Text */}
              <p className="text-center text-[#1B1B1B] text-[18px] robotoText font-medium mb-4">
                FAQs help you a little bit but for the rest we are there for you
              </p>

              {/* Buttons */}
              <div className="flex flex-col gap-6">
                <button className="w-full bg-[#1B1B1B] text-[12px] lg:text-[18px] text-white h-[56px] w-[240px] rounded-full font-medium flex items-center justify-center gap-2 ">
                  <div className="flex gap-1">
                    <Image src={image1} className="h-6 w-6 object-cover mr-2" alt={"image"}/>
                  </div>
                  Schedule a Call
                </button>
                <button className="w-full border border-[#D3D3D3] text-[12px] lg:text-[18px] text-[#1B1B1B]  h-[56px] w-[240px] rounded-full font-medium flex items-center justify-center gap-2 ">
                    <Image src={image2} className="h-6 w-6 object-cover mr-2" alt={"image"}/>
                  Chat with us
                </button>
              </div>
            </div>
          </div>

          {/* Right FAQ Items */}
          <div className="lg:col-span-2">
            <div className="max-w-[760px] space-y-4">
              {faqItems.map((item) => (
                <div
                  key={item.id}
                  className="border-[0.6px] border-[#D3D3D3] rounded-[8px] overflow-hidden bg-white "
                >
                  <div
                    className="w-full px-6 z-10 py-4 flex items-center justify-between text-left bg-white"
                  >
                    <h3 className="text-[#1B1B1B] robotoText text-[14px] lg:text-[20px] font-medium pr-4">
                      {item.question}
                    </h3>
                    <svg
                      width="15"
                      height="9"
                      viewBox="0 0 15 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`flex-shrink-0 transition-transform duration-300 ${
                        openItems[item.id] ? "rotate-180" : ""
                      }`}
                      onClick={() => toggleFAQ(item.id)}

                    >
                      <path
                        d="M7.0677 8.47899L0 0.99759L0.942427 0L7.0677 6.48381L13.193 0L14.1354 0.99759L7.0677 8.47899Z"
                        fill="#1C1B1F"
                      />
                    </svg>
                  </div>

                  {/* Answer - Expandable */}
                  {openItems[item.id] && (
                    <div className="px-6 py-4 text-[#615F5F] robotoText text-[12px] lg:text-[20px] bg-white">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
