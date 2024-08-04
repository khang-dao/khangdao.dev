import ContactForm from "../../components/form/ContactForm";
import PageTitle from "@components/PageTitle";
import FormItem from "@components/form/FormItem";
import { CiLinkedin as LinkedinIcon } from "@icons/ci";
import { FaGithub as GithubIcon } from "@icons/fa";
import { TiDocumentText as DocumentIcon } from "@icons/ti";

export default function ContactSection() {
  return (
    <section id="contact" className="my-16 w-[65vw]">
      <div className="flex gap-24">
        <div className="basis-2/5 flex flex-1 flex-col gap-10">
          <PageTitle>Let&#39;s Connect 💌</PageTitle>
          <div className="flex gap-16">
            <p className="font-lekton font-bold">
              I&#39;m always open to connecting and discussing innovative solutions.
              Feel free to reach out for a chat!
            </p>
          </div>
          <div className="flex gap-10">
            <LinkedinIcon size={30} />
            <DocumentIcon size={30} />
            <GithubIcon size={30} />
          </div>
        </div>
        <ContactForm className="basis-3/5 flex-1" id="name" name="name" />
      </div>
    </section>
  );
}
