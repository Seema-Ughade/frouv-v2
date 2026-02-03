export interface ServiceCardItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  points: string[];
}

interface ServiceCardProps {
  item: ServiceCardItem;
}

export function ServiceCard({ item }: ServiceCardProps) {
  return (
    <div className="flex flex-col w-full lg:max-w-[320px] max-h-[420px] gap-4 p-8 rounded-[16px] border-[0.6px] border-[#D3D3D3] bg-white">
      {/* Icon */}
      <div className="w-16 h-16 rounded-[8px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] flex items-center justify-center flex-shrink-0">
        {item.icon}
      </div>

      {/* Title */}
      <h3 className="text-[20px] font-medium robotoText text-[#1B1B1B]">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-[#615F5F] lg:text-[20px] text-[18px] robotoText">
        {item.description}
      </p>

      {/* Points List */}
      <div className="flex flex-col gap-2 pt-2">
        {item.points.map((point, index) => (
          <div key={index} className="flex items-center gap-[11px]">
            <div className="w-2 h-2 rounded-full bg-[#A23BEA] flex-shrink-0 mt-1" />
            <span className="text-[18px] text-[#615F5F]">{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
