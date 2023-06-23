"use client";
import { experience } from "@/app/data";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

const WorkExperience = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex flex-col items-center text-center overflow-hidden justify-center md:flex-row max-w-full px-10 mx-auto"
    >
      <h3 className="absolute top-20 flex uppercase text-gray-500 text-2xl tracking-[20px]">
        Experience
      </h3>
      <div
        className="mt-40 w-full flex space-x-5 snap-x snap-mandatory overflow-x-scroll p-10 scrollbar-track-grey-500
       scrollbar-thin scrollbar-thumb-[#F7AB0A]/40"
      >
        {experience?.map((item) => (
          <ExperienceCard key={item.id} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
