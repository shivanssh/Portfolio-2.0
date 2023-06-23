"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { socialMedia } from "../app/data";

const Header = () => {
  return (
    <header
      className="sticky top-0 p-3 flex items-start justify-between max-w-7xl mx-auto 
    z-20 xl:items-center"
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {socialMedia &&
          socialMedia.map(({ url, id }) => {
            return (
              <SocialIcon
                url={url}
                bgColor="transparent"
                fgColor="gray"
                key={id}
                target="_blank"
              />
            );
          })}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center justify-center"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          url="#contact"
          bgColor="transparent"
          fgColor="gray"
        />
        <Link
          href="#contact"
          className="uppercase hidden md:inline-flex text-sm text-gray-500 cursor-pointer"
        >
          get in touch
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
