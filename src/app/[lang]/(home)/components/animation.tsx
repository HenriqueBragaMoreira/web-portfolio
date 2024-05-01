"use client";

import { motion } from "framer-motion";

export function MainContainerAnimation({ children }: WithChildren) {
  return (
    <motion.div initial={{ x: "-64px", opacity: "0%" }} animate={{ x: "0px", opacity: "100%" }}>
      {children}
    </motion.div>
  );
}

export function ImageContainerAnimation({ children }: WithChildren) {
  return (
    <motion.div
      initial={{ x: "64px", translateX: "3px", opacity: "0%", rotate: 32 }}
      animate={{ x: "0px", opacity: "100%", rotate: -9.5 }}
      whileHover={{ scale: 1.05 }}>
      {children}
    </motion.div>
  );
}

export function NavbarAnimation({ children }: WithChildren) {
  return (
    <motion.div initial={{ y: "-16px", opacity: "0%" }} animate={{ y: "0px", opacity: "100%" }}>
      {children}
    </motion.div>
  );
}
