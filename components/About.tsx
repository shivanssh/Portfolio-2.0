"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:2}}
    className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto">
      <h3 className="absolute top-24 tracking-[20px] text-gray-500 uppercase text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        src="computer.jpg"
        className="mt-20 md:mb-0 h-56 w-56 rounded-full object-cover flex-shrink-0 md:rounded-lg md:w-64 md:h-95 xlg:w-[500px] xlg:h-[600px]"
      />
      <div className="py-2 px-0 md:px-10">
        <h3 className="text-2xl font-semibold">
          Here is some{" "}
          <span className="underline decoration-red-400">little</span> info
        </h3>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          dolores, error quasi laboriosam hic ea perspiciatis repellat commodi
          voluptatem ipsam ipsa iste beatae tempora fuga quisquam sint corporis
          quam sunt cupiditate delectus doloremque animi non! Eos et, mollitia
          facilis ipsa voluptas, laboriosam iure aliquid reprehenderit possimus
          ab quo earum odit rerum ratione est. Obcaecati minima magni illo! Vel,
          velit quia ad a ut possimus! Unde nihil architecto reprehenderit modi
          magnam.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
