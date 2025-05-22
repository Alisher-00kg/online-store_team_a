import React, { useContext, useEffect, useState } from "react";
import { Modal } from "./Modal";
import { Box, Divider, InputAdornment, styled, TextField } from "@mui/material";
import { BaseIconButton } from "../UI/BaseIconButton";
import { BaseButton } from "../UI/BaseButton";
import { Icons } from "../../assets/icons/icon";
import { useDispatch } from "react-redux";
import {
  addCardWoman,
  editCardWoman,
  addCardMan,
  editCardMan,
  addCardChildren,
  editCardChildren,
} from "../../store/reducer/CardMainAdminslicer";
import { Context } from "../../context/ContextProvider";

export const AddProductModal = ({ open, onClose, category }) => {
  const dispatch = useDispatch();
  const {
    inputsValue,
    setIntputsValue,
    colorFields,
    setColorFields,
    isEdit,
    setIsEdit,
    setAddModal,
  } = useContext(Context);

  const [sizeError, setSizeError] = useState("");

  const addColorField = () => {
    setColorFields((prev) => [
      ...prev,
      { colorsquare: "", image: "", id: Date.now() },
    ]);
  };

  useEffect(() => {
    if (!open) {
      setIntputsValue({
        name: "",
        price: "",
        quantity: "",
        size: "",
      });
      setColorFields([
        {
          colorsquare: "",
          image: "",
          id: Date.now(),
        },
      ]);
      setSizeError("");
    }
  }, [open]);

  const handleColorFieldChange = (index, field, value) => {
    const updatedFields = [...colorFields];
    updatedFields[index][field] = value;
    setColorFields(updatedFields);
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;

    if (name === "size") {
      const sizes = value
        .split(",")
        .map((s) => s.trim().toLowerCase())
        .filter((s, i, arr) => s && arr.indexOf(s) === i);

      const allowedSizes = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
      const invalid = sizes.find((s) => !allowedSizes.includes(s));

      if (invalid) {
        setSizeError(`Недопустимый размер: ${invalid}`);
      } else {
        setSizeError("");
      }

      setIntputsValue((prev) => ({
        ...prev,
        [name]: sizes.join(", "),
      }));
    } else {
      setIntputsValue((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const getAddAction = () => {
    if (category === "woman") return addCardWoman;
    if (category === "man") return addCardMan;
    if (category === "children") return addCardChildren;
  };

  const getEditAction = () => {
    if (category == "woman") return editCardWoman;
    if (category == "man") return editCardMan;
    if (category == "children") return editCardChildren;
  };

  const handleSave = () => {
    const { name, price, quantity, size } = inputsValue;
    if (!name || !price || !quantity || !size) {
      return;
    }

    const allowedColors = [
      "black",
      "white",
      "red",
      "blue",
      "green",
      "yellow",
      "beige",
      "gray",
    ];
    const colorsUsed = [];

    const invalidColor = colorFields.find((c) => {
      if (!c.colorsquare) return true;

      const color = c.colorsquare.trim().toLowerCase();

      if (colorsUsed.includes(color)) {
        alert(`Цвет "${color}" уже добавлен`);
        return true;
      }

      colorsUsed.push(color);

      if (!allowedColors.includes(color)) {
        alert(
          `Цвет "${color}" недопустим. Допустимы: ${allowedColors.join(", ")}`
        );
        return true;
      }

      return false;
    });

    if (invalidColor) {
      return;
    }

    const allowedSizes = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
    const sizes = size.split(",").map((s) => s.trim().toLowerCase());

    const invalidSize = sizes.find((s) => !allowedSizes.includes(s));
    if (invalidSize) {
      alert("Допустимы только размеры: XXS, XS, S, M, L, XL, XXL");
      return;
    }

    const cardData = {
      ...inputsValue,
      colors: colorFields,
      id: isEdit || Date.now(),
    };

    if (isEdit) {
      dispatch(getEditAction()(cardData));
      setIsEdit(null);
    } else {
      dispatch(getAddAction()(cardData));
    }

    setIntputsValue({
      name: "",
      price: "",
      quantity: "",
      size: "",
    });
    setColorFields([
      {
        colorsquare: "",
        image: "",
        id: Date.now(),
      },
    ]);
    setSizeError("");
    setAddModal(false);
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
              <StyledInput
                label="Название товара"
                name="name"
                value={inputsValue.name}
                onChange={inputHandler}
              />
              <StyledInput
                label="Цена"
                type="number"
                name="price"
                value={inputsValue.price}
                onChange={inputHandler}
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
