"use client";
import { scale } from "framer-motion";
import * as motion from "motion/react-client";
import { useState } from "react";

const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 },
};

const boxVariants = {
  initial: { scale: 1, rotate: 0, skew: 0 },
  hover: {
    scale: 1.2,
    rotate: 15,
    skew: "10deg",
    transitions: {
      duration: 0.3,
    },
  },
  click: {
    scale: 0.9,
    rotate: -15,
    transition: {
      duration: 0.3,
    },
  },
};

const cardVariants = {
  front: { rotateY: 0 },
  back: { rotateY: 180 },
};
const Variants = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFlipped, setIsFlipped] = useState(true);
  return (
    // <motion.div
    //   initial="hidden"
    //   animate={isVisible ? "visible" : "hidden"}
    //   transition={{
    //     duration: 1,
    //   }}
    //   variants={variants}
    //   exit="exit"
    //   className="box"
    //   onClick={() => setIsVisible(!isVisible)}
    // >
    //   Variants
    // </motion.div>

    // <motion.div
    //   initial="initial"
    //   whileHover="hover"
    //   whileTap="click"
    //   variants={boxVariants}
    //   className="w-40 h-40 bg-blue-500 rounded-lg"
    // >
    //   Variants
    // </motion.div>

    <motion.div
      className="perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        variants={cardVariants}
        initial="front"
        animate={isFlipped ? "back" : "front"}
        transition={{duration:0.6}}
        className="w-64 h-40 overflow-hidden text-black bg-white rounded-lg shadow-lg transform-style-preserve-3d"
      >
        <motion.div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white bg-blue-500 rotate-y-180">
          Back Side
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Variants;
