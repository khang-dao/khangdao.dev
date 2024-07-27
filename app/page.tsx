import NavBar from "../components/NavBar";
import { GiHamburgerMenu as HamburgerMenuIcon } from "react-icons/gi";
import { FaCircle as CircleIcon, FaAngleDown as DownArrowIcon } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center min-h-screen">   
      <header className="flex flex-1 items-start justify-between w-full px-4">
        <HamburgerMenuIcon className="mt-3 cursor-pointer" color="#469AFF" size={25} />
        <div className="flex-grow flex justify-center">
          <NavBar />
        </div>
      </header>

      <div className="flex flex-1 justify-between items-center mx-20">
        <div className="flex flex-col w-6/12">
          <div className="relative inline-block">
            <div className="absolute inset-0 top-4 left-2 bg-[#E8F3FF] z-0 text-box rounded-md	blur-[2px]"></div>
            <span className='relative z-10 text-4xl font-lekton font-bold'>Hello! I'm Khang.👋🏻</span>
          </div>

          <p className='text-base font-spartan font-light'>
            A versatile <span className="text-[#3892FF]">developer</span> with a passion for creation, automation, and cloud technologies ☁️
          </p>
        </div>
        <CircleIcon color="#6AAEFF" size={150} />
      </div>

      <DownArrowIcon className="flex-auto animate-bob" color="#469AFF" />
    </main>
  );
}
