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


          <p className="font-spartan text-2xl font-light">
            A versatile <span className="text-[#3892FF]">developer</span> with a passion for creation, automation, and
            cloud technologies ☁️
          </p>
        </div>
        <div className="relative h-64 w-64">
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

      <DownArrowIcon className="mb-8 animate-bob" color="#469AFF" size={25} />
    </section>
  );
}
