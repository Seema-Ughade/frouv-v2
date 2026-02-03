import Image from "next/image";
import logo from "@/public/logo.png";

const Logo = () => {
  return (
<div className="    relative
    w-[156px] h-[24px]
    top-0 left-0
    lg:w-[200px] lg:h-[33px]
    lg:top-0 lg:right-0
">
  <Image
    src={logo}
    alt="Logo"
    fill       
    className="object-cover"  
  />
</div>
  );
};

export default Logo;
