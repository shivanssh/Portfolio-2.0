"use client";
import { motion } from "framer-motion";

const ExperienceCard = () => {
  return (
    <article
      className="flex flex-col rounded-lg items-center text-left space-y-7 flex-shrink-0 w-[400px] md:w-[500px] lg:w-[700px] snap-center 
    bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity overflow-hidden delay-100
    "
    >
      <motion.img
        src="computer.jpg"
        alt="noreferer noproviderer"
        className="w-32 h-32 rounded-full flex-shrink-0 object-cover object-center xl:h-[200px] xl:w-[200px]"
      />
      <div>
        <h4 className="text-3xl">Software Engineer</h4>
        <p className="uppercase font-bold text-xl ">SomeWhere</p>
        <p className="text-sm font-semibold">Tech: MERN Stack</p>
        <p className="text-sm bg-muted">Start - Jan 2021, End - Current</p>
        <ul className="list-disc space-y-2 ml-5 text-lg">
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
