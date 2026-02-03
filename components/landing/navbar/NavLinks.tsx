import { HoverButton } from "../../ui/Button/button";



export default function Navlinks() {
  const links = ["Services", "Our Works", "Our Process", "About Us"];

  return (
    <div className="flex w-[596px] h-[40px] items-center gap-7">
      {links.map((link) => (
        <HoverButton
          key={link}
          href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
          className="robotoText w-[124px] py-2 px-3 gap-6 text-[17px] text-[#1B1B1B]"
        >
          {link}
        </HoverButton>
      ))}
    </div>
  );
}
