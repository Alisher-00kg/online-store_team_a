import React from "react";
import { Modal } from "./Modal";
import { Box, styled } from "@mui/material";
import { BaseIconButton } from "../UI/BaseIconButton";
import { BaseButton } from "../UI/BaseButton";

export const FilterModal = ({ open, onClose }) => {
  return (
    <StyledModal open={open} onClose={onClose}>
      <StyledBox>
        <StyledTopBox>
          <h2>Фильтровать</h2>
          <BaseIconButton onClick={handleClose}>X</BaseIconButton>
        </StyledTopBox>
        <StyledContainerSize>
          <p>По категориям:</p>
          <div style={{ display: "flex", gap: "26px" }}>
            <BaseButton variantType="category">Мужчинам</BaseButton>
            <BaseButton variantType="category">Женщинам</BaseButton>
            <BaseButton variantType="category">Детям</BaseButton>
          </div>
        </StyledContainerSize>
        <StyledContainerSize>
          <p>По размерам:</p>
          <StyledBoxSize>
            <div style={{ display: "flex", gap: "32px" }}>
              <BaseButton variantType="size">XXS</BaseButton>
              <BaseButton variantType="size">XS</BaseButton>
              <BaseButton variantType="size">S</BaseButton>
              <BaseButton variantType="size">M</BaseButton>
            </div>
            <div style={{ display: "flex", gap: "32px" }}>
              <BaseButton variantType="size">L</BaseButton>
              <BaseButton variantType="size">XL</BaseButton>
              <BaseButton variantType="size">XXL</BaseButton>
              <BaseButton variantType="size">XXL</BaseButton>
            </div>
          </StyledBoxSize>
        </StyledContainerSize>
      </StyledBox>
      <StyledBoxBtn>
        <BaseButton variantType={"showResults"}>
          Показать результаты (86)
        </BaseButton>
      </StyledBoxBtn>
    </StyledModal>
  );
};
const StyledModal = styled(Modal)({
  "& > .MuiBox-root": {
    width: "397px",
    height: "851px",
    backgroundColor: "#fff",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "12px",
    padding: "32px",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
    overflowY: "auto",
  },
});
const StyledTopBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "42px",
  "& h2": {
    fontSize: "18px",
  },
});
const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
});
const StyledContainerSize = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  "& p": {
    fontSize: "14px",
  },
});
const StyledBoxSize = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});
const StyledBoxBtn = styled(Box)({
  width: "200px",
  height: "30px",
  marginTop: "115px",
});
