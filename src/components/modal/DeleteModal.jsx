import React from "react";
import { Modal } from "./Modal";
import { BaseIconButton } from "../UI/BaseIconButton";
import { Box, styled, Typography } from "@mui/material";
import { BaseButton } from "../UI/BaseButton";

export const DeleteModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <CenteredBox>
        <StyledWrapper>
          <BaseIconButton>a</BaseIconButton>
          <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
            Удалить эту позицию{" "}
          </Typography>
          <WrapperBtn>
            <StyledBoxBtn>
              <BaseButton variantType="cancel" onClick={onClose}>
                Отменить
              </BaseButton>
            </StyledBoxBtn>
            <StyledBoxBtn>
              <BaseButton variantType="delete">Удалить</BaseButton>
            </StyledBoxBtn>
          </WrapperBtn>
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
  width: "359px",
  height: "226px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "15px",
  background: "#ffffff",
  borderRadius: "10px",
});
const WrapperBtn = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
});
const StyledBoxBtn = styled(Box)({
  width: "140px",
  height: "40px",
});
