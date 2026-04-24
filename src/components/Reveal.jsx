import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const defaultVariants = {
  hidden: { opacity: 0, y: 32, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Reveal({
  children,
  className,
  variants = defaultVariants,
  amount = 0.25,
  delay = 0,
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial={reduceMotion ? "visible" : "hidden"}
      animate={inView || reduceMotion ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
