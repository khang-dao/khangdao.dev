import NavBar from "@components/NavBar";
import { GiHamburgerMenu as HamburgerMenuIcon } from "react-icons/gi";

export default function Header() {
  return (
    <header className="flex flex-1 items-start justify-between">
      <HamburgerMenuIcon
        className="fixed ml-10 mt-10 cursor-pointer"
        color="#469AFF"
        size={25}
      />
      {/* <div className="flex-grow flex justify-center">
        <NavBar />
      </div> */}
    </header>
  );
}
