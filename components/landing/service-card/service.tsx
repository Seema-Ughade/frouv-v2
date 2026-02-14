import { ServiceCardsGrid } from "@/components/landing/service-card/service-card-grid";

export default function Service() {
  return (
    <main className=" dark:bg-black">
      {/* Hero Section */}
      <section className="w-full py-1 px-4 md:py-10">
        <div className="max-w-[1440px] mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-1 md:mb-12">
            <h1 className="w-full sm:max-w-[412px] dark:text-white robotoText lg:max-w-[721px] mx-auto text-[#1B1B1B] text-center font-semibold lg:text-[48px] text-[32px] lg:px-0 sm:px-2 px-2 lg:mb-6 mb-4 lg:leading-tight">
                Everything You Need <br className="block lg:hidden" />
  to Dominate Your Market <br className="block lg:hidden" />

            </h1>

            {/* Subheading */}
            <p className="w-full dark:text-white robotoText lg:max-w-[1047px] mx-auto lg:text-[20px] text-[12px] text-[#615F5F] lg:px-0 sm:px-4 px-4 mx-auto leading-relaxed">
              We're not just another agency. We're your growth partner—combining
              creative excellence with strategic marketing expertise to deliver
              results that matter.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="mt-6 md:mt-10">
            <ServiceCardsGrid />
          </div>
        </div>
      </section>
    </main>
  );
}
