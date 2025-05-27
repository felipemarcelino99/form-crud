export interface IIndentProps {
  children: React.ReactNode;
}

export const Indent = ({ children }: IIndentProps) => {
  return <div className="indent">{children}</div>;
};
