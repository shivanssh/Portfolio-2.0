"use client";
import { motion } from "framer-motion";

type SkillProps = {
  id: string;
  logo: string;
  name: string;
  proficiency: number;
  directionLeft?: boolean;
};

const Skill = ({
  id,
  logo,
  name,
  proficiency,
  directionLeft = true,
}: SkillProps) => {
  return (
    <div className="relative flex group cursor-pointer">
      <motion.img
        initial={{
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 1 }}
        src={logo}
        className="h-16 w-16 md:h-24 md:w-24 lg:w-28 lg:h-28 xl:h-32 xl:w-32 rounded-full border border-gray-500 object-cover
         filter group-hover:grayscale transition duration-300 ease-in-out bg-[#F7AB0A]/10"
      />
      <div
        className="absolute group-hover:opacity-80 bg-white opacity-0 h-16 w-16 md:h-24 md:w-24 
      lg:w-28 lg:h-28 xl:h-32 xl:w-32 rounded-full transition duration-300 ease-in-out"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {proficiency}% <span className="text-sm">{name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
