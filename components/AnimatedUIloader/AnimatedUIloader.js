import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { Plus } from "lucide-react";
import { useInView } from "react-intersection-observer";

// StatItem Component
function StatItem({ number, label, delay, inView }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, number, {
        duration: 2,
        delay,
        ease: "easeInOut",
      });
      return controls.stop;
    }
  }, [count, delay, number, inView]);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Animated Circle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: inView ? 1 : 0 }}
        // whileHover={{ scale: 1.1 }}
        transition={{ delay, duration: 0.5, type: "spring", stiffness: 300 }}
        className="relative w-32 h-32 bg-[#306ba8] rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg"
      >
        {/* Animated Number and Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
          transition={{ delay: delay + 0.3, duration: 0.5 }}
          className="flex items-center"
        >
          <motion.span>{rounded}</motion.span>
         <strong >
         <Plus className="font-extralight" size={22} />
            </strong>
        </motion.div>
      </motion.div>

      {/* Label Text */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
        transition={{ delay: delay + 0.7, duration: 0.5 }}
        className="text-blue-500 font-semibold text-center text-lg"
      >
        {label}
      </motion.p>
    </div>
  );
}

// Dotted Line Component
function DottedLine({ delay, inView }) {
  return (
    <div className="hidden md:block w-32 ml-4 h-[2px] mt-12">
      <svg width="100%" height="2">
        <motion.path
          d="M0 1 L80 1"
          stroke="#4A90E2"
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: inView ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay }}
          fill="none"
        />
      </svg>
    </div>
  );
}

// Main Component
export default function AnimatedUIloader() {
  const stats = [
    { number: 16, label: "Our Technologies" },
    { number: 10, label: "Happy Clients" },
    { number: 10, label: "In the market" },
    { number: 10, label: "Successful projects" },
  ];

  // Track component visibility
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // Starts animation when 20% visible
  });

  return (
    <div
      ref={ref}
      className="w-full bg-[#e9f7fe] flex items-center justify-center p-8"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8 ">
        {stats.map((stat, index) => (
          <div key={stat.label} className="flex items-center">
            <StatItem
              number={stat.number}
              label={stat.label}
              delay={index * 0.3}
              inView={inView}
            />
            {index < stats.length - 1 && (
              <DottedLine delay={index * 0.3 + 1} inView={inView} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
