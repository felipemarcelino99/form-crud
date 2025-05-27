import { cn } from "@/lib/utils";

export interface IActionsProps {
  children: React.ReactNode;
  className?: string;
}

export const Actions = ({ children, className }: IActionsProps) => {
  const classes = cn("modal-actions", className);

  return <div className={classes}>{children}</div>;
};
