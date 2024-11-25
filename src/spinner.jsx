import React from "react";
import { motion } from "framer-motion";

const Spinner = (props) => {
  const numberOfSections = props.strokeCount; // Define how many blocks the wheel has
  const radius = 140; // Radius of the wheel
  const strokeWidth = 8; // Thickness of the dividing lines
  const sectionAngle = 360 / numberOfSections; // Angle of each block

  const sections = Array.from({ length: numberOfSections });

  return (
    <motion.svg
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: 360 }} // Rotate the wheel
      transition={{
        repeat: Infinity, // Infinite loop
        duration: 5, // Adjust duration for speed
        ease: "linear", // Smooth rotation
      }}
      style={{ overflow: "visible" }}
    >
      {/* Wheel Sections */}
      {sections.map((_, i) => (
        <path
          key={i}
          d={`M 150 150 
             L ${150 + radius * Math.cos((sectionAngle * i * Math.PI) / 180)} 
               ${150 + radius * Math.sin((sectionAngle * i * Math.PI) / 180)}
             A ${radius} ${radius} 0 0 1 
               ${150 + radius * Math.cos((sectionAngle * (i + 1) * Math.PI) / 180)} 
               ${150 + radius * Math.sin((sectionAngle * (i + 1) * Math.PI) / 180)}
             Z`}
          fill={i % 2 === 0 ? "#f4e4fc" : "#f4f0f7"} // Alternate colors
          strokeWidth={strokeWidth}
        />
      ))}

    </motion.svg>
  );
};

export default Spinner;
