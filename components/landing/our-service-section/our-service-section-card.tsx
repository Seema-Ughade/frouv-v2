'use client'

import image1 from "../../../public/service/image1.png";
import image2 from "../../../public/service/image2.png";
import image3 from "../../../public/service/image3.png";
import image4 from "../../../public/service/image4.png";
import image5 from "../../../public/service/image5.jpg";
import image6 from "../../../public/service/image6.jpg";
import image7 from "../../../public/service/image7.png";
import image8 from "../../../public/service/image8.jpg";


import icon1 from "../../../public/images/image7.png"
import icon2 from "../../../public/images/image2.png"
import icon3 from "../../../public/images/image3.png"
import icon4 from "../../../public/images/image4.png"
import icon5 from "../../../public/images/image6.png"



export interface BrandingCardData {
  id: number;
  title: string;
  description: string;
  frontImage: any;
  backImage: any;
  icons: any[];
}

export const brandingCards: BrandingCardData[] = [
  {
    id: 1,
    title: "Branding & Identity",
    description:
      "Build a memorable brand through strategic design and visual storytelling.",
    frontImage: image2,
    backImage: image1,
    icons: [icon3, icon4], 
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Design intuitive interfaces that users love and trust.",
    frontImage: image2,
    backImage: image4,
    icons: [icon4, icon2], 
  },
  {
    id: 3,
    title: "Product Design",
    description:
      "Turn ideas into delightful digital products.",
    frontImage: image7,
    backImage: image4,
    icons: [icon4, icon5, icon3], 
  },
  {
    id: 4,
    title: "Web Design",
    description:
      "Create responsive websites that convert visitors into customers.",
    frontImage: image1,
    backImage: image2,
    icons: [icon1, icon2], 
  },
  {
    id: 5,
    title: "Visual Design",
    description:
      "Craft visuals that communicate clearly and beautifully.",
    frontImage: image8,
    backImage: image6,
    icons: [icon4, icon2], 
  },
  {
    id: 6,
    title: "Design Systems",
    description:
      "Build scalable design systems for consistent experiences.",
    frontImage: image5,
    backImage: image3,
    icons: [icon4, icon1, icon3], 
  },
];
