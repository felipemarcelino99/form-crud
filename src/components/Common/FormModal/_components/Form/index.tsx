import { FormHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  className?: string;
}

export const Form = ({ children, className, ...rest }: IFormProps) => {
  const classes = cn("modal-form", className);

  return (
    <form className={classes} {...rest}>
      <fieldset className="w-full max-w-full flex flex-col gap-4 my-10">
        {children}
      </fieldset>
    </form>
  );
};
