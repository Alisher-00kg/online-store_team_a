import React, { useContext, useEffect, useState } from "react";
import { Modal } from "./Modal";
import { Box, Divider, InputAdornment, styled, TextField } from "@mui/material";
import { BaseIconButton } from "../UI/BaseIconButton";
import { BaseButton } from "../UI/BaseButton";
import { Icons } from "../../assets/icons/icon";
import { useDispatch } from "react-redux";
import { Context } from "../../context/ContextProvider";
import { patchProduct, postProduct } from "../../store/thunks/addProductThunk";

export const AddProductModal = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const { isEdit, setIsEdit } = useContext(Context);
  const {
    inputsValue,
    setInputsValue,
    colorFields,
    setColorFields,
    setAddModal,
  } = useContext(Context);
  const [sizeError, setSizeError] = useState("");
  const handleSave = async () => {
    const { name, price, quantity, size } = inputsValue;
    if (!name || !price || !quantity || !size) return;
    const cardData = {
      id: isEdit ?? crypto.randomUUID(),
      ...inputsValue,
      colors: colorFields,
    };
    try {
      if (isEdit) {
        await dispatch(patchProduct(cardData)).unwrap();
      } else {
        await dispatch(postProduct(cardData)).unwrap();
      }
      setInputsValue({ name: "", price: "", quantity: "", size: "" });
      setColorFields([{ colorsquare: "", image: "", id: Date.now() }]);
      setIsEdit(null);
      onClose();
    } catch (e) {
      alert("Ошибка при сохранении: " + e);
    }
    setIsEdit(null);
  };
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputsValue((prev) => ({ ...prev, [name]: value }));
  };
  const handleColorFieldChange = (index, field, value) => {
    const newFields = [...colorFields];
    newFields[index][field] = value;
    setColorFields(newFields);
  };
  const addColorField = () => {
    setColorFields((prev) => [
      ...prev,
      { colorsquare: "", image: "", id: Date.now() },
    ]);
  };
  if (!open) return null;

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
              <StyledInput
                label="Название товара"
                name="name"
                value={inputsValue.name}
                onChange={(e) =>
                  setInputsValue((p) => ({ ...p, name: e.target.value }))
                }
              />
              <StyledInput
                label="Цена"
                type="number"
                name="price"
                value={inputsValue.price}
                onChange={(e) =>
                  setInputsValue((p) => ({ ...p, price: e.target.value }))
                }
              />
              <StyledInput
                label="Количество в запасе"
                type="number"
                name="quantity"
                value={inputsValue.quantity}
                onChange={inputHandler}
              />
              <StyledInput
                name="size"
                value={inputsValue.size}
                onChange={inputHandler}
                label="Доступные размеры"
                error={!!sizeError}
                helperText={sizeError}
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
              {colorFields.map((item, index) => (
                <React.Fragment key={item.id}>
                  <StyledInput
                    label="Загрузите цвет"
                    value={item.colorsquare}
                    onChange={(e) =>
                      handleColorFieldChange(
                        index,
                        "colorsquare",
                        e.target.value
                      )
                    }
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
                    value={item.image}
                    onChange={(e) =>
                      handleColorFieldChange(index, "image", e.target.value)
                    }
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
                <BaseButton variantType="save" onClick={handleSave}>
                  Сохранить
                </BaseButton>
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
  },
  "& .MuiInputLabel-root": {
    color: "rgb(194, 197, 205)",
    fontWeight: "400",
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
