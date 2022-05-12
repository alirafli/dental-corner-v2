import React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Email from "@mui/icons-material/EmailOutlined";
import Lock from "@mui/icons-material/LockOutlined";
import Human from "@mui/icons-material/AccountCircleOutlined";
import Calendar from "@mui/icons-material/CalendarToday";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#0A0C0B",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#0A0C0B",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#0A0C0B",
    },
    "&:hover fieldset": {
      borderColor: "#0A0C0B",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#0A0C0B",
    },
  },
});

const Input = ({
  children = "your text",
  type = "text",
  icon = "default",
  placeholder = "type here...",
  ...otherProps
}) => {
  return (
    <div className="m-3">
      <CssTextField
        label={children}
        type={type}
        placeholder={placeholder}
        {...otherProps}
      />
    </div>
  );
};

export default Input;
