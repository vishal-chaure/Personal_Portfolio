
import { useInView, UseInViewOptions } from "framer-motion";
import { useRef } from "react";

interface ScrollAnimationOptions extends Omit<UseInViewOptions, 'root'> {
  once?: boolean;
  margin?: UseInViewOptions['margin'];
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
