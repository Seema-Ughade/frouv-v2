import CareerForm from './career-form'

export default function CareerPage() {
  return (
    <div className="lg:mt-[96px] bg-white relative overflow-hidden">
      {/* Pink Gradient Background Blob */}
      {/* Pink Gradient Background Blob */}
<div
  className="
    absolute rounded-full pointer-events-none
    bg-[linear-gradient(180deg,#FDBFE2_0%,#FDBFE2_100%)]
    opacity-70
    blur-[10px] lg:blur-[30px] blur-[10px]

    /* Mobile */
    w-[101.57px] h-[101.57px]
    top-[22.29px] left-[165px]

    /* Desktop */
    lg:w-[355px] lg:h-[355px]
    lg:top-[63px] lg:left-[596px]
  "
/>



      <div className="max-w-7xl mx-auto px-6 lg:py-16 py-8 relative z-10">
        {/* Careers Badge */}
        <div className="flex justify-center mb-6 lg:mb-8">
          <div className="inline-flex items-center justify-center lg:w-[164px] w-[114px] lg:h-[50px] h-[28px] gap-2 lg:px-6 px-6 py-2 rounded-full border-[0.6px] border-[#A23BEA] bg-[#F5EAFD]">
            <span className="text-[#FFD700] h-[13px] w-[13px] ">✦</span>
            <span className="lg:text-[15px] text-[12px] font-medium robotoText text-[#9F1FFA]">Careers</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="lg:text-[64px] text-[32px] robotoText font-semibold leading-tight text-[#1B1B1B] mb-4">
            Join the Team That Thinks<br className="hidden lg:block" />
            Beyond Design
          </h1>
          <p className="lg:text-[20px] text-[12px] lg:px-0 px-6 robotoText text-[#615F5F] max-w-[976px] mx-auto leading-relaxed">
            Work with people who turn insights into
            <span className="">meaningful brand experiences</span> — blending strategy, creativity, and user understanding to build solutions that truly{' '}
            <span className="">connect with audiences and drive measurable results.</span>
          </p>
        </div>

        {/* Form Section */}
        <div className="flex justify-center">
          <CareerForm />
        </div>
      </div>
    </div>
  )
}
