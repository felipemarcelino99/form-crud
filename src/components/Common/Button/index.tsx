"use client";
import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { buttonVariants } from "./buttonVariants";
import { cn } from "@/lib/utils";

export interface IButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label: string;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
}

export const Button = ({
  label,
  variant,
  className,
  disabled = false,
  onClick,
  ...rest
}: IButtonProps) => {
  const classes = cn(buttonVariants({ variant }), className);

  return (
    <button {...rest} className={classes} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
