export interface IRowProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onDoubleClick?: () => void;
}

export const Row = ({
  children,
  className,
  onDoubleClick,
  onClick,
}: IRowProps) => {
  return (
    <tr
      className={className}
      onClick={onClick}
      onDoubleClickCapture={onDoubleClick}
    >
      {children}
    </tr>
  );
};
