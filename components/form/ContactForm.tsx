import FormItem from "@components/form/FormItem";

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className }: ContactFormProps): JSX.Element {
  return (
    <form className={`${className} flex flex-col gap-3`}>
      <FormItem className="grow-0" id="name" name="name" type="text">
        name
      </FormItem>
      <FormItem className="grow-0" id="email" name="email" type="email">
        email
      </FormItem>
      <FormItem className="grow" id="message" name="message" type="textarea">
        message
      </FormItem>
      <button type="submit" className="rounded-md bg-[#469AFF] p-2 font-spartan text-white">
        SEND
      </button>
    </form>
  );
}
