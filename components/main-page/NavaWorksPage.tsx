import { AboutUs } from "@/components/landing/about-us/about-us";
import { FAQSection } from "@/components/landing/faq-section/faq-section";
import { Hero } from "@/components/landing/hero-section/hero-section";
import Service from "@/components/landing/service-card/service";
import { IndustryScroll } from "@/components/landing/IndustryScroll/IndustryScroll";
import OurWorkCard from "@/components/landing/our-work/our-work-showcase";

const NavaWorksPage = () => {
  return (
    <div>
      <Hero />
      <Service />
      <IndustryScroll />
      <OurWorkCard />
      <AboutUs />
      <FAQSection />
    </div>
  );
};

export default NavaWorksPage;
