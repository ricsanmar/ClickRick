"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface AnimatedElementProps {
  children: ReactNode;
  variants: Variants;
  className?: string;
  as?: "div" | "section" | "article" | "span";
}

export default function AnimatedElement({
  children,
  variants,
  className = "",
  as = "div",
}: AnimatedElementProps) {
  const Component = motion.create(as);

  return (
    <Component
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </Component>
  );
}
