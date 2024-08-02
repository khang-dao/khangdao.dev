import Image from "next/image";
import { FaAngleDown as DownArrowIcon } from "react-icons/fa";

export default function IntroSection() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-between">
      <div className="flex grow items-center justify-between w-11/12 max-w-5xl mx-auto">
        <div className="flex w-6/12 flex-col">
          <div className="relative inline-block">
            <div className="text-box absolute inset-0 left-2 top-4 z-0 rounded-md bg-[#cfe6ff] blur-[2px]"></div>
            <span className="relative z-10 font-lekton text-4xl font-bold">
              Hello! I'm Khang.👋🏻
            </span>
          </div>

          <p className="font-spartan text-base font-light">
            A versatile <span className="text-[#3892FF]">developer</span> with a
            passion for creation, automation, and cloud technologies ☁️
          </p>
        </div>
        <div className="relative w-64 h-64">
          <Image
            src="/images/blue_dragon.jpg"
            alt="Blue Dragon"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            quality={100}
          />
        </div>
      </div>

      <DownArrowIcon className="mb-8 animate-bob" color="#469AFF" size={25} />
    </section>
  );
}
