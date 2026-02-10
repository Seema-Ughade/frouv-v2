import Link from "next/link";

// Use direct path from public folder to avoid Next.js Image Optimization API issues
const logo = "/logo.webp";

interface LogoProps {
  variant?: "mobile" | "desktop";
  priority?: boolean;
}

export default function Logo({ variant = "desktop", priority = false }: LogoProps) {
  if (variant === "mobile") {
    return (
      <Link href="/" prefetch={true} className="h-[47px] relative w-[89px] flex items-center">
        <img
          src={logo || "/placeholder.svg"}
          alt="FROUV"
          width={95}
          height={67}
          className="h-[67px] w-[95px] object-contain"
        />
        <span className="absolute -top-0.5 -right-1 rounded-2xl border border-[#FF9800] px-1 py-px text-[8px] font-semibold text-[#FF9800]">
          BETA
        </span>
      </Link>
    );
  }

  return (
    <Link href="/" prefetch={true} className="w-[126px] relative h-[76px] flex items-center">
      <img
        src={logo || "/placeholder.svg"}
        alt="Frouv Logo"
        width={126}
        height={76}
        className="object-contain"
      />
      <span className="absolute top-2 -right-2 rounded-2xl border border-[#FF9800] px-2 py-0.5 text-[10px] font-semibold text-[#FF9800]">
        BETA
      </span>
    </Link>
  );
}

