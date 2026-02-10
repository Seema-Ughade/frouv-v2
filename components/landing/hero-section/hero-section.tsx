import { HoverButton } from "@/components/ui/Button/button";
import HeroBackground from "./HeroBackground";

export function Hero() {
  return (
    <section className="relative lg:mt-[10px] mt-2 lg:min-h-[580px] flex flex-col items-center justify-center overflow-hidden bg-white lg:pt-0 pt-4 pb-2">
      <HeroBackground />
      <div className="relative z-10 w-full lg:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0 text-center">
        {/* Badge */}
        <div className="inline-flex mt-3 lg:max-w-[280px] lg:h-[50px] sm:h-[28px] h-[28px] items-center justify-center mb-4 px-[20px]  lg:py-[12px] py-[5px] rounded-[32px] bg-[#F5EAFD] border-[0.6px] border-[#A23BEA]">
          <div className="w-2 h-2 bg-[#FFD700] rotate-45 mr-2 flex-shrink-0" />
          <span className="lg:text-[15px] text-[12px] robotoText text-[#9F1FFA]">
            Design, Brand & Growth Agency
          </span>
        </div>

        {/* Description */}
        <h1 className="text-[#1B1B1B] robotoText text-center w-full lg:w-[1127px] mx-auto robotoText font-semibold lg:text-[64px] text-[32px] mb-4 leading-tight">
          We Build <br className="block lg:hidden" /> Brands & Launch Them <br className="block lg:hidden" /> to Market Success </h1>

        {/* Description */}
        <p className="w-full lg:max-w-[1080px] robotoText lg:px-0 px-4 mx-auto robotoText lg:text-[20px] text-[12px] text-[#615F5F] mb-6 mx-auto leading-relaxed">
          From Design and Brand Identity to Go-to-Market Strategy, we create and execute comprehensive solutions that don't just look great—they drive real business growth and market dominance. </p>

        {/* CTA Buttons */}
        <div className="hidden sm:flex flex-col sm:flex-row text-center mx-auto items-center justify-center gap-4 mb-14">
          <HoverButton className="w-[240px] h-[56px] robotoText bg-[#1B1B1B] text-white rounded-[40px] text-[18px] font-medium flex items-center justify-center gap-2">
            Launch your Brand
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"   className="flex-shrink-0"> <mask id="mask0_154_1179" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24" > <rect width="24" height="24" fill="#D9D9D9" /> </mask> <g mask="url(#mask0_154_1179)"> <path d="M17.0788 12.5H5V11.5H17.0788L11.2865 5.70775L12 5L19 12L12 19L11.2865 18.2923L17.0788 12.5Z" fill="white" /> </g> </svg>
             </HoverButton>
          <HoverButton className="bg-white robotoText w-[240px] h-[56px] border border-[#D3D3D3] text-[#1B1B1B] rounded-[40px] text-[18px] font-medium flex items-center justify-center">
            Book GTM Strategy Call
          </HoverButton>
        </div>

        {/* Features Row */}
        <div className="w-full lg:max-w-[1127px] lg:px-0 px-8 mx-auto grid grid-cols-2 md:grid-cols-4 gap-[16px] mt-1 mb-2">
          {[
            {
              icon: (
                <svg className="w-[13] h-[11] lg:w-[28] lg:h-[28]" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" > <mask id="mask0_124_1133" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28" > <rect width="28" height="28" fill="#D9D9D9" /> </mask> <g mask="url(#mask0_124_1133)"> <path d="M5.38475 23.3334C4.84769 23.3334 4.39931 23.1535 4.03958 22.7938C3.67986 22.434 3.5 21.9857 3.5 21.4486V10.0514C3.5 9.51438 3.67986 9.06599 4.03958 8.70627C4.39931 8.34655 4.84769 8.16669 5.38475 8.16669H10.5V6.55115C10.5 6.01428 10.6799 5.56599 11.0396 5.20627C11.3993 4.84655 11.8477 4.66669 12.3847 4.66669H15.6153C16.1523 4.66669 16.6007 4.84655 16.9604 5.20627C17.3201 5.56599 17.5 6.01428 17.5 6.55115V8.16669H22.6152C23.1523 8.16669 23.6007 8.34655 23.9604 8.70627C24.3201 9.06599 24.5 9.51438 24.5 10.0514V21.4486C24.5 21.9857 24.3201 22.434 23.9604 22.7938C23.6007 23.1535 23.1523 23.3334 22.6152 23.3334H5.38475ZM11.6667 8.16669H16.3333V6.55115C16.3333 6.37167 16.2586 6.20717 16.109 6.05765C15.9595 5.90812 15.7949 5.83335 15.6153 5.83335H12.3847C12.2051 5.83335 12.0405 5.90812 11.891 6.05765C11.7414 6.20717 11.6667 6.37167 11.6667 6.55115V8.16669ZM23.3333 16.9167H16.3333V18.6667H11.6667V16.9167H4.66667V21.4486C4.66667 21.6283 4.74143 21.7929 4.89096 21.9424C5.04049 22.0919 5.20508 22.1667 5.38475 22.1667H22.6152C22.7949 22.1667 22.9595 22.0919 23.109 21.9424C23.2586 21.7929 23.3333 21.6283 23.3333 21.4486V16.9167ZM12.8333 17.5H15.1667V15.1667H12.8333V17.5ZM4.66667 15.75H11.6667V14H16.3333V15.75H23.3333V10.0514C23.3333 9.87177 23.2586 9.70717 23.109 9.55765C22.9595 9.40812 22.7949 9.33335 22.6152 9.33335H5.38475C5.20508 9.33335 5.04049 9.40812 4.89096 9.55765C4.74143 9.70717 4.66667 9.87177 4.66667 10.0514V15.75Z" fill="#A23BEA" /> </g> </svg> ),
              label: "Managed Services",
              color: "bg-[#F1E0FC]",
            },
            {
              icon: (
                <svg className="w-[13] h-[11] lg:w-[28] lg:h-[28]" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" > <mask id="mask0_124_1140" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28" > <rect width="28" height="28" fill="#D9D9D9" /> </mask> <g mask="url(#mask0_124_1140)"> <path d="M15.8107 23.3334L8.75001 15.9743V14.4486H12.25C13.4301 14.4486 14.5029 14.0759 15.4686 13.3304C16.434 12.5847 16.9272 11.5215 16.9482 10.141H7.58334V8.97431H16.8225C16.5816 8.0544 16.042 7.30092 15.2037 6.7139C14.3653 6.12687 13.3807 5.83335 12.25 5.83335H7.58334V4.66669H20.4167V5.83335H15.8174C16.3737 6.16391 16.856 6.60967 17.2643 7.17064C17.6727 7.73142 17.9277 8.33265 18.0294 8.97431H20.4167V10.141H18.1216C18.1155 11.7938 17.5247 13.1194 16.3491 14.1179C15.1735 15.1161 13.8071 15.6153 12.25 15.6153H10.0357L17.4326 23.3334H15.8107Z" fill="#A23BEA" /> </g> </svg> ),
              label: "Predictable Pricing",
              color: "bg-[#F1E0FC]",
            },
            {
              icon: (
                <svg className="w-[13] h-[11] lg:w-[28] lg:h-[28]" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" > <mask id="mask0_124_1148" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28" > <rect width="28" height="28" fill="#D9D9D9" /> </mask> <g mask="url(#mask0_124_1148)"> <path d="M8.75002 19.25H15.75V18.0834H8.75002V19.25ZM8.75002 14.5834H19.25V13.4167H8.75002V14.5834ZM8.75002 9.91669H19.25V8.75002H8.75002V9.91669ZM6.55144 23.3334C6.01438 23.3334 5.56599 23.1535 5.20627 22.7938C4.84655 22.434 4.66669 21.9857 4.66669 21.4486V6.55144C4.66669 6.01438 4.84655 5.56599 5.20627 5.20627C5.56599 4.84655 6.01438 4.66669 6.55144 4.66669H21.4486C21.9857 4.66669 22.434 4.84655 22.7938 5.20627C23.1535 5.56599 23.3334 6.01438 23.3334 6.55144V21.4486C23.3334 21.9857 23.1535 22.434 22.7938 22.7938C22.434 23.1535 21.9857 23.3334 21.4486 23.3334H6.55144ZM6.55144 22.1667H21.4486C21.6283 22.1667 21.7929 22.0919 21.9424 21.9424C22.0919 21.7929 22.1667 21.6283 22.1667 21.4486V6.55144C22.1667 6.37177 22.0919 6.20717 21.9424 6.05765C21.7929 5.90812 21.6283 5.83335 21.4486 5.83335H6.55144C6.37177 5.83335 6.20717 5.90812 6.05765 6.05765C5.90812 6.20717 5.83335 6.37177 5.83335 6.55144V21.4486C5.83335 21.6283 5.90812 21.7929 6.05765 21.9424C6.20717 22.0919 6.37177 22.1667 6.55144 22.1667Z" fill="#A23BEA" /> </g> </svg> ),
              label: "No Hiring Hassles",
              color: "bg-[#F1E0FC]",
            },
            {
              icon: (
                <svg className="w-[13] h-[11] lg:w-[28] lg:h-[28]" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" > <mask id="mask0_124_1156" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28" > <rect width="28" height="28" fill="#D9D9D9" /> </mask> <g mask="url(#mask0_124_1156)"> <path d="M14 13.2819C13.0375 13.2819 12.2136 12.9392 11.5282 12.2538C10.8427 11.5684 10.5 10.7444 10.5 9.78192C10.5 8.81942 10.8427 7.99546 11.5282 7.31005C12.2136 6.62463 13.0375 6.28192 14 6.28192C14.9625 6.28192 15.7865 6.62463 16.4719 7.31005C17.1573 7.99546 17.5 8.81942 17.5 9.78192C17.5 10.7444 17.1573 11.5684 16.4719 12.2538C15.7865 12.9392 14.9625 13.2819 14 13.2819ZM5.83337 21.7181V19.7975C5.83337 19.3158 5.97357 18.8652 6.25396 18.4456C6.53454 18.0262 6.91186 17.7005 7.38592 17.4685C8.48686 16.9406 9.58849 16.5446 10.6908 16.2805C11.7931 16.0167 12.8962 15.8848 14 15.8848C15.1039 15.8848 16.207 16.0167 17.3093 16.2805C18.4116 16.5446 19.5132 16.9406 20.6142 17.4685C21.0882 17.7005 21.4655 18.0262 21.7461 18.4456C22.0265 18.8652 22.1667 19.3158 22.1667 19.7975V21.7181H5.83337ZM7.00004 20.5514H21V19.7975C21 19.5387 20.9166 19.2956 20.7498 19.0683C20.5832 18.841 20.3524 18.6488 20.0577 18.4917C19.0975 18.0266 18.1075 17.6702 17.0876 17.4227C16.0678 17.1752 15.0386 17.0514 14 17.0514C12.9615 17.0514 11.9323 17.1752 10.9125 17.4227C9.8926 17.6702 8.90258 18.0266 7.94242 18.4917C7.64764 18.6488 7.41693 18.841 7.25029 19.0683C7.08346 19.2956 7.00004 19.5387 7.00004 19.7975V20.5514ZM14 12.1153C14.6417 12.1153 15.191 11.8868 15.648 11.4298C16.1049 10.9729 16.3334 10.4236 16.3334 9.78192C16.3334 9.14025 16.1049 8.59095 15.648 8.134C15.191 7.67706 14.6417 7.44859 14 7.44859C13.3584 7.44859 12.8091 7.67706 12.3521 8.134C11.8952 8.59095 11.6667 9.14025 11.6667 9.78192C11.6667 10.4236 11.8952 10.9729 12.3521 11.4298C12.8091 11.8868 13.3584 12.1153 14 12.1153Z" fill="#A23BEA" /> </g> </svg> ),
              label: "92% Client Retention",
              color: "bg-[#F1E0FC]",
            },
          ].map((feature, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-row items-center gap-1 lg:gap-5"
              >
                <div className={`${feature.color} p-2 lg:p-3 rounded-full`}>
                  {feature.icon}
                </div>
                <p className="text-[#615F5F] robotoText lg:text-[17px] text-[10px] text-center">
                  {feature.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="lg:hidden flex flex-col mt-8 sm:flex-row text-center mx-auto items-center justify-center gap-6 mb-4 lg:mb-14">
          <button className="lg:max-w-[240px] w-full h-[36px] robotoText bg-[#1B1B1B] text-white rounded-[40px] lg:text-[18px] text-[12px] font-medium flex items-center justify-center gap-2">
            Launch your Brand
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <mask id="mask0_154_1179" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24" > <rect width="24" height="24" fill="#D9D9D9" /> </mask> <g mask="url(#mask0_154_1179)"> <path d="M17.0788 12.5H5V11.5H17.0788L11.2865 5.70775L12 5L19 12L12 19L11.2865 18.2923L17.0788 12.5Z" fill="white" /> </g> </svg> </button>
          <button className="bg-white robotoText lg:max-w-[240px] w-full h-[36px] border border-[#D3D3D3] text-[#1B1B1B] rounded-[40px] lg:text-[18px] text-[12px] font-medium flex items-center justify-center">
            Book GTM Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
}
