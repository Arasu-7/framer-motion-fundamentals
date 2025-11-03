"use client";
import * as motion from "motion/react-client";

const Gestures = () => {
  return (
    <motion.div
      className="box"
      drag
      // whileHover={{ scale: 1.2 }}
      //   whileTap={{ scale: 1.5 }}
      whileDrag={{ scale: 1.2, backgroundColor: "blue" }}
      dragConstraints={{ top: -50, bottom: -50 }}
      transition={{
        type: "spring",
        stiffness: 500,
      }}
    >
      Gestures
    </motion.div>
  );
};

export default Gestures;
