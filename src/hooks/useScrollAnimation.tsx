
import { useInView, InViewOptions } from "framer-motion";
import { useRef } from "react";

interface ScrollAnimationOptions extends Omit<InViewOptions, 'root'> {
  once?: boolean;
  margin?: InViewOptions['margin'];
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { once = true, margin = "-100px", ...rest } = options;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once, 
    margin,
    ...rest
  });

  return { ref, isInView };
};
