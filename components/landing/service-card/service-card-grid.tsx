"use client";

import { ServiceCard, type ServiceCardItem } from "./service-card";

const PaletteIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_1_5460"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="40"
      height="40"
    >
      <rect width="40" height="40" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_1_5460)">
      <path
        d="M10.6408 32.6925C9.98388 32.6925 9.33402 32.5792 8.69124 32.3525C8.04874 32.1261 7.48069 31.8121 6.98708 31.4104C7.53846 31.0471 8.00749 30.5593 8.39416 29.9471C8.78083 29.3349 8.97416 28.5833 8.97416 27.6925C8.97416 26.7522 9.29472 25.9615 9.93583 25.3204C10.5769 24.6796 11.3675 24.3592 12.3075 24.3592C13.2478 24.3592 14.0385 24.6796 14.6796 25.3204C15.3204 25.9615 15.6408 26.7522 15.6408 27.6925C15.6408 29.0675 15.1512 30.2446 14.1721 31.2238C13.1929 32.2029 12.0158 32.6925 10.6408 32.6925ZM10.6408 31.0258C11.5575 31.0258 12.3422 30.6994 12.995 30.0467C13.6478 29.3939 13.9742 28.6092 13.9742 27.6925C13.9742 27.2203 13.8144 26.8244 13.495 26.505C13.1755 26.1856 12.7797 26.0258 12.3075 26.0258C11.8353 26.0258 11.4394 26.1856 11.12 26.505C10.8005 26.8244 10.6408 27.2203 10.6408 27.6925C10.6408 28.3314 10.5644 28.9147 10.4117 29.4425C10.2589 29.9703 10.0575 30.4703 9.80749 30.9425C9.94638 30.9981 10.0853 31.0258 10.2242 31.0258H10.6408ZM18.75 24.1667L15.8975 21.3142L29.5321 7.67959C29.8376 7.37403 30.2196 7.21431 30.6779 7.20042C31.1362 7.18653 31.5321 7.34625 31.8654 7.67959L32.3846 8.19875C32.7179 8.53209 32.8846 8.92097 32.8846 9.36542C32.8846 9.80986 32.7179 10.1988 32.3846 10.5321L18.75 24.1667Z"
        fill="white"
      />
    </g>
  </svg>
);

const MegaphoneIcon = () => (
  <svg
    width="31"
    height="24"
    viewBox="0 0 31 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.1279 12.5642V10.8975H30.5125V12.5642H25.1279ZM26.9358 23.3333L22.6279 20.1025L23.6667 18.7821L27.9742 22.0129L26.9358 23.3333ZM23.5383 4.55125L22.5 3.23083L26.8075 0L27.8458 1.32042L23.5383 4.55125ZM4.42292 21.6667V15.3204H2.69208C1.94653 15.3204 1.31139 15.0582 0.786667 14.5337C0.262222 14.009 0 13.3739 0 12.6283V10.8333C0 10.0878 0.262222 9.45264 0.786667 8.92791C1.31139 8.40347 1.94653 8.14125 2.69208 8.14125H8.91L15.5125 4.23083V19.2308L8.91 15.3204H6.08958V21.6667H4.42292ZM13.8458 16.2629V7.19875L9.37792 9.80791H2.69208C2.43569 9.80791 2.20069 9.91472 1.98708 10.1283C1.77347 10.3419 1.66667 10.5769 1.66667 10.8333V12.6283C1.66667 12.8847 1.77347 13.1197 1.98708 13.3333C2.20069 13.5469 2.43569 13.6537 2.69208 13.6537H9.37792L13.8458 16.2629ZM18.4613 16.545V6.91667C19.019 7.43389 19.4683 8.11292 19.8092 8.95375C20.15 9.79458 20.3204 10.7203 20.3204 11.7308C20.3204 12.7414 20.15 13.6671 19.8092 14.5079C19.4683 15.3487 19.019 16.0278 18.4613 16.545Z"
      fill="white"
    />
  </svg>
);

const TrendingUpIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_1_5496"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="40"
      height="40"
    >
      <rect width="40" height="40" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_1_5496)">
      <path
        d="M14.4871 20.4425V11.1538H17.1796V20.4425L15.8333 19.0705L14.4871 20.4425ZM21.7308 24.1605V4.48712H24.4229V21.468L21.7308 24.1605ZM7.17956 27.7309V17.8205H9.87164V25.0384L7.17956 27.7309ZM6.98706 34.25L15.8141 25.423L21.7308 30.5063L32.9871 19.25H29.1666V17.5834H35.8333V24.25H34.1666V20.4296L21.7691 32.8271L15.8525 27.7438L9.34623 34.25H6.98706Z"
        fill="white"
      />
    </g>
  </svg>
);

const defaultServiceCards: ServiceCardItem[] = [
  {
    id: "1",
    title: "Design & Branding",
    description:
      "Create stunning Design and Visual Identities that capture attention and build lasting impressions",
    icon: <PaletteIcon />,
    points: ["Brand Identity", "UI/UX Design", "Design Systems"],
  },
  {
    id: "2",
    title: "Marketing & GTM",
    description:
      "Strategic market entry plans that position your brand for maximum impact and growth",
    icon: <MegaphoneIcon />,
    points: ["GTM Strategy", "Market Positioning", "Campaign Execution"],
  },
  {
    id: "3",
    title: "Growth & Scale",
    description:
      "Data-driven optimization and performance marketing that accelerates sustainable growth",
    icon: <TrendingUpIcon />,
    points: ["Performance Marketing", "Analytics", "Conversion Optimization"],
  },
];

interface ServiceCardsGridProps {
  items?: ServiceCardItem[];
}

export function ServiceCardsGrid({
  items = defaultServiceCards,
}: ServiceCardsGridProps) {
  return (
    <div className="w-full max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-20">
      {items.map((item) => (
        <ServiceCard key={item.id} item={item} />
      ))}
    </div>
  );
}
