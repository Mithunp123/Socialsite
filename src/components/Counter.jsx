import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value, suffix = "", prefix = "", decimals = 0, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals));

  useEffect(() => {
    if (!inView) return undefined;

    const controls = animate(count, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
    });

    return () => controls.stop();
  }, [count, inView, value]);

  return (
    <div ref={ref} className="stat-card">
      <div className="stat-value">
        {prefix}
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <p>{label}</p>
    </div>
  );
}

export default Counter;
