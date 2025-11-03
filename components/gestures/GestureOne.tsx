"use client";
import * as motion from "motion/react-client";

const GestureOne = () => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1, border: "1px solid grey" }}
      transition={{ type: "spring", stiffness: 400, duration: 0.2 }}
      className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer"
    >
      <img
        src="driver-avatar-2.jpg"
        alt="card-image"
        className="object-cover w-full h-48"
      />
      <div className="p-6">
        <h2 className="mb-2 text-2xl font-bold text-gray-800">John Doe</h2>
        <p className="mb-4 text-gray-600">This is a description of the card.</p>
      </div>
    </motion.div>
  );
};

export default GestureOne;
