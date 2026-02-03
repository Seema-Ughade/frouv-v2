"use client";

import { ContactForm } from "./contact-form";

export default function ContactUsPage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Gradient Blob - Orange/Peach (Bottom Left) */}
      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{
          width: "254px",
          height: "254px",
          background: "linear-gradient(180deg, #FFCDBF 0%, #F38464 100%)",
          borderRadius: "70%",
          top: "350px",
          left: "-97px",
          opacity: 0.8,
          filter: "blur(20px)",
        }}
      />

      <div
        className="absolute pointer-events-none block lg:hidden  "
        style={{
          width: "254px",
          height: "74px",
          background: "linear-gradient(180deg, #FFCDBF 0%, #F38464 100%)",
          borderRadius: "50%",
          top: "40px",
          left: "-97px",
          opacity: 0.8,
          filter: "blur(18px)",
        }}
      />

      {/* Gradient Blob - Pink (Top Right) */}
      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{
          width: "355px",
          height: "355px",
          background: "linear-gradient(180deg, #FDBFE2 0%, #FDBFE2 100%)",
          borderRadius: "50%",
          top: "63px",
          left: "546px",
          opacity: 0.7,
          filter: "blur(40px)",
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 lg:py-16">
        <div className="flex flex-col-reverse lg:grid grid-cols-1 lg:  lg:grid-cols-[468px_620px] gap-0 lg:gap-10 items-start">
          {/* Left Section - Information */}
          <div className="flex flex-col w-full lg:max-w-[468px] max-h-[422px] h-[422px] robotoText justify-center">
            <div className="bg-[#FCFCFC] rounded-[16px] border-[0.6px] robotoText border-[#D3D3D3] lg:py-9 lg:px-4 p-6 ">
              <h1 className="text-[14px] robotoText lg:text-[18px] font-medium text-[#1B1B1B] px-[28px] tracking-wide mb-6 ">
                If you're building something new or refining what already
                exists, we'd love to hear from you. Reach out to Navawork to
                discuss your goals, challenges, and how we can support your
                design, product, and go-to-market needs.
              </h1>

              <div className="space-y-6 px-6">
                {/* Bullet Point 1 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-[linear-gradient(180deg,#D297FB_0%,#7415B7_100%)]" />
                  </div>
                  <p className="text-[14px] lg:text-[18px]  robotoText text-[#615F5F] ">
                    Share a brief overview of your project or idea
                  </p>
                </div>

                {/* Bullet Point 2 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-[linear-gradient(180deg,#D297FB_0%,#7415B7_100%)]" />
                  </div>
                  <p className="text-[14px] lg:text-[18px] robotoText text-[#615F5F]">
                    Get clarity on scope, timelines, and pricing
                  </p>
                </div>

                {/* Bullet Point 3 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-[linear-gradient(180deg,#D297FB_0%,#7415B7_100%)]" />
                  </div>
                  <p className="text-[14px] lg:text-[18px] robotoText text-[#615F5F]">
                    Start with a short conversation—no obligation, no pressure
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="flex flex-col w-full lg:max-w-[620px] justify-center">
            <div className="bg-[#FEFEFE] rounded-2xl border border-gray-200 lg:p-8 p-6 ">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
