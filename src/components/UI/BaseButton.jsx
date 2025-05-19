import { Button, styled } from "@mui/material";
import React from "react";

export const BaseButton = ({
  variant = "default",
  children,
  onClick,
  ...props
}) => {
  return (
    <StyledButton variantType={variant} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};
const StyledButton = styled(({ variantType, ...rest }) => <Button {...rest} />)(
  ({ variantType }) => {
    let styles = {};
    switch (variantType) {
      case "save":
        styles = {
          backgroundColor: "#000",
          color: "white",
          fontSize: "14px",
          fontWeight: "400",
          borderRadius: "10px",
        };
        break;
      case "cancel":
        styles = {
          backgroundColor: "rgb(126, 132, 148)",
          color: "white",
          fontSize: "14px",
          fontWeight: "400",
          borderRadius: "10px",
        };
        break;
      case "delete":
        styles = {
          backgroundColor: "rgb(48, 114, 63)",
          color: "white",
          fontSize: "14px",
          fontWeight: "400",
          borderRadius: "10px",
        };
        break;
      case "showResults":
        styles = {
          border: "1px solid rgb(48, 114, 63)",
          color: "#000",
          fontSize: "12px",
          fontWeight: "400",
        };
        break;
      case "adding":
        styles = {
          border: "none",
          color: "rgb(48, 114, 63)",
        };
        break;
      case "category":
        styles = {
          width: "95px",
          height: "30px",
          border: "0.2px solid rgb(0, 0, 0)",
          color: "#000",
          fontSize: "12px",
          "&:active,  &:hover": {
            backgroundColor: "rgba(48, 114, 63, 0.8)",
            color: "#ffffff",
            border: "none",
          },
        };
        break;
      case "size":
        styles = {
          width: "60px",
          height: "20px",
          border: "0.2px solid rgb(0, 0, 0)",
          color: "#000",
          fontSize: "12px",
          "&:active, &:hover": {
            backgroundColor: "rgba(48, 114, 63, 0.8)",
            color: "#ffffff",
            border: "none",
          },
        };
        break;
      default:
        styles = {
          backgroundColor: "#000",
          color: "white",
          fontSize: "20px",
          fontWeight: "400",
        };
    }
    return {
      width: "100%",
      height: "50px",
      textTransform: "none",
      ...styles,
    };
  }
);
