"use client";

import { ValueCard } from "./value-card";
import { valueCardsData } from "./data";

export function ValuesSection() {
  return (
    <div className="grid grid-cols-1 gap-x-56 gap-y-8 md:grid-cols-2 mx-auto max-w-[1120px] ">
      {valueCardsData.map((card) => (
        <ValueCard
          key={card.id}
          title={card.title}
          description={card.description}
          icon={card.icon}
        />
      ))}
    </div>
  );
}
