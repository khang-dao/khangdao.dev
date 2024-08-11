import ContactForm from "../../components/form/ContactForm";
import PageTitle from "@components/PageTitle";
import { CiLinkedin as LinkedinIcon } from "@icons/ci";
import { FaGithub as GithubIcon } from "@icons/fa";
import { TiDocumentText as DocumentIcon } from "@icons/ti";

export default function ContactSection() {
  return (
    <section id="contact" className="my-16 flex w-[65vw] gap-28">
      <div className="flex flex-1 basis-2/5 flex-col gap-10">
        <div className="max-w-3xl">
          <PageTitle>Let&#39;s Connect 📱</PageTitle>
        </div>
        <div className="flex">
          <p className="text-justify font-spartan text-lg font-bold">
            I&#39;m always open to connecting and discussing innovative solutions. Feel free to reach out for a virtual
            chat! (or let&#39;s grab coffee & bagels ☕️🥯 if you&#39;re in Melbourne and keen!)
          </p>
        </div>
        <div className="flex justify-center gap-20">
          <LinkedinIcon size={30} color="#469AFF" />
          <DocumentIcon size={30} color="#469AFF" />
          <GithubIcon size={30} color="#469AFF" />
        </div>
      </div>
      <ContactForm className="flex-1 basis-3/5" />
    </section>
  );
}
