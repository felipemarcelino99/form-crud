import { cva } from "class-variance-authority";

export const buttonVariants = cva("button", {
  variants: {
    variant: {
      default: "bg-blue-500 text-white hover:bg-blue-600",
      cancel: "bg-red-500 text-white hover:bg-red-600",
    },
    size: {
      default: "text-lg py-2 px-5",
      xl: "text-xl py-3.5 px-8",
      md: "text-md py-1 px-3",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
