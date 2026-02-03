import { HoverButton } from "../ui/Button/button";
import Link from "next/link";

export default function HeroCTA() {
  return (
    <section className="bg-[#1B1B1B] robotoText w-full max-w-[1440px] mx-auto text-white lg:py-16 lg:px-16 py-8 px-5">
      <div className="flex flex-col items-center justify-center lg:gap-8 gap-4">
        <h1 className="font-semibold tracking-[0] robotoText text-[24px] lg:text-[64px] text-center max-w-[1127px] leading-[120%]">
          We craft brands and propel <br className="block lg:hidden" />
          them toward market success <br className="block lg:hidden" />
        </h1>

        <p className="text-[12px] lg:text-[24px]  max-w-[1040px] robotoText text-center font-medium">
          Let’s create something extraordinary — connect with us and ready to
          build something great
        </p>

        <div className="flex lg:flex-row flex-col gap-8 lg:max-w-[418px] w-full robotoText justify-center">
          <Link href="/contact-us" passHref>
            <HoverButton className="lg:max-w-[192px] w-full max-h-[56px] text-[12px] lg:text-[19.9px] px-10 py-3 bg-white text-[#1B1B1B] rounded-[48px] font-medium ">
              Contact Us
            </HoverButton>
          </Link>
          <HoverButton className="lg:max-w-[192px] w-full max-h-[56px] text-[12px] lg:text-[19.9px] px-6 py-3 border-2 border-white hover:border-[#ad6cdb] text-white font-medium rounded-[48px]">
            Schedule a Call
          </HoverButton>
        </div>
      </div>
    </section>
  );
}
