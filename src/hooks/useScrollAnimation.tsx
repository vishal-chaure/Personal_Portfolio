
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollAnimationOptions {
  once?: boolean;
  margin?: string;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { once = true, margin = "-100px" } = options;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once, 
    margin,
  });

  return { ref, isInView };
};
