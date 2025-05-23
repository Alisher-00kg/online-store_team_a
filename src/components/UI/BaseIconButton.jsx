import { IconButton, styled, Tooltip } from "@mui/material";
import React from "react";

const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "variantType",
})(({ variantType }) => {
  switch (variantType) {
    case "filled":
      return {
        flexDirection: "column",
        backgroundColor: "#b8b8b8",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#e0e0e0",
        },
      };
    case "outlined":
      return {
        flexDirection: "column",
        border: "1px solid #a4a4a4",
        color: "#1976d2",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "#e3f2fd",
        },
      };
    case "ghost":
      return {
        flexDirection: "column",
        color: "#a2a2a2",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "rgba(25, 118, 210, 0.08)",
        },
      };
    default:
      return {
        flexDirection: "column",
        gap: "6px",
        "&:hover": {
          backgroundColor: "#f9f9f9",
        },
      };
  }
});

export const BaseIconButton = ({
  children,
  tooltip,
  ariaLabel = "icon button",
  color = "default",
  size = "medium",
  variantType = "default",
  ...props
}) => {
  const button = (
    <StyledIconButton
      aria-label={ariaLabel}
      color={color}
      size={size}
      variantType={variantType}
      {...props}
    >
      {children}
    </StyledIconButton>
  );

  return tooltip ? <Tooltip title={tooltip}>{button}</Tooltip> : button;
};
