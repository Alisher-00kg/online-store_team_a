import React, { useState } from "react";
import { Modal } from "./Modal";
import { Box, Divider, InputAdornment, styled, TextField } from "@mui/material";
import { BaseIconButton } from "../UI/BaseIconButton";
import { BaseButton } from "../UI/BaseButton";
import { Icons } from "../../assets/icons/icon";

export const AddProductModal = ({ open, onClose }) => {
  const [colorFields, setColorFields] = useState([]);
  const addColorField = () => {
    setColorFields((prev) => [...prev, { color: "", image: "" }]);
  };
  return (
    <Modal open={open} onClose={onClose}>
      <CenteredBox>
        <StyledWrapper>
          <StyledTopBox>
            <h2>Добавить новую позицию</h2>
            <BaseIconButton onClick={onClose}>
              <Icons.X />
            </BaseIconButton>
          </StyledTopBox>
          <StyledForm>
            <WrapperInput>
              <StyledInput label="Название товара" />
              <StyledInput label="Цена" type="number" />
              <StyledInput label="Количество в запасе" type="number" />
              <StyledInput
                label="Доступные размеры"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <BaseIconButton>
                        <Icons.Vector />
                      </BaseIconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Divider />
              <StyledInput
                label="Цвет"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <BaseIconButton>
                        <Icons.Paint />
                      </BaseIconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <StyledInput
                label="Изображение"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <BaseIconButton>
                        <Icons.Galarary />
                      </BaseIconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {colorFields.map((_, index) => (
                <React.Fragment key={index}>
                  <StyledInput
                    label="Загрузите цвет"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <BaseIconButton>
                            <Icons.Paint />
                          </BaseIconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <StyledInput
                    label="Загрузите изображение"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <BaseIconButton>
                            <Icons.Galarary />
                          </BaseIconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </React.Fragment>
              ))}
            </WrapperInput>
            <LeftAlignBox>
              <BaseButton variantType="adding" onClick={addColorField}>
                + Добавить следующий цвет
              </BaseButton>
            </LeftAlignBox>
            <WrapperBtn>
              <StyledBoxBtn>
                <BaseButton variantType="cancel" onClick={onClose}>
                  Отменить
                </BaseButton>
              </StyledBoxBtn>
              <StyledBoxBtn>
                <BaseButton variantType="save">Сохранить</BaseButton>
              </StyledBoxBtn>
            </WrapperBtn>
          </StyledForm>
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
  width: "507px",
  height: "700px",
  padding: "24px 32px",
  background: "#ffffff",
  borderRadius: "10px",
});
const StyledTopBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "24px",
  "& h2": {
    fontSize: "18px",
  },
});
const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  marginTop: "34px",
  marginBottom: "18px",
});
const StyledInput = styled(TextField)({
  "& .MuiInputBase-root": {
    height: "50px",
    border: "1px solid rgba(126, 132, 148, 0.47)",
    borderRadius: "8px",
    "& fieldset": {
      border: "rgba(126, 132, 148, 0.47)",
      color: "rgb(194, 197, 205)",
    },
    "&:hover fieldset": {
      border: "rgba(126, 132, 148, 0.47)",
      color: "rgb(194, 197, 205)",
    },
    "&.Mui-focused fieldset": {
      border: "rgba(126, 132, 148, 0.47)",
      boxShadow: "none",
      color: "rgb(194, 197, 205)",
    },
  },
  "& .MuiInputLabel-root": {
    color: "rgb(194, 197, 205)",
    fontWeight: "400",
  },
  "& label.Mui-focused": {
    color: "rgb(194, 197, 205)",
  },
});
const WrapperInput = styled(Box)({
  width: "100%",
  height: "450px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  overflowY: "auto",
  cursor: "default",
  padding: "10px 0px",
});
const LeftAlignBox = styled(Box)({
  alignSelf: "flex-start",
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
