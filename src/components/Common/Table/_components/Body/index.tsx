export interface IBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const Body = ({ children, className }: IBodyProps) => {
  return <tbody className={className}>{children}</tbody>;
};
