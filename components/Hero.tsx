/* eslint-disable @next/next/no-img-element */
"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Hi, the name's Shivansh Singh",
      "<Hate coffee but love Coding/>",
      "JavaScript is everywhere like me :)",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col h-screen justify-center items-center text-center overflow-hidden space-y-8">
      <BackgroundCircle />
      <img
        src="computer.jpg"
        alt="noproviderer noreferer"
        className="relative h-32 w-32 mx-auto rounded-full object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] ">
          Software Engineer
        </h2>
        <h1>
          <span className="text-2xl lg:text-5xl  font-semibold px-10 xsm:text-sm">
            {text}
          </span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
