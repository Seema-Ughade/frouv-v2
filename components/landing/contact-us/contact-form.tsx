"use client";

import { HoverButton } from "@/components/ui/hover-button";
import React from "react";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    projectDescription: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      {/* Heading */}
      <div>
        <h2 className="text-[12px] robotoText lg:text-[20px] font-medium text-[#1B1B1B] ">
          Got an idea or project? Tell us about it—we'll take it from there.
        </h2>
      </div>

      {/* Full Name Field */}
      <div className="space-y-2">
        <label
          htmlFor="fullName"
          className="block text-[14px] robotoText lg:text-[20px] robotoText text-[#615F5F]"
        >
          Full Name<span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            id="fullName"
            type="text"
            name="fullName"
            placeholder="Type your awesome name here"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full     placeholder-[#615F5F]
    text-[12px] sm:text-[12px] lg:text-[20px]
 px-4 py-3 rounded-[4px] lg:rounded-[8px] border-[0.6px] robotoText border-[#D3D3D3] border-[#D3D3D3] bg-white text-[#615F5F] placeholder-[#615F5F] font-light focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
          />
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[32px] h-[32px] text-gray-400"
          >
            <mask
              id="mask0_1_7485"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="32"
              height="32"
            >
              <rect width="32" height="32" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1_7485)">
              <path
                d="M16.0001 15.1793C14.9001 15.1793 13.9584 14.7877 13.1751 14.0043C12.3917 13.221 12.0001 12.2793 12.0001 11.1793C12.0001 10.0793 12.3917 9.13765 13.1751 8.35432C13.9584 7.57099 14.9001 7.17932 16.0001 7.17932C17.1001 7.17932 18.0417 7.57099 18.8251 8.35432C19.6084 9.13765 20.0001 10.0793 20.0001 11.1793C20.0001 12.2793 19.6084 13.221 18.8251 14.0043C18.0417 14.7877 17.1001 15.1793 16.0001 15.1793ZM6.66675 24.8207V22.6257C6.66675 22.0752 6.82697 21.5602 7.14741 21.0807C7.46808 20.6013 7.8993 20.2291 8.44108 19.964C9.6993 19.3607 10.9583 18.9081 12.2181 18.6063C13.4779 18.3048 14.7385 18.154 16.0001 18.154C17.2616 18.154 18.5223 18.3048 19.7821 18.6063C21.0419 18.9081 22.3009 19.3607 23.5591 19.964C24.1009 20.2291 24.5321 20.6013 24.8527 21.0807C25.1732 21.5602 25.3334 22.0752 25.3334 22.6257V24.8207H6.66675ZM8.00008 23.4873H24.0001V22.6257C24.0001 22.3299 23.9047 22.0521 23.7141 21.7923C23.5236 21.5325 23.26 21.3129 22.9231 21.1333C21.8257 20.6018 20.6943 20.1945 19.5287 19.9117C18.3632 19.6288 17.187 19.4873 16.0001 19.4873C14.8132 19.4873 13.637 19.6288 12.4714 19.9117C11.3059 20.1945 10.1744 20.6018 9.07708 21.1333C8.74019 21.3129 8.47653 21.5325 8.28608 21.7923C8.09541 22.0521 8.00008 22.3299 8.00008 22.6257V23.4873ZM16.0001 13.846C16.7334 13.846 17.3612 13.5849 17.8834 13.0627C18.4056 12.5404 18.6667 11.9127 18.6667 11.1793C18.6667 10.446 18.4056 9.81821 17.8834 9.29599C17.3612 8.77377 16.7334 8.51265 16.0001 8.51265C15.2667 8.51265 14.639 8.77377 14.1167 9.29599C13.5945 9.81821 13.3334 10.446 13.3334 11.1793C13.3334 11.9127 13.5945 12.5404 14.1167 13.0627C14.639 13.5849 15.2667 13.846 16.0001 13.846Z"
                fill="#615F5F"
              />
            </g>
          </svg>

        </div>
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-[14px] lg:text-[20px] robotoText  text-[#615F5F]"
        >
          Email<span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Stay connected with us"
            value={formData.email}
            onChange={handleChange}
            className="w-full     placeholder-[#615F5F]
    text-[12px] sm:text-[12px] lg:text-[20px]
 px-4 py-3 rounded-[4px] lg:rounded-[8px] robotoText border-[0.6px] border-[#D3D3D3] bg-white text-[#615F5F] placeholder-[#615F5F] font-light focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
          />
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[32px] h-[32px] text-gray-400"
          >
            <mask
              id="mask0_1_7502"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="32"
              height="32"
            >
              <rect width="32" height="32" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1_7502)">
              <path
                d="M6.154 25.3334C5.54022 25.3334 5.02778 25.1278 4.61667 24.7167C4.20556 24.3056 4 23.7931 4 23.1794V8.82069C4 8.20691 4.20556 7.69446 4.61667 7.28335C5.02778 6.87224 5.54022 6.66669 6.154 6.66669H25.846C26.4598 6.66669 26.9722 6.87224 27.3833 7.28335C27.7944 7.69446 28 8.20691 28 8.82069V23.1794C28 23.7931 27.7944 24.3056 27.3833 24.7167C26.9722 25.1278 26.4598 25.3334 25.846 25.3334H6.154ZM16 16.154L5.33333 9.17935V23.1794C5.33333 23.4187 5.41022 23.6154 5.564 23.7694C5.718 23.9231 5.91467 24 6.154 24H25.846C26.0853 24 26.282 23.9231 26.436 23.7694C26.5898 23.6154 26.6667 23.4187 26.6667 23.1794V9.17935L16 16.154ZM16 14.6667L26.2563 8.00002H5.74367L16 14.6667ZM5.33333 9.17935V8.00002V23.1794C5.33333 23.4187 5.41022 23.6154 5.564 23.7694C5.718 23.9231 5.91467 24 6.154 24H5.33333V9.17935Z"
                fill="#615F5F"
              />
            </g>
          </svg>

        </div>
      </div>

      {/* Company/Brand Name Field */}
      <div className="space-y-2">
        <label
          htmlFor="company"
          className="block text-[14px] lg:text-[20px] robotoText  text-[#615F5F]"
        >
          Company/Brand Name
        </label>
        <div className="relative">
          <input
            id="company"
            type="text"
            name="company"
            placeholder="If you reach on behalf of a brand"
            value={formData.company}
            onChange={handleChange}
            className="w-full  robotoText   placeholder-[#615F5F]
    text-[12px] sm:text-[12px] lg:text-[20px]
 px-4 py-3 rounded-[4px] lg:rounded-[8px] border-[0.6px] border-[#D3D3D3] bg-white text-[#615F5F] placeholder-[#615F5F] font-light focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
          />
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[32px] h-[32px] text-gray-400"
          >
            <mask
              id="mask0_1_7506"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="32"
              height="32"
            >
              <rect width="32" height="32" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1_7506)">
              <path
                d="M6.154 26.6666C5.54022 26.6666 5.02778 26.4611 4.61667 26.05C4.20556 25.6389 4 25.1264 4 24.5126V11.4873C4 10.8735 4.20556 10.3611 4.61667 9.94998C5.02778 9.53887 5.54022 9.33331 6.154 9.33331H12V7.48698C12 6.87342 12.2056 6.36109 12.6167 5.94998C13.0278 5.53887 13.5402 5.33331 14.154 5.33331H17.846C18.4598 5.33331 18.9722 5.53887 19.3833 5.94998C19.7944 6.36109 20 6.87342 20 7.48698V9.33331H25.846C26.4598 9.33331 26.9722 9.53887 27.3833 9.94998C27.7944 10.3611 28 10.8735 28 11.4873V24.5126C28 25.1264 27.7944 25.6389 27.3833 26.05C26.9722 26.4611 26.4598 26.6666 25.846 26.6666H6.154ZM6.154 25.3333H25.846C26.0513 25.3333 26.2394 25.2479 26.4103 25.077C26.5812 24.9061 26.6667 24.718 26.6667 24.5126V11.4873C26.6667 11.282 26.5812 11.0939 26.4103 10.923C26.2394 10.7521 26.0513 10.6666 25.846 10.6666H6.154C5.94867 10.6666 5.76056 10.7521 5.58967 10.923C5.41878 11.0939 5.33333 11.282 5.33333 11.4873V24.5126C5.33333 24.718 5.41878 24.9061 5.58967 25.077C5.76056 25.2479 5.94867 25.3333 6.154 25.3333ZM13.3333 9.33331H18.6667V7.48698C18.6667 7.28187 18.5812 7.09387 18.4103 6.92298C18.2394 6.75209 18.0513 6.66665 17.846 6.66665H14.154C13.9487 6.66665 13.7606 6.75209 13.5897 6.92298C13.4188 7.09387 13.3333 7.28187 13.3333 7.48698V9.33331Z"
                fill="#615F5F"
              />
            </g>
          </svg>

        </div>
      </div>

      {/* Project Description Field */}
      <div className="space-y-2">
        <label
          htmlFor="projectDescription"
          className="block text-[14px] lg:text-[20px] robotoText text-[#615F5F]"
        >
          Project Description<span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <textarea
            id="projectDescription"
            name="projectDescription"
            placeholder="Tell us about your goals, challenges or ideas"
            value={formData.projectDescription}
            onChange={handleChange}
            rows={5}
            className="w-full  robotoText   placeholder-[#615F5F]
    text-[12px] sm:text-[12px] lg:text-[20px]
 px-4 py-3 rounded-[4px] lg:rounded-[8px] border-[0.6px] border-[#D3D3D3] bg-white text-[#615F5F] placeholder-[#615F5F] font-light focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none"
          />
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[32px] h-[32px] text-gray-400"
          >
            <mask
              id="mask0_1_7502"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="32"
              height="32"
            >
              <rect width="32" height="32" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1_7502)">
              <path
                d="M6.154 25.3334C5.54022 25.3334 5.02778 25.1278 4.61667 24.7167C4.20556 24.3056 4 23.7931 4 23.1794V8.82069C4 8.20691 4.20556 7.69446 4.61667 7.28335C5.02778 6.87224 5.54022 6.66669 6.154 6.66669H25.846C26.4598 6.66669 26.9722 6.87224 27.3833 7.28335C27.7944 7.69446 28 8.20691 28 8.82069V23.1794C28 23.7931 27.7944 24.3056 27.3833 24.7167C26.9722 25.1278 26.4598 25.3334 25.846 25.3334H6.154ZM16 16.154L5.33333 9.17935V23.1794C5.33333 23.4187 5.41022 23.6154 5.564 23.7694C5.718 23.9231 5.91467 24 6.154 24H25.846C26.0853 24 26.282 23.9231 26.436 23.7694C26.5898 23.6154 26.6667 23.4187 26.6667 23.1794V9.17935L16 16.154ZM16 14.6667L26.2563 8.00002H5.74367L16 14.6667ZM5.33333 9.17935V8.00002V23.1794C5.33333 23.4187 5.41022 23.6154 5.564 23.7694C5.718 23.9231 5.91467 24 6.154 24H5.33333V9.17935Z"
                fill="#615F5F"
              />
            </g>
          </svg>

        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="lg:text-[20px] robotoText text-[12px] text-[#615F5F]">
        By Clicking submit you agree with our terms and Conditions, Privacy
        Policy
      </div>

      {/* Submit Button */}
      <div className="flex w-full justify-center lg:justify-center">

      <HoverButton
        // type="submit"
        className="robotoText lg:max-w-[240px] w-[150px] text-[12px] lg:text-[12px] lg:py-4 py-2 px-6 rounded-full bg-black text-white font-semibold "
      >
        Submit
      </HoverButton>
            </div>

    </form>
  );
}
