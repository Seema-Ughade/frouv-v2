import Banner from "@/components/landing-page/banner";
import BeautyPersonalCare from "@/components/landing-page/beautypersonalcare";
import EarthQuotesSlider from "@/components/landing-page/earthquotesslider";
import EcoFriendlyGifts from "@/components/landing-page/ecofriendlygifts";
import FunFact from "@/components/landing-page/funfact";
import Groceries from "@/components/landing-page/groceries";
import NewArrivals from "@/components/landing-page/new-arrivals";
import SeasonalOffers from "@/components/landing-page/seasonal-offers";
import Trending from "@/components/landing-page/trending";
import ExploreOrganicKitchen from "@/components/landing-page/exploreorganickitchen";

export default function LandingPage() {
  return (
    <main className="w-full lg:mt-30 ">
      <Banner />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Groceries />
          <div className="lg:col-span-2">
            <NewArrivals />
          </div>
        </div>
        <SeasonalOffers />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
          <div className="lg:col-span-2">
            <Trending />
          </div>
          <BeautyPersonalCare />
        </div>
      </div>
      <FunFact />
      <EcoFriendlyGifts />
      <EarthQuotesSlider />
      <ExploreOrganicKitchen />


    </main>
  );
}
