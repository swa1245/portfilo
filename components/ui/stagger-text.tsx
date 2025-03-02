'use client';

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface StaggerTextProps {
  children: string;
  delay?: number;
  className?: string;
}

const StaggerText = ({ children, delay = 0, className = "" }: StaggerTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const words = children.split(" ");

  return (
    <motion.p
      ref={ref}
      className={className}
      initial="hidden"
      animate={mainControls}
      variants={{
        visible: {},
        hidden: {},
      }}
      transition={{
        delayChildren: delay,
        staggerChildren: 0.05,
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
              },
            },
            hidden: {
              opacity: 0,
              y: 20,
              transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
              },
            },
          }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default StaggerText;
