import React from "react";

export const Button = ({
  secondary = false,
  noBg,
  bold = false,
  fullWidth,
  children,
  icon,
  outline = false,
  className,
}) => {
  return (
    <button
      className={`
      ${
        secondary
          ? "bg-black text-white hover:bg-grayDark "
          : "bg-primary text-white hover:bg-primaryDark"
      } ${noBg ? "bg-transparent text-black hover:bg-primaryLight" : ""} ${
        bold ? "font-semibold" : ""
      }
      ${fullWidth ? "w-full" : "w-fit"}
      ${
        outline ? "outline outline-black outline-1 hover:outline-grayLight" : ""
      }
      rounded-sm px-3 py-0.5 text-base ease-in duration-200 ${className}`}
    >
      {children} {icon}
    </button>
  );
};
