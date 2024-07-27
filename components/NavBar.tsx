import { BiSolidHome as HomeIcon} from "react-icons/bi";
import { IoMdMoon as MoonIcon} from "react-icons/io";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav className='w-9/12 flex border justify-between items-center border-emerald-500'>
      <HomeIcon className="border-emerald-700 border" />
      <Link className="border-emerald-700 border" href="/">Home</Link>
      <Link className="border-emerald-700 border" href="/projects">Projects</Link>
      <Link className="border-emerald-700 border" href="/about">About</Link>
      <Link className="border-emerald-700 border" href="/toolkit">Toolkit</Link>
      <Link className="border-emerald-700 border" href="/contact">Contact</Link>
      <MoonIcon className="border-emerald-700 border" />
    </nav>
  );
};

export default NavBar;
