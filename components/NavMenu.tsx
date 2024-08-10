import Link from "next/link";

export default function NavMenu() {
  return (
    <nav className="flex h-screen w-[65vw] flex-col items-center justify-center border-purple-500 border-8 gap-10 bg-blue-dark-accent">
      <Link href="/#projects">Projects</Link>
      <Link href="/#about">About Me</Link>
      <Link href="/#contact">Contact</Link>
    </nav>
  );
}
