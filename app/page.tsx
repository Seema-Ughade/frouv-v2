import AnnouncementBar from "@/components/landing/AnnouncementBar";
import HeroCTA from "@/components/landing/HeroCTA";
import { AboutUs } from "@/components/landing/about-us/about-us";
import { FAQSection } from "@/components/landing/faq-section/faq-section";
import { Hero } from "@/components/landing/hero-section/hero-section";
import Service from "@/components/landing/service-card/service";
import { GTMStrategyContainer } from "@/components/landing/strategy-section/gtm-strategy-container";
import { IndustryScroll } from "@/components/landing/IndustryScroll/IndustryScroll";
import RoadmapSection from "@/components/landing/roadmap-section/roadmap-section";
import OurWorkCard from "@/components/landing/our-work/our-work-showcase";
import ServicesShowcase from "@/components/landing/our-service-section/our-service-section-showcase";

export default function Home() {
  return (
    <div className="">
      <div className="hidden sticky z-50 top-0 lg:block">
        <AnnouncementBar />
      </div>
      <Hero />
      <Service />
      <IndustryScroll />
      <ServicesShowcase />
      <GTMStrategyContainer />
      <RoadmapSection />
      <OurWorkCard />
      <AboutUs />
      <FAQSection />
      <HeroCTA />
    </div>
  );
}
