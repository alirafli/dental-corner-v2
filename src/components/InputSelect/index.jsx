import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function InputSelect({
  title = "your title",
  data = [
    { value: 10, input: "Dummy1" },
    { value: 20, input: "Dummy2" },
    { value: 30, input: "Dummy3" },
  ],
}) {
  return (
    <Box >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={title}
        >
          {data.map((data, i) => (
            <MenuItem key={i} value={data.value}>{data.input}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
