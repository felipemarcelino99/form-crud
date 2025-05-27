import { cn } from "@/lib/utils";

export interface IRootProps {
  children: React.ReactNode;
  className?: string;
}

export const Root = ({ children, className }: IRootProps) => {
  const classes = cn("table-root", className);

  return <table className={classes}>{children}</table>;
};
