import { GiHamburgerMenu as HamburgerMenuIcon } from "react-icons/gi";
import PageTitle from "@components/PageTitle";

export default function ProjectsPage() {
  return (
    <>

      <header className="px-4">
        <HamburgerMenuIcon className="mt-3 cursor-pointer" color="#469AFF" size={25} />
      </header>


      <PageTitle>About Me 🐛</PageTitle>
      
      <div className="flex mx-20 gap-16">
        <div className="flex flex-col gap-10">
          <p className="font-lekton">
            Hello again! Thanks for scrolling this far!! 🤗 I graduated from Monash University
            with a double bachelor of computer science 🖥️ and finance 💸. I've also completed
            a full-stack bootcamp with a great open-source community (you might've heard of it)
            The Odin Project.
          </p>
          <p className="font-lekton font-bold">
            Other than coding, I spend most of my free time playing League of Legends (add me!)
            or any other video games. I've also been trying to read more so feel free to reach
            out to me with any book recommendations!
          </p>
        </div>
        <div className="bg-[#E8F3FD] rounded-lg p-28 flex justify-center">Insert Picture</div>
      </div>

    </>
  );
}
