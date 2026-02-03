"use client";

interface ValueCardProps {
  title: string;
  description: string;
  icon: any;
}

export function ValueCard({ title, description, icon: Icon }: ValueCardProps) {
  return (
    <div className="flex flex-col lg:px-0 px-2 gap-4">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="flex h-12 w-12 lg:h-16 lg:w-16 items-center justify-center rounded-[8px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] text-white">
            <Icon className="h-8 w-8 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-[12px] lg:text-[20px] robotoText font-medium text-[#1B1B1B]">{title}</h3>
          <p className="mt-2 text-[#615F5F] robotoText lg:text-[20px] text-[12px]">{description}</p>
        </div>
      </div>
    </div>
  );
}
