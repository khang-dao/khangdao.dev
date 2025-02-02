import PageTitle from "@components/PageTitle";

export default function AboutSection() {
  return (
    <section id="about" className="my-16 w-[65vw]">
      <PageTitle>About Me 📚</PageTitle>

      <div className="w flex justify-center gap-16">
        <div className="flex flex-col gap-7">
          <p className="text-justify font-spartan text-lg font-bold">
            Hey! Thanks for scrolling this far :) I graduated from Monash University with a double bachelor of computer
            science 🖥️ and finance 💸. I&#39;ve also completed a full-stack bootcamp with a great open-source community
            (you might&#39;ve heard of it) The Odin Project.
          </p>
          <p className="text-justify font-spartan text-lg font-bold">
            Other than coding and tech, I&#39;m also interested in the world of finance, continuously trying to improve
            my financial literacy with a sprinkle of accounting along the way.
          </p>
          <p className="text-justify font-spartan text-lg font-bold">
            In my down time, I am trying to pick up some relaxing hobbies. Currently, I&#39;m into books and baking.
            Although I do want to pick up an artsy/crafty hobby. Feel free to reach out to me if you have any
            suggestions!
          </p>
        </div>
        {/* <div className="flex justify-center rounded-lg bg-blue-secondary p-28">Insert Picture</div> */}
      </div>
    </section>
  );
}
