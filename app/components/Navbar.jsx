import Image from "next/image";
import Link from "next/link";
import { headerLogo } from "@/public/assets/images";
import { hamburger } from "@/public/assets/icons";
import { navLinks } from "@/constants";
const Navbar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container ">
        <Link href={"/"}>
          {/* <Image src={headerLogo} alt="Logo" width={130} height={29}/> */}
          <span className="text-primary font-bold">LUGG BAGUER LLP</span>
        </Link>
        <ul className="flex-1 flex items-center justify-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <Link href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray" >{item.label}</Link>
            ))}
        </ul>
        <div className="hidden max-lg:block">
          <Image src={hamburger} alt="hamburger icon" width={25} height={25}/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;