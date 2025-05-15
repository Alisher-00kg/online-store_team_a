import { Button, styled } from "@mui/material";
import React from "react";

export const BaseButton = ({
  variant = "default",
  children,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      variantType={variant}
      onClick={onClick}
      {...props}
      // sx={{
      //   width: "100%",
      //   height: "50px",
      //   background: "#000",
      //   color: "#ffffff",
      // }}
    >
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
      ...styles,
    };
  }
);
