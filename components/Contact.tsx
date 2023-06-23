"use client";
import { useState } from "react";
import { FaPhoneAlt, FaAddressCard } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { format } from "path";

type FormInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const Contact = () => {
  const initialFormValue: FormInput = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formValue, setFormValue] = useState<FormInput>(initialFormValue);

  const handleChange = (e: any) => {
    setFormValue((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    window.location.href = `mailto:test@gmail.com?subject=${formValue.subject}&body=Hi, my name is ${formValue.name} ${formValue.message} (${formValue.email})`;
    setFormValue(initialFormValue);
  };

  return (
    <div className="h-screen relative flex flex-col mx-auto items-center justify-center max-w-full md:flex-row text-left z-0">
      <h3 className="top-20 absolute text-gray-500 tracking-[20px] text-2xl uppercase">
        Contact
      </h3>

      <div className="flex flex-col space-y-5 justify-evenly items-center md:text-left mt-[100px]">
        <h4 className="text-xl font-semibold text-center md:text-3xl">
          I have got just what you need.{" "}
          <span className="underline decoration-red-500">Lets Talk.</span>
        </h4>
        <div className="space-y-5">
          <div className="flex items-center justify-center space-x-2">
            <FaPhoneAlt className="w-7 h-7 text-[#F7AB0A] animate-pulse" />
            <h4 className="text-2xl">+91 1234567890</h4>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <FaAddressCard className="w-7 h-7 text-[#F7AB0A] animate-pulse" />
            <h4 className="text-2xl">test address</h4>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <BiLogoGmail className="w-7 h-7 text-[#F7AB0A] animate-pulse" />
            <h4 className="text-2xl">test@gmail.com</h4>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2 mx-auto items-center justify-center">
            <div className="flex space-x-2 w-[80%] md:w-full">
              <input
                type="text"
                className="contactInput"
                placeholder="Name"
                id="name"
                name="name"
                value={formValue.name}
                onChange={handleChange}
              />
              <input
                type="email"
                className="contactInput"
                placeholder="Email"
                id="email"
                name="email"
                value={formValue.email}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              className="contactInput"
              placeholder="Subject"
              id="subject"
              name="subject"
              value={formValue.subject}
              onChange={handleChange}
            />
            <textarea
              className="contactInput"
              placeholder="Message"
              id="message"
              name="message"
              value={formValue.message}
              onChange={handleChange}
            />
            <button
              disabled={!formValue.email}
              type="submit"
              className="bg-[#F7AB0B] w-[80%] p-2 rounded font-semibold text-black disabled:cursor-not-allowed md:w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
