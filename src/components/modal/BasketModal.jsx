import React from "react";
import { Modal } from "./Modal";
import { Box, styled } from "@mui/material";
import { BaseButton } from "../UI/BaseButton";

export const BasketModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <CenteredBox>
        <StyledWrapper>
          <StyledBasketBox>
            <p>Корзина</p>
            <BoxProduct></BoxProduct>
            <BoxProduct></BoxProduct>
          </StyledBasketBox>
          <BoxPayment>
            <p>Итого</p>
            <span>KGS 9 290</span>
          </BoxPayment>
          <StyledBoxBtn>
            <BaseButton> Перейти к оплте</BaseButton>
          </StyledBoxBtn>
        </StyledWrapper>
      </CenteredBox>
    </Modal>
  );
};
const CenteredBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  outline: "none",
});
const StyledWrapper = styled(Box)({
  width: "1000px",
  height: "620px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "40px",
  background: "rgb(255, 255, 255)",
  padding: "24px 30px",
});
const StyledBasketBox = styled(Box)({
  width: "100%",
  height: "330px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  overflowY: "auto",
  cursor: "default",
  "& p": {
    fontSize: "20px",
    fontWeight: "400",
  },
});
const BoxProduct = styled(Box)({
  width: "936px",
  height: "154px",
  background: "rgb(250, 250, 250)",
});
const BoxPayment = styled(Box)({
  width: "255px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  alignSelf: "end",
  "& p": {
    fontWeight: "700",
  },
  "& span": {
    fontSize: "14px",
    fontWeight: "400",
  },
});
const StyledBoxBtn = styled(Box)({
  alignSelf: "flex-end",
  width: "344px",
  height: "50px",
  marginTop: "20px",
});
