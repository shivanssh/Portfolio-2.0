"use client";
import { motion } from "framer-motion";
import { projects } from "@/app/data";

const Projects = () => {
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
      className="relative h-screen flex flex-col items-center justify-center md:flex-row text-left overflow-hidden z-0 mx-auto
      scrollbar scrollbar-track-grey-500 scrollbar-thumb-[#F7AB0A]/40"
    >
      <h3 className="absolute top-20 text-2xl text-gray-500 tracking-[20px] uppercase">
        Projects
      </h3>
      <div className="overflow-x-scroll flex flex-row top-20 overflow-y-hidden relative w-full snap-x snap-mandatory z-20">
        {projects.map((project, idx) => {
          return (
            <div
              key={project.id}
              className="w-screen h-screen px:22 md:px-44 flex-shrink-0 flex flex-col items-center justify-center space-y-2 snap-center"
            >
              <motion.img
                initial={{
                  y: -120,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.5,
                }}
                viewport={{ once: true }}
                src={project.imgUrl}
                alt="no alt"
                className="h-[150px] w-[300px] rounded-sm md:h-[250px] md:w-[500px] xl:h-[300px] xl:w-[600px] "
              />
              <div className="flex flex-col max-w-6xl text-2xl text-center ">
                <h4 className="underline decoration-gray-400 font-semibold">
                  Case study {idx + 1} of {projects.length}
                  <span className="uppercase pl-1">- {project.name}</span>
                </h4>

                <p className="text-sm text-center md:text-left px-10">
                  {project.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <h4 className="p-2 animate-pulse">Slide</h4>
      <div className="absolute top-[30%] w-full h-[500px] left-0 bg-[#F7AB0B]/10 -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
