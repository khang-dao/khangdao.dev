"use client";

import NavMenu from "@components/NavMenu";
import { useState } from "react";
import { GiHamburgerMenu as HamburgerMenuIcon } from "react-icons/gi";

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function toggleMenu() {
    setIsMenuVisible((prev) => !prev);
    console.log(isMenuVisible)
  }

  return (
    <header className="z-10 flex flex-1 items-start justify-between">
      {isMenuVisible && <NavMenu toggleMenu={toggleMenu} isMenuVisible={isMenuVisible}/>}
      <HamburgerMenuIcon
        className="fixed ml-10 mt-10 cursor-pointer"
        color={isMenuVisible ? "white" : "#469AFF"}
        size={25}
        onClick={toggleMenu}
      />
    </header>
  );
}
