import PageTitle from "@components/PageTitle";
import { FaAngleDown as DownArrowIcon } from "@icons/fa";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="flex h-screen w-[65vw] flex-col items-center justify-between">
      <div className="flex w-full grow items-center justify-between">
        <div className="flex w-3/5 flex-col">
          <div className="relative">
            <div className="max-w-3xl">
              <PageTitle className="text-5xl">Hi, I&#39;m Khang</PageTitle>
            </div>
          </div>

          <p className="text-justify font-spartan text-2xl font-light">
            A versatile <span className="text-blue-secondary">developer</span> with a passion for creation, automation,
            and cloud technologies ☁️
          </p>
        </div>
        <div className="relative h-32 w-32 sm:h-48 sm:w-48 lg:h-64 lg:w-64">
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

      <DownArrowIcon className="mb-14 animate-bob" color="#469AFF" size={25} />
    </section>
  );
}
