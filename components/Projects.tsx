"use client";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [1, 2, 3, 4, 5];
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
      className="relative h-[90%] flex flex-col items-center justify-center md:flex-row text-left overflow-hidden z-0 mx-auto max-w-full
      scrollbar scrollbar-track-grey-500 scrollbar-thumb-[#F7AB0A]/40"
    >
      <h3 className="absolute top-24 text-2xl text-gray-500 tracking-[20px] uppercase">
        Projects
      </h3>
      <div className="overflow-x-scroll top-20 flex overflow-y-hidden relative w-full snap-x snap-mandatory z-20">
        {projects.map((project, idx) => {
          return (
            <div
              key={idx}
              className="w-screen h-screen px:22 md:px-44 flex-shrink-0 flex flex-col items-center justify-center space-y-5 snap-center"
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
                src="portfolio.jpg"
                alt=""
              />
              <div className="flex flex-col max-w-6xl text-2xl text-center ">
                <h4 className="underline decoration-gray-400 font-semibold">
                  Case study {idx + 1} of {projects.length}
                  <span className="uppercase pl-1">- Portfolio</span>
                </h4>

                <p className="text-sm text-center md:text-left px-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis blanditiis, tenetur perspiciatis libero earum ex
                  vero. Exercitationem explicabo delectus quae repudiandae
                  voluptas iure consequatur at. Delectus enim provident quam et
                  quaerat beatae voluptas iure recusandae saepe asperiores
                  eligendi doloribus, atque iste corporis! Reprehenderit facere
                  consequuntur eligendi veritatis quam, aliquid, a nulla ratione
                  maxime accusamus laboriosam explicabo vel saepe dolor ipsum
                  distinctio, eveniet fugiat sapiente in pariatur rerum et
                  provident autem! Omnis veniam quos consectetur eum?
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
