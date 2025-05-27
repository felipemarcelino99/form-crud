import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export interface IRootProps {
  children: React.ReactNode;
  isOpen: boolean;
  className?: string;
  onClose: () => void;
}

export const Root = ({ children, isOpen, className, onClose }: IRootProps) => {
  const classes = cn("modal-root", className);

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className={classes}>
            <button
              onClick={onClose}
              className="absolute top-3.5 right-3.5 cursor-pointer"
            >
              <X />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
