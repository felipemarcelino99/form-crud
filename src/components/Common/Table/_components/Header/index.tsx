export interface IHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const Header = ({ children, className }: IHeaderProps) => {
  return <thead className={className}>{children}</thead>;
};
