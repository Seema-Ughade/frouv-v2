"use client";

import { StrategySection as StrategySectionType } from "./data/strategy-data";

interface StrategySectionProps {
  section: StrategySectionType;
}

export function StrategySection({ section }: StrategySectionProps) {
  const getTitleColor = (bg: string) => {
    switch (bg) {
      case "bg-gradient-to-r from-[#CCDBFF] to-[rgba(254,254,255,0.5)]":
        return "text-[#225295]";
      case "bg-gradient-to-r from-[#EFABA9] to-[rgba(255,247,246,0.5)]":
        return "text-[#8E2A27]";
      case "bg-gradient-to-r from-[#DBBBF2] to-[rgba(248,243,251,0.5)]":
        return "text-[#7415B7]";
      default:
        return "text-gray-700";
    }
  };

  const getIconBgColor = (bg: string) => {
    switch (bg) {
      case "bg-gradient-to-b from-[#CCDBFF] to-[#EEF3FF]":
        return "bg-gradient-to-b from-[#CCDBFF] to-[#EEF3FF]";
      case "bg-gradient-to-b from-[#EFABA9] to-[#FAE7E5]":
        return "bg-gradient-to-b from-[#EFABA9] to-[#FAE7E5]";
      case "bg-gradient-to-b from-[#DBBBF2] to-[#F7EDFF]":
        return "bg-gradient-to-b from-[#DBBBF2] to-[#F7EDFF]";
      default:
        return "bg-gray-50 border border-gray-200";
    }
  };

  

  return (
    <section className="w-full flex flex-col justify-center py-2 px-2 lg:px-16 bg-white  snap-start">
      {/* Header with number and title */}
      <div
        className={`${section.headerBg} px-6 h-[24px] lg:h-[48px] mb-4 lg:mb-14 w-full robotoText font-semibold max-w-[1128px] mx-auto flex items-center`}
      >
        <h2
          className={`robotoText lg:text-[24px] text-[12px] font-semibold ${section.headerTextColor}`}
        >
          {section.number}. {section.title}
        </h2>
      </div>

      {/* Main description */}
      <p className="text-[#615F5F] lg:text-[24px] robotoText text-[12px] leading-relaxed mb-4 lg:mb-12 max-w-[1128px] mx-auto">
        {section.mainDescription}
      </p>

      {/* Items list */}
      <div className="space-y-6 max-w-[1128px] mx-auto mb-2 lg:mb-4 w-full">
        {section.items.map((item, idx) => (
          <div key={idx} className="flex gap-4 sm:gap-6">
            {/* Icon box */}
            <div
              className={`${getIconBgColor(section.iconBg)} w-16 h-16 sm:w-12 sm:h-12 flex items-center justify-center text-[#1B1B1B] text-[20px] font-medium rounded-[8px] flex-shrink-0`}
            >
              {item.icon}
            </div>

            {/* Text content */}
            <div className="flex-1">
              <h3 className="text-[#1B1B1B] text-[12px] robotoText lg:text-[20px] font-medium mb-1 lg:mb-2">
                {item.title}
              </h3>
              <p className="text-[#615F5F] text-[12px] robotoText lg:text-[20px] font-medium ">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
