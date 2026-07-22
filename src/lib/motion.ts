import type { Transition, Variants } from "framer-motion";

export const easeEditorial: Transition["ease"] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeEditorial },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: easeEditorial } },
};

export const staggerChildren = (stagger = 0.12): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger },
  },
});

export const revealImage: Variants = {
  hidden: { opacity: 0, scale: 1.04, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.0, ease: easeEditorial },
  },
};

export const stepTransition: Transition = {
  duration: 0.45,
  ease: easeEditorial,
};

export const microInteraction: Transition = {
  duration: 0.2,
  ease: easeEditorial,
};
