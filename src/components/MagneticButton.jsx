import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

function MagneticButton({ children, className = "", href = "#", variant = "primary" }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);

  const handlePointerMove = (event) => {
    if (reduceMotion || !ref.current) return;

    const bounds = ref.current.getBoundingClientRect();
    const x = event.clientX - bounds.left - bounds.width / 2;
    const y = event.clientY - bounds.top - bounds.height / 2;

    ref.current.style.setProperty("--mx", `${x * 0.14}px`);
    ref.current.style.setProperty("--my", `${y * 0.14}px`);
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.setProperty("--mx", "0px");
    ref.current.style.setProperty("--my", "0px");
  };

  return (
    <motion.a
      ref={ref}
      className={`button button-${variant} ${className}`.trim()}
      href={href}
      whileTap={{ scale: 0.98 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      style={{
        x: "var(--mx)",
        y: "var(--my)",
      }}
    >
      <span>{children}</span>
    </motion.a>
  );
}

export default MagneticButton;
