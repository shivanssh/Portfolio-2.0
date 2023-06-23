"use client";
import { motion } from "framer-motion";
import Skill from "./Skill";

const Skills = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="relative h-screen flex flex-col items-center text-center max-w-7xl mx-auto justify-center md:flex-row"
    >
      <h3 className="absolute text-xl tracking-[20px] uppercase top-24 text-gray-500">
        Skills
      </h3>
      <h3 className="absolute text-xl tracking-[3px] uppercase top-36 text-gray-500">
        Hover over the icon to know the proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
};

export default Skills;
