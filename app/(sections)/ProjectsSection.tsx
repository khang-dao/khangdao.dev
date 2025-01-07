import PageTitle from "@components/PageTitle";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section id="projects" className="my-16 w-[65vw]">
      <PageTitle>Projects 🚀</PageTitle>

      <p className="font-bold font-spartan text-blue-primary">Hover to see details!</p>

      <div className="flex flex-col gap-20 lg:grid lg:grid-cols-5 lg:gap-5">
        <div className="col-span-3 rounded-lg">
          <div className="relative h-48 md:h-64 lg:h-full w-full rounded-lg overflow-hidden">
            <Image
              src="images/loify-project.png"
              alt="Blue Dragon"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </div>
        <div className="col-span-2 flex justify-center rounded-lg bg-[#FDF2F0] p-28">Project #2</div>
        <div className="col-span-2 flex justify-center rounded-lg bg-[#EAFCFA] p-28">Project #3</div>
        <div className="col-span-3 flex justify-center rounded-lg bg-[#E8F3FD] p-28">Project #4</div>
      </div>
    </section>
  );
}
