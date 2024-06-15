"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Before even graduating in 2021, I started my career first as a full time software engineer.While working over the years I got opportunity to work in multiple domains
        such as Telecom, Finance, E-Commerce. I have also worked on multiple
        POCs for my business clients using multiple tech stack.I also mentor
        junior developers and get them upto speed and guide them with best
        practices of development . My core stack is Angular, React.js, Next.js,
        Node.js, and MongoDB. I am also familiar with TypeScript and Express JS.
        I am always looking to learn new technologies. I am currently looking
        for a full-time position as a Software Developer Engineer.
      </p>

      <p>
        When I'm not coding, I enjoy playing soccer, pickle ball, cricket, and Badmintion.     
        I follow F1, Soccer and cricket. I also enjoy learning new things. I am
        currently learning about stock market and upcoming business strategies.
      </p>
    </motion.section>
  );
}
