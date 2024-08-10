import Link from "next/link";

export default function NavMenu() {
  return (
    <nav className="bg-blue-secondary font-spartan text-4xl font-bold flex h-screen w-[65vw] flex-col items-center justify-center gap-10 border-8 border-purple-500 text-white">
      <Link href="/#projects">Projects</Link>
      <Link href="/#about">About Me</Link>
      <Link href="/#contact">Contact</Link>
    </nav>
  );
}
