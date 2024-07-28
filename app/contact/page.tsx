import { GiHamburgerMenu as HamburgerMenuIcon } from "react-icons/gi";
import PageTitle from "@components/PageTitle";
import FormItem from "@components/form/FormItem";
import { FaGithub as GithubIcon } from "@icons/fa";
import { TiDocumentText as DocumentIcon} from "@icons/ti";
import { CiLinkedin as LinkedinIcon} from "@icons/ci";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <>

      <header className="px-4">
        <HamburgerMenuIcon className="mt-3 cursor-pointer" color="#469AFF" size={25} />
      </header>


      <div className='bg-[#F7FBFF] p-24 flex'>
        <div className="flex flex-col gap-10 flex-1">
          <PageTitle>Let's Connect 💌</PageTitle>
          <div className="flex gap-16">
            <p className="font-lekton font-bold">
            I'm always open to connecting and discussing innovative solutions.
            Feel free to reach out for a chat!
            </p>
          </div>
          <div className="flex gap-10">
            <LinkedinIcon size={30}/>
            <DocumentIcon size={30}/>
            <GithubIcon size={30}/>
          </div>
        </div>

        <ContactForm className="flex-1" id="name" name="name">name</ContactForm>
      </div>

      <footer className="flex justify-center bg-[#79B6FF] py-4">
        <p className="text-white font-lekton">Developed and designed by Khang Dao 💙</p>
      </footer>

    </>
  );
}
