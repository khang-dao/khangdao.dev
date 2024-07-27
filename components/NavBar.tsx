import { BiSolidHome as HomeIcon} from "react-icons/bi";
import { IoMdMoon as MoonIcon} from "react-icons/io";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav className='flex p-4 rounded-b-3xl gap-10 border justify-between items-center bg-[#BCDAFF]'>
      <HomeIcon />
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/about">About</Link>
      <Link href="/toolkit">Toolkit</Link>
      <Link href="/contact">Contact</Link>
      <MoonIcon />
    </nav>
  );
};

export default NavBar;
