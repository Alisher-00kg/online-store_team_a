import { styled, TextField } from "@mui/material";
import React from "react";

export default function Input({
  label,
  placeholder,
  value,
  onChange,
  InputProps,
  type,
  ...props
}) {
  return (
    <div style={{ width: "100%", marginTop: "24px" }}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput
        sx={{ width: "100%" }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        InputProps={InputProps}
        type={type}
        {...props}
      />
    </div>
  );
}
const StyledLabel = styled("label")({
  display: "block",
  marginBottom: "8px",
  fontSize: "12px",
});
const StyledInput = styled(TextField)({
  "& .MuiInputBase-root": {
    height: "48px",
    border: "1px solid rgb(106, 106, 106)",
    borderRadius: "4px",
    background: "rgb(255, 255, 255)",
  },
  "& input": {
    padding: "12px 16px",
    fontSize: "16px",
    color: "rgb(124, 124, 124)",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
});
