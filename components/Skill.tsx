"use client";
import { motion } from "framer-motion";

type SkillProps = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft = true }: SkillProps) => {
  return (
    <div className="relative flex group cursor-pointer">
    <motion.img
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0,
      }}
      whileInView={{
        x:0,
        opacity: 1,
      }}
      transition={{ duration: 1 }}
      src="computer.jpg"
      className="w-24 h-24 rounded-full xl:w-32 xl:h-32 border border-gray-500 object-cover "
    /></div>
  );
};

export default Skill;
