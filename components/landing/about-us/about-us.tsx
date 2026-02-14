"use client";

import { ValuesSection } from "./value-section";

export function AboutUs() {
  return (
    <section className="w-full max-w-[1440px] pt-10 md:pt-24 lg:pt-14">
      <div className=" px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-4 flex justify-center md:mb-6">
          <button className="lg:w-[172px] lg:px-0 px-2 h-[28px] lg:h-[50px] flex items-center justify-center rounded-[32px] border-[0.6px] border-[#A23BEA] bg-[#F5EAFD]">
            <span className="lg:text-[15px] text-[12px] robotoText text-[#9F1FFA]">About Us</span>
          </button>
        </div>

        {/* Main Title */}
        <h1 className="mb-4 dark:text-white lg:mb-8 text-center robotoText text-[#1B1B1B] font-semibold text-[32px] lg:text-[48px] tracking-tight ">
          Passionate Designers, Powerful Brands
        </h1>

        {/* Intro Description */}
        <p className="max-w-[981px] dark:text-white robotoText w-full text-[#615F5F] lg:text-[20px] text-[12px] mx-auto lg:mb-8 mb-4 text-center">
          We're a team of creative professionals dedicated to helping brands
          tell their stories through exceptional design. Our approach combines
          strategic thinking with artistic excellence to deliver solutions that
          not only look stunning but drive real business results.
        </p>

        {/* Partnership Statement */}
        <div className="mb-8 text-center md:mb-8">
          <p className="max-w-[981px] dark:text-white robotoText w-full mx-auto lg:px-0 px-5 text-[#1B1B1B] text-[12px] lg:text-[20px] font-medium ">
            From startups to established enterprises, we've partnered with
            diverse clients to create memorable brand experiences that stand the
            test of time.
          </p>
        </div>

        {/* Values Cards Grid */}
        <ValuesSection />
      </div>
    </section>
  );
}
