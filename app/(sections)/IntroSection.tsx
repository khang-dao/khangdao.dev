import PageTitle from "@components/PageTitle";
import { FaAngleDown as DownArrowIcon } from "@icons/fa";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="flex h-screen w-[65vw] flex-col items-center lg:justify-between">
      <div className="flex w-full grow flex-col items-center justify-center gap-28 lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center lg:items-start lg:w-3/5">
          <div className="relative">
            <div className="max-w-3xl">
              <PageTitle className="text-4xl lg:text-5xl">Hi, I&#39;m Khang</PageTitle>
            </div>
          </div>

          <p className="text-center lg:text-justify font-spartan text-2xl font-light">
            A versatile <span className="text-blue-secondary">developer</span> with a passion for creation, automation,
            and cloud technologies ☁️
          </p>
        </div>
        <div className="relative h-48 w-48 md:h-80 md:w-80 lg:h-64 lg:w-64">
          <Image
            src="images/blue_dragon.jpg"
            alt="Blue Dragon"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-full"
            quality={100}
          />
        </div>
      </div>

      <DownArrowIcon className="mb-28 lg:mb-14 animate-bob" color="#469AFF" size={25} />
    </section>
  );
}
