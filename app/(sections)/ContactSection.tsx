import ContactForm from "../../components/form/ContactForm";
import PageTitle from "@components/PageTitle";
import { CiLinkedin as LinkedinIcon } from "@icons/ci";
import { FaGithub as GithubIcon } from "@icons/fa";
import { TiDocumentText as DocumentIcon } from "@icons/ti";

export default function ContactSection() {
  return (
    <section id="contact" className="my-16 w-[65vw]">
      <div className="flex gap-24">
        <div className="flex flex-1 basis-2/5 flex-col gap-10">
          <div className="max-w-3xl ">
            <PageTitle>Let&#39;s Connect 📱</PageTitle>
          </div>
          <div className="flex gap-16">
            <p className="font-spartan font-bold">
              I&#39;m always open to connecting and discussing innovative solutions. Feel free to reach out for a chat!
            </p>
          </div>
          <div className="flex gap-10">
            <LinkedinIcon size={30} />
            <DocumentIcon size={30} />
            <GithubIcon size={30} />
          </div>
        </div>
        <ContactForm className="flex-1 basis-3/5" />
      </div>
    </section>
  );
}
