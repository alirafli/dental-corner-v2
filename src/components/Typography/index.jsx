export const Header = ({
  children,
  bold,
  medium,
  h1,
  h2,
  h3,
  h6,
  h7,
  truncate = false,
  customStyle,
  semiBold,
  ...otherProps
}) => {
  return (
    <div
      className={`${h1 && "text-6xl"} ${h2 && "text-5xl"} ${
        h3 && "text-4xl"
      }   ${h6 ? "text-xl" : ""} ${h7 && "text-base"} ${
        bold
          ? "font-extrabold"
          : `${
              medium
                ? "font-medium"
                : `${semiBold ? "font-semibold" : "font-normal"}`
            }`
      } ${
        truncate ? "truncate" : "whitespace-pre-line"
      } tracking-wider leading-tight  ${customStyle}`}
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
  truncate = false,
  h7,
  customStyle,
  semiBold,
  ...otherProps
}) => {
  return (
    <div
      className={`${b1 ? "text-sm" : ""} 
      ${
        bold
          ? "font-bold"
          : `${
              medium
                ? "font-medium"
                : `${semiBold ? "font-semibold" : "font-normal"}`
            }`
      } ${truncate ? "truncate" : "whitespace-normal"} ${
        h7 && "text-base"
      }   ${customStyle}
      `}
      {...otherProps}
    >
      {children}
    </div>
  );
};
