"use client";
import { motion } from "framer-motion";

type ExperienceProps = {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  tech: string;
  description: string[];
};

const ExperienceCard = ({
  id,
  company,
  position,
  startDate,
  endDate,
  tech,
  description,
}: ExperienceProps) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center text-left space-y-2 flex-shrink-0 w-[400px] md:w-[500px] lg:w-[700px] snap-center 
    bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity overflow-hidden delay-100
    "
    >
      <motion.img
        src="imgs/company.png"
        alt="no alt"
        className="w-32 h-32 rounded-full flex-shrink-0 object-cover object-center xl:h-[200px] xl:w-[200px]"
      />
      <div>
        <h4 className="text-3xl">{position}</h4>
        <p className="uppercase font-bold text-xl ">{company}</p>
        <p className="text-sm font-semibold">Tech: {tech}</p>
        <p className="text-sm bg-muted">
          Start - {startDate}, End - {endDate}
        </p>
        <ul className="list-disc space-y-2 ml-5 text-lg">
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
