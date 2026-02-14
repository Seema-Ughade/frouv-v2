'use client'

import OurWorkCard from './our-work-card'
import image1 from "@/public/our-work-section/img1.png"
import image2 from "@/public/our-work-section/img2.png"
import image3 from "@/public/our-work-section/img3.png"
import image4 from "@/public/our-work-section/img4.png"
import image5 from "@/public/our-work-section/img5.png"
import image6 from "@/public/our-work-section/img6.png"
import image7 from "@/public/our-work-section/img7.png"
import image8 from "@/public/our-work-section/img8.png"

export default function PortfolioShowcase() {
   const portfolioProjects = [
    {
      id: 1,
      title: 'Sevaa™',
      description: 'India\'s first on-demand home services app with a 15-minute response time, empowering urban households.',
      tags: [
        { label: 'UX Design', variant: 'primary' as const },
        { label: 'Landing Page', variant: 'secondary' as const },
      ],
      imageUrl: image1,
      imageAlt: 'Sevaa platform preview',
    },
    {
      id: 2,
      title: 'EventGo',
      description: 'Book tickets for your favorite events from nearby places without any hassle.',
      tags: [
        { label: 'UI Design', variant: 'primary' as const },
        { label: 'Web App', variant: 'secondary' as const },
      ],
      imageUrl: image2,
      imageAlt: 'EventGo app preview',
    },
    {
      id: 3,
      title: 'Organic Marketplace Banner',
      description: 'Landing page banner for organic and sustainable marketplace to enhance branding and engagement.',
      tags: [
        { label: 'Branding', variant: 'primary' as const },
        { label: 'Marketing Banner', variant: 'secondary' as const },
      ],
      imageUrl: image3,
      imageAlt: 'Organic marketplace banner',
    },
    {
      id: 4,
      title: 'Ozygen Store Dashboard',
      description: 'Admin panel with real-time sales insights and order tracking for e-commerce management.',
      tags: [
        { label: 'UI Design', variant: 'primary' as const },
        { label: 'Dashboard', variant: 'secondary' as const },
      ],
      imageUrl: image4,
      imageAlt: 'Ozygen Store dashboard preview',
    },
    {
      id: 5,
      title: 'Flatmate Finder Platform',
      description: 'Discover compatible flatmates who share your vibe, lifestyle, and goals for effortless living together.',
      tags: [
        { label: 'MVP', variant: 'primary' as const },
        { label: 'Web App', variant: 'secondary' as const },
      ],
      imageUrl: image5,
      imageAlt: 'Flatmate finder platform',
    },
    {
      id: 6,
      title: 'Sustainable Pitch Deck',
      description: 'Investment pitch deck for a $10B sustainable product market focused on transparency, trust, and traceability.',
      tags: [
        { label: 'Fundraising', variant: 'secondary' as const },
        { label: 'Pitch Deck', variant: 'secondary' as const },
      ],
      imageUrl: image6,
      imageAlt: 'Sustainable business pitch deck',
    },
    {
      id: 7,
      title: 'Seller Dashboard UI',
      description: 'Manage your business in one place with everything you need to sell, simplified.',
      tags: [
        { label: 'UI Design', variant: 'primary' as const },
        { label: 'Admin Panel', variant: 'secondary' as const },
      ],
      imageUrl: image7,
      imageAlt: 'Seller dashboard UI design',
    },
    {
      id: 8,
      title: 'Flats Hunting Platform',
      description: 'A real-time platform to find flats and flatmates without brokerage across multiple metropolitan cities.',
      tags: [
        { label: 'MVP', variant: 'primary' as const },
        { label: 'Web App', variant: 'secondary' as const },
      ],
      imageUrl: image8,
      imageAlt: 'Flats hunting platform',
    },
  ]


  return (
    <section className="w-full dark:bg-black pt-16 px-4">
      <div className="max-w-[1096px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-5">
            <div className="inline-flex w-full max-w-[172px] h-[50px] items-center justify-center px-6 py-2 rounded-full bg-[#F5EAFD] border border-[#A23BEA]">
              <span className="text-[15px] robotoText text-[#9F1FFA]">Our Work</span>
            </div>
          </div>

          <h1 className="text-[#1B1B1B] dark:text-white robotoText font-semibold text-[48px] mb-8 tracking-tight">
            Crafted with Purpose
          </h1>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioProjects.map((project) => (
            <OurWorkCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              imageAlt={project.imageAlt}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
