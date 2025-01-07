import PageTitle from "@components/PageTitle";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section id="projects" className="my-16 w-[65vw]">
      <PageTitle>Projects 🚀</PageTitle>

      <p className="font-spartan font-bold text-blue-primary">Hover to see details!</p>

      <div className="flex flex-col gap-20 lg:grid lg:grid-cols-5 lg:gap-5">
        <a
          href="https://loify.me"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative col-span-3 block rounded-lg bg-[#FDF2F0]"
        >
          <div className="relative h-48 w-full overflow-hidden rounded-lg md:h-64 lg:h-full">
            <Image src="images/loify-project.png" alt="Blue Dragon" layout="fill" objectFit="cover" quality={100} />
            <div className="absolute inset-0 bg-black bg-opacity-0 transition duration-500 ease-in-out group-hover:bg-opacity-25"></div>
          </div>
        </a>
        <div className="col-span-2 flex items-center justify-center rounded-lg bg-[#FDF2F0] p-28">Project #2</div>
        <div className="col-span-2 flex items-center justify-center rounded-lg bg-[#EAFCFA] p-28">Project #3</div>
        <div className="col-span-3 flex items-center justify-center rounded-lg bg-[#E8F3FD] p-28">Project #4</div>
      </div>
    </section>
  );
}
