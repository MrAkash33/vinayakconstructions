"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 100, label: "COMPLETE PROJECTS" },
  { value: 90, label: "TEAM MEMBERS" },
  { value: 30, label: "CLIENT REVIEWS" },
  { value: 10, label: "WINNING AWARDS" },
];

const AnimatedCounter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let start = 0;
      const interval = setInterval(() => {
        if (start >= end) {
          clearInterval(interval);
        } else {
          start++;
          setCount(start);
        }
      }, 100); // Adjust speed here
    }
  }, [end]);

  return <motion.span className="text-4xl font-bold">{count}+</motion.span>;
};

const AnimatedCircles = () => {
  return (
    <div className="flex justify-center items-center gap-10 p-10 bg-[#FAFAF5]">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center w-60 h-60 border border-black-300 rounded-full justify-center">
          <AnimatedCounter end={stat.value} />
          <p className="text-customBrown text-sm mt-2 text-center">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default AnimatedCircles;
