import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Actions } from "@/enums";

export interface ITitleProps extends HTMLAttributes<HTMLHeadingElement> {
  label: string;
  action: Actions;
  className?: string;
}

export const Title = ({ label, action, className, ...rest }: ITitleProps) => {
  const classes = cn("modal-title", className);

  const actionLabels: Record<Actions, string> = {
    [Actions.CREATE]: "Adicionar",
    [Actions.UPDATE]: "Atualizar",
    [Actions.DELETE]: "Remover",
  };

  return (
    <h3 {...rest} className={classes}>
      {actionLabels[action]} {label}
    </h3>
  );
};
