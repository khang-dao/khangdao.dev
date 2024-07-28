import React from 'react';
import FormItem from '@components/form/FormItem';

interface ContactFormProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  name?: string;
  type?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  return (
    <form className={`${className} flex flex-col gap-3`}>
      <FormItem id="name" name="name" type="text">name</FormItem>
      <FormItem id="email" name="email" type="email">email</FormItem>
      <FormItem id="message" name="message" type="textarea">message</FormItem>
      <button type="submit" className="bg-[#469AFF] text-white p-2 rounded-md font-lekton">SEND MESSAGE</button>
    </form>
  );
};

export default ContactForm;
