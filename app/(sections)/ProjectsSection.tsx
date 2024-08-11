import PageTitle from "@components/PageTitle";

export default function ProjectsSection() {
  return (
    <section id="projects" className="my-16 w-[65vw]">
      <PageTitle>Projects 🚀</PageTitle>

      <p className="font bold font-spartan text-blue-primary">Hover to see details!</p>

      <div className="flex flex-col gap-20 lg:grid lg:grid-cols-5 lg:gap-5">
        <div className="col-span-3 flex justify-center rounded-lg bg-[#EFECFE] p-28">Project #1</div>
        <div className="col-span-2 flex justify-center rounded-lg bg-[#FDF2F0] p-28">Project #2</div>
        <div className="col-span-2 flex justify-center rounded-lg bg-[#EAFCFA] p-28">Project #3</div>
        <div className="col-span-3 flex justify-center rounded-lg bg-[#E8F3FD] p-28">Project #4</div>
      </div>
    </section>
  );
}
