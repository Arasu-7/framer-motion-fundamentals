import React from "react";
import * as motion from "motion/react-client";
const Keyframes = () => {
  return (
    // <motion.div
    // className="box"
    // animate={{
    // scale: [1, 2, 1],
    // rotate: [0, 90, 180, 90, 0],
    // borderRadius: ["20%", "50%", "80%", "50%", "20%"],
    // }}
    // transition={{ duration: 3, ease: "easeIn" }}
    // >
    // </motion.div>
    
    // <motion.div
    //   className="px-4 py-2 text-white bg-blue-500 rounded outline-none"
    //   animate={{
    //     scale: [1, 2, 1],
    //     // rotate: [0, 180, 0],
    //     backgroundColor: ["#ff0000", "#00ff00", "#0000ff"],
    //   }}
    //   transition={{ delay: 2, duration: 4, ease: "easeIn", repeat: Infinity }}
    // >
    //   click me!
    // </motion.div>
    
    <div className="flex space-x-2">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="box"
          animate={{
            y: [0, -200, 0],
            // scale: [1, 2, 1],
            // rotate: [0, 90, 180, 90, 0], 
            // borderRadius: ["20%", "50%", "80%", "50%", "20%"],
          }}
          transition={{ duration: 2, ease: "easeIn", repeat: Infinity, repeatDelay: i * 0.2 }}
        ></motion.div>
      ))}
    </div>
  );
};

export default Keyframes;
