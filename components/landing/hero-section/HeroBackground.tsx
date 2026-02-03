export default function HeroBackground() {
  return (
    <>
      {/* Pink gradient blob background */}
      <div className=" absolute pointer-events-none w-[101.57px] h-[101.57px] top-[18px] left-[156px] blur-[12px] opacity-70  lg:block lg:w-[355px] lg:h-[355px] lg:top-[80px] lg:left-[586px] lg:blur-[30px] "
        style={{
          background: "linear-gradient(180deg, #FDBFE2 0%, #FDBFE2 100%)",
          borderRadius: "70%",
        }}
      />

      {/* Peach/orange gradient blob on left */}
      <div className=" absolute pointer-events-none w-[80px] h-[80px] top-[101px] left-[-34px] blur-[12.75px] opacity-80  lg:block lg:w-[254px] lg:h-[254px] lg:top-[350px] lg:left-[-97px] lg:blur-[20px] " style={{
          background: "linear-gradient(180deg, #FFCDBF 0%, #F38464 100%)",
          borderRadius: "50%",
        }}
      />

      {/* Blue / Purple gradient blob – top right */}
      <div
        className=" absolute pointer-events-none w-[80px] h-[80px] top-[-30px] left-[355px] blur-[12.75px] opacity-100  lg:block lg:w-[230px] lg:h-[220px] lg:top-[-90px] lg:left-auto lg:right-[-50px] lg:blur-[20px] "
        style={{
          background: "linear-gradient(180deg, #DAE6FF 0%, #CE88FF 100%)",
          borderRadius: "50%",
        }}
      />
    </>
  );
}
