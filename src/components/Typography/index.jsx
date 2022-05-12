export const Header = ({
  children,
  bold = false,
  medium = false,
  h1 = false,
  h2 = false,
  h3 = false,
  h6 = false,
  h7 = false,
  className,
}) => {
  return (
    <div
      className={`${h1 ? "text-6xl" : ""} ${h2 ? "text-5xl" : ""} ${
        h3 ? "text-4xl" : ""
      }   ${h6 ? "text-xl" : ""} ${h7 ? "text-base" : ""} ${
        bold ? "font-semibold" : `${medium ? "font-medium" : "font-normal"}`
      } tracking-wider	${className}`}
    >
      {children}
    </div>
  );
};

export const Paragraph = ({ children, b1 = false }) => {
  return <div className={`${b1 ? "text-sm" : ""}`}>{children}</div>;
};
