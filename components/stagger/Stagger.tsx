"use client";
import { motion } from "framer-motion";

const parentVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

const childVariant = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const Stagger = () => {
  return (
    <motion.div
      variants={parentVariant}
      initial="hidden"
      animate="visible"
      className="flex space-x-4"
    >
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="box"
          variants={childVariant}
        //   initial="hidden"
        //   animate="visible"
        />
      ))}
    </motion.div>
  );
};

export default Stagger;
