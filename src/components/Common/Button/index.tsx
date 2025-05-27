"use client";
import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { buttonVariants } from "./buttonVariants";
import { cn } from "@/lib/utils";

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
}

export const Button = ({
  variant,
  className,
  children,
  ...rest
}: IButtonProps) => {
  const classes = cn(buttonVariants({ variant }), className);

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};
