"use client";

import { strategyData } from "./data/strategy-data";
import { StrategySection } from "./strategy-section";

export function GTMStrategyContainer() {
  return (
    <>
      <div className="w-full  ">
        <section className="relative w-full  flex flex-col items-center justify-center px-4 sm:px-8 overflow-hidden snap-start bg-white">
          <div
            className=" absolute pointer-events-none w-[72.67px] h-[72.67px] top-[-18px] left-[351px] blur-[14.3px]  lg:w-[230px] lg:h-[220px] lg:top-[-90px] lg:left-auto lg:right-[-50px] lg:blur-[20px] "
            style={{
              background: "linear-gradient(180deg, #DAE6FF 0%, #CE88FF 100%)",
              borderRadius: "50%",
              opacity: 1,
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto py-4 lg:py-10 text-center">
            {/* Badge - Marketing & GTM Strategy label */}
            <div className="inline-flex items-center justify-center mb-3 lg:mb-6 px-3 lg:px-6 py-1 lg:py-3 rounded-full bg-[#F5EAFD] border border-[#A23BEA]">
              <span className="lg:text-[15px] text-[12px] robotoText text-[#9F1FFA]">
                Marketing & GTM Strategy
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-[#1B1B1B] font-semibold robotoText text-[#1B1B1B] text-[32px] lg:text-[48px] mb-3 lg:mb-6 leading-tight">
              From Strategy to Market Domination
            </h1>

            {/* Subtitle description */}
            <p className="w-full lg:max-w-[1047px] text-[#615F5F] text-[12px] lg:px-0 px-[4px] lg:text-[20px] robotoText mb-1  lg:mb-2 mx-auto leading-relaxed">
              We don't just design brands—we launch them into the market with
              precision strategies that drive awareness, engagement, and revenue
              growth.
            </p>
          </div>
        </section>

        {strategyData.map((section, index) => (
          <section
            key={section.id}
            className="relative w-full flex flex-col items-center justify-center px-4 sm:px-8 bg-white snap-start"
          >
            <StrategySection section={section} />
          </section>
        ))}
      </div>
      
    </>
  );
}
