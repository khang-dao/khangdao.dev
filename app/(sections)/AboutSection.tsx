import PageTitle from "@components/PageTitle";

export default function AboutSection() {
  return (
    <section id="about" className="my-16 w-[65vw]">
      <PageTitle>About Me 🐛</PageTitle>

      <div className="w flex justify-center gap-16">
        <div className="flex flex-col gap-7">
          <p className="font-lekton">
            Hey! Thanks for scrolling this far :) I graduated from
            Monash University with a double bachelor of computer science 🖥️ and
            finance 💸. I've also completed a full-stack bootcamp with a great
            open-source community (you might've heard of it) The Odin Project.
          </p>
          <p className="font-lekton font-bold">
            Other than coding and tech, I'm also interested in the world of
            finance, continuously trying to improve my financial literacy with a
            sprinkle of accounting along the way.
          </p>
          <p className="font-lekton font-bold">
            In my down time, I am trying to pick up some relaxing hobbies.
            Currently, I'm into books and baking. Although I do want to pick up
            an artsy/crafty hobby. Feel free to reach out to me if you have any
            suggestions!
          </p>
        </div>
        <div className="flex justify-center rounded-lg bg-[#E8F3FD] p-28">
          Insert Picture
        </div>
      </div>
    </section>
  );
}
