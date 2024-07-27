import { GiHamburgerMenu as HamburgerMenuIcon } from "react-icons/gi";

export default function ProjectsPage() {
  return (
    <>
      <header className="px-4">
        <HamburgerMenuIcon className="mt-3 cursor-pointer" color="#469AFF" size={25} />
      </header>

      <div className="grid gap-5 grid-cols-5 mx-28">   
        <div className="col-span-3 bg-[#EFECFE] rounded-lg p-28 flex justify-center">Project #1</div>
        <div className="col-span-2 bg-[#FDF2F0] rounded-lg p-28 flex justify-center">Project #2</div>
        <div className="col-span-2 bg-[#EAFCFA] rounded-lg p-28 flex justify-center">Project #3</div>
        <div className="col-span-3 bg-[#E8F3FD] rounded-lg p-28 flex justify-center">Project #4</div>
      </div>
    </>
  );
}
