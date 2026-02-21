import Banner from "@/components/landing-page/banner";
import BundleOffer from "@/components/landing-page/BundleOffer";
import DiscoverMore from "@/components/landing-page/DiscoverMore";
import EcoFriendlyGifts from "@/components/landing-page/ecofriendlygifts";
import TopSelling from "@/components/landing-page/TopSelling";
import Groceries from "@/components/landing-page/groceries";
import NewArrivals from "@/components/landing-page/new-arrivals";
import FeaturesSection from "@/components/landing-page/FeaturesSection";
import Trending from "@/components/landing-page/trending";
import BestSellers from "@/components/landing-page/BestSellers";
import SeasonalProduct from "../landing-page/SeasonalProduct";
import ExclusiveDeals from "../landing-page/ExclusiveDeals";
import CategoryNav from "../landing-page/CategoryNav";
import JourneyTimeline from "../landing-page/journey-timeline";

const LandingPageUI = () => {
  return (
    <main className="w-full dark:bg-[#0a0a0a] lg:mt-[10px]">
      <CategoryNav/>
      <Banner />
      <div className="container mx-auto p-1 lg:p-4">
        <FeaturesSection />
        <NewArrivals />
        <Groceries />
        <EcoFriendlyGifts />
        <BestSellers />
        <Trending />
        <BundleOffer />
        <DiscoverMore />
        <TopSelling />
        <JourneyTimeline />
        {/* <Productactions /> */}
        <SeasonalProduct />
        <ExclusiveDeals />
      </div>
    </main>
  );
};

export default LandingPageUI;
