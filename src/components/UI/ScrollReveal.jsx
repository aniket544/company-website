import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const ScrollReveal = ({ children, className = "" }) => {
  const ref = useRef(null);
  // margin: "-50px" ka matlab hai jab element screen pe thoda upar aajaye tab animation start ho
  const isInView = useInView(ref, { once: true, margin: "-50px" }); 

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 70 }} // Shuru mein invisible aur thoda neeche
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }} // View mein aate hi upar aur visible
      transition={{ duration: 0.8, ease: "easeOut" }} // Smoothness duration
    >
      {children}
    </motion.div>
  );
};