import useScrollDisable from "hooks/useScrollDisable";
import Link from "next/link";

export default function NavMenu({ toggleMenu, isMenuVisible }) {
  useScrollDisable(isMenuVisible);

  return (
    <nav
      className={`flex h-screen w-screen flex-col items-center justify-center gap-10 bg-blue-secondary font-spartan text-4xl font-bold text-white ${isMenuVisible ? "animate-slide-down" : "animate-slide-up opacity-0"} transition-opacity duration-300 ease-in-out`}
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
