export const Header = ({
  children,
  bold,
  medium,
  h1,
  h2,
  h3,
  h6,
  h7,
  b1,
  className,
}) => {
  return <div className={`tracking-wider	${className}`}>{children}</div>;
};

export const Paragraph = ({ children }) => {
  return <div>{children}</div>;
};
