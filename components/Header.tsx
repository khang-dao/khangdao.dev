import { GiHamburgerMenu as HamburgerMenuIcon } from "react-icons/gi";
import NavMenu from "@components/NavMenu";

export default function Header() {
  return (
    <header className="flex flex-1 items-start justify-between">
      <NavMenu />
      <HamburgerMenuIcon className="fixed ml-10 mt-10 cursor-pointer" color="#469AFF" size={25} />
    </header>
  );
}
