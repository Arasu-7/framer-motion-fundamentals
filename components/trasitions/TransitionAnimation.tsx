"use client";
// import * as motion from 'framer-motion'
import * as motion from "motion/react-client";

const TransitionAnimation = () => {
  return (
    // <motion.div
    //   className="box"
    //   initial={{ x: -100, opacity: 0 }}
    //   animate={{ x: 0, opacity: 2 }}
    //   transition={{
    //     duration: 1,
    //     ease: "easeOut",
    //     delay: 0.4,
    //   }}
    // >
    //   Smooth Slide In
    // </motion.div>
    <motion.div 
      className="text-center text-black box" 
      initial={{ x: 630 }}
      animate={{ x: -630 }}
      // transition={{delay:2}}
      // transition={{duration:10}}
      transition={{duration:4,ease:"easeIn"}}
      >
      Durr
    </motion.div>
  );
};

export default TransitionAnimation;
