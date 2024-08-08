import Link from "next/link";
import { BiSolidHome as HomeIcon } from "react-icons/bi";
import { IoMdMoon as MoonIcon } from "react-icons/io";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between gap-10 rounded-b-3xl border bg-blue-dark-accent p-4">
      <HomeIcon />
      <Link href="/">Home</Link>
      <Link href="/#projects">Projects</Link>
      <Link href="/#about">About</Link>
      <Link href="/#contact">Contact</Link>
      <MoonIcon />
    </nav>
  );
}
