import React from "react";
import { Modal } from "./Modal";
import { Box, styled } from "@mui/material";
import { BaseButton } from "../UI/BaseButton";
import { useNavigate } from "react-router-dom";

export const PaymentMethod = ({ open, onClose }) => {
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate("/signup");
  };
  return (
    <Modal open={open} onClose={onClose}>
      <CenteredBox>
        <StyledWrapper>
          <h3 style={{ textAlign: "center" }}>
            Чтобы формить заказ нужно зарегистрироваться
          </h3>
          <StyledWrapperBtn>
            <BaseButton variantType="delete">Войти</BaseButton>или
            <BaseButton variantType="delete" onClick={handleRegisterClick}>
              Зарегистрироваться
            </BaseButton>
          </StyledWrapperBtn>
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
  width: "450px",
  height: "300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  background: "#ffffff",
  borderRadius: "10px",
  padding: "20px 60px",
});
const StyledWrapperBtn = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
