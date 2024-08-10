'use client';

import NavMenu from "@components/NavMenu";
import { useState } from "react";
import { GiHamburgerMenu as HamburgerMenuIcon } from "react-icons/gi";

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function toggleMenu() {
    setIsMenuVisible(prev => !prev)
    console.log(isMenuVisible)
  }

  return (
    <header className="flex flex-1 items-start justify-between">
      {isMenuVisible && <NavMenu />}
      <HamburgerMenuIcon className="fixed ml-10 mt-10 cursor-pointer" color="#469AFF" size={25} onClick={toggleMenu} />
    </header>
  );
}
