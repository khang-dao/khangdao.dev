import Link from "next/link";

export default function NavMenu({ toggleMenu, isMenuVisible }) {
  return (
    <nav
      className={`bg-blue-secondary flex h-screen w-screen flex-col items-center justify-center gap-10 font-spartan text-4xl font-bold text-white ${isMenuVisible ? "animate-slideDown" : "hidden"}`}
    >
      <Link href="/#projects" onClick={toggleMenu}>
        Projects
      </Link>
      <Link href="/#about" onClick={toggleMenu}>
        About Me
      </Link>
      <Link href="/#contact" onClick={toggleMenu}>
        Contact
      </Link>
    </nav>
  );
}