export const Header = ({
  children,
  bold,
  medium,
  h1,
  h2,
  h3,
  h6,
  h7,
  truncate,
  ...otherProps
}) => {
  return (
    <div
      className={`${h1 && "text-6xl"} ${h2 && "text-5xl"} ${
        h3 && "text-4xl"
      }   ${h6 ? "text-xl" : ""} ${h7 && "text-base"} ${
        bold ? "font-bold" : `${medium ? "font-medium" : "font-normal"}`
      } ${truncate ? "truncate" : "whitespace-pre-line"} tracking-wider leading-tight`}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export const Paragraph = ({
  children,
  b1,
  bold,
  medium,
  truncate,
  h7,
  ...otherProps
}) => {
  return (
    <div
      className={`${b1 ? "text-sm" : ""} 
      ${bold ? "font-semibold" : `${medium ? "font-medium" : "font-normal"}`} ${
        truncate ? "truncate" : "whitespace-normal"
      } ${h7 && "text-base"} text-justify 
      `}
      {...otherProps}
    >
      {children}
    </div>
  );
};
