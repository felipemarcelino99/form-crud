import { ThHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ITitleProps
  extends ThHTMLAttributes<HTMLTableHeaderCellElement> {
  label: string;
  className?: string;
}

export const Title = ({ label, className, ...rest }: ITitleProps) => {
  const classes = cn("table-title", className);

  return (
    <th {...rest} className={classes}>
      {label}
    </th>
  );
};
