import React from "react";
import { THEME } from "@/lib/theme";
import { cn } from "@/lib/utils";

interface CyberButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const CyberButton = React.forwardRef<
  HTMLButtonElement,
  CyberButtonProps
>(
  (
    { variant = "primary", size = "md", className, children, ...props },
    ref
  ) => {
    const baseClasses =
      "font-orbitron font-bold uppercase tracking-wider transition-all duration-300 relative";

    const variantClasses = {
      primary: `border-2 border-[${THEME.colors.primary}] bg-black text-[${THEME.colors.primary}] hover:bg-[${THEME.colors.primaryHover}] hover:text-black hover:border-[${THEME.colors.primaryHover}]`,
      secondary: `border-2 border-[${THEME.colors.secondary}] bg-black text-[${THEME.colors.secondary}] hover:bg-[${THEME.colors.secondary}] hover:text-white`,
      ghost: `bg-transparent text-[${THEME.colors.primary}] border-2 border-transparent hover:border-[${THEME.colors.primary}]`,
    };

    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-8 py-3 text-base",
      lg: "px-12 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

CyberButton.displayName = "CyberButton";
