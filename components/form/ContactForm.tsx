"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import FormItem from "@components/form/FormItem";

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className }: ContactFormProps): JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_t369gbv", // Replace with your EmailJS service ID
        "template_vqpoxkw", // Replace with your EmailJS template ID
        formData,
        "NXpGL2C8tO8shFYfd" // Replace with your EmailJS user ID
      );
      setStatus("Message sent successfully!");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <form className={`${className} flex flex-col gap-3`} onSubmit={handleSubmit}>
      <FormItem
        className="grow-0"
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
      >
        name
      </FormItem>
      <FormItem
        className="grow-0"
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      >
        email
      </FormItem>
      <FormItem
        className="grow"
        id="message"
        name="message"
        type="textarea"
        value={formData.message}
        onChange={handleChange}
      >
        message
      </FormItem>
      <button type="submit" className="rounded-md bg-blue-primary p-2 font-spartan text-white">
        SEND
      </button>
      {status && <p className="text-sm text-center mt-2">{status}</p>}
    </form>
  );
}
