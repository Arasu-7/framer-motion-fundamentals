"use client"
// import * as motion from 'framer-motion'
import * as motion from "motion/react-client";

const TransformAnimation = () => {
  return (
    <motion.div
      className="box"
      // animate={{ x: 200 }}
      // animate={{ y: 200 }}
      // animate={{ rotateX: 20 }}
      // animate={{ rotateY: 20 }}
      // animate={{ rotateZ: 20 }}
      // animate={{ rotate: 20 }}
      // animate={{ scaleX: 2 }}
      // animate={{ scaleY: 2 }}
      animate={{ scale: 2 }}
      // animate={{ skewX: 20 }}
      // animate={{ skewY: 20 }}
      // animate={{ skew: 20 }}
    />
  )
}

export default TransformAnimation