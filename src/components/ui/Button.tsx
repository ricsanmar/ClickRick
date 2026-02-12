"use client";

import { type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-brand-500 to-brand-400 text-white hover:from-brand-400 hover:to-accent-warm shadow-[0_0_20px_rgba(238,118,94,0.2)] hover:shadow-[0_0_30px_rgba(238,118,94,0.3)]",
  secondary:
    "bg-dark-800 text-white hover:bg-dark-700 border border-white/[0.06]",
  outline:
    "border border-white/[0.1] text-dark-200 hover:bg-white/[0.04] hover:border-white/[0.15]",
};

export default function Button({
  variant = "primary",
  className = "",
  href,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300 text-sm";

  if (href) {
    return (
      <a
        href={href}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
