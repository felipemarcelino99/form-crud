import { cn } from "@/lib/utils";

export interface IActionsProps {
  children: React.ReactNode;
  className?: string;
}

export const Actions = ({ children, className }: IActionsProps) => {
  const classes = cn("table-actions", className);

  return (
    <tr className={classes}>
      <th>{children}</th>
    </tr>
  );
};
