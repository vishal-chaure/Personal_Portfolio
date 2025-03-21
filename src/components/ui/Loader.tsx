
import { motion } from "framer-motion";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  color?: string;
}

export const Loader = ({ size = "md", color = "white" }: LoaderProps) => {
  const sizeValues = {
    sm: "w-5 h-5",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const circleVariants = {
    initial: { opacity: 0.3 },
    animate: { opacity: 1 },
  };

  return (
    <div className="flex justify-center items-center">
      <motion.div
        className={`${sizeValues[size]} relative`}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      >
        {[0, 90, 180, 270].map((deg, i) => (
          <motion.div
            key={i}
            className={`absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center`}
            style={{ transform: `rotate(${deg}deg) translate(0, 50%)` }}
            variants={circleVariants}
            initial="initial"
            animate="animate"
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.75,
              delay: i * 0.15,
            }}
          >
            <div
              className={`w-2 h-2 rounded-full`}
              style={{ backgroundColor: color }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
