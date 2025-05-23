import React, { useContext, useState } from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import { Icons } from "../../assets/icons/icon";
import { AddProductModal } from "../modal/AddProductModal";
import {
  addCardWoman,
  deleteCardWoman,
  addCardChildren,
  deleteCardChildren,
  addCardMan,
  deleteCardMan,
} from "../../store/reducer/CardMainAdminslicer";
import { useDispatch, useSelector } from "react-redux";
import { Context } from "../../context/ContextProvider";
import { DeleteModal } from "../modal/DeleteModal";
import { useModal } from "../../context/ModalContext";
import { deleteProduct } from "../../store/thunks/addProductThunk";

export const AdminCard = ({
  id,
  name,
  price,
  quantity,
  size,
  colors,
  category = "woman",
}) => {
  const dispatch = useDispatch();
  const { openModal, closeModal, isOpen } = useModal();
  const { womanCardAdmin, childrenCardAdmin, manCardAdmin } = useSelector(
    (state) => state.cardsAdminSlicer
  );
  const {
    setInputsValue,
    setAddModal,
    setColorFields,
    setIsEdit,
  } = useContext(Context);

  const getCategoryList = () => {
    if (category === "woman") return womanCardAdmin || [];
    if (category === "children") return childrenCardAdmin || [];
    if (category === "man") return manCardAdmin || [];
    return [];
  };

  const getAddAction = () => {
    if (category === "woman") return addCardWoman;
    if (category === "children") return addCardChildren;
    if (category === "man") return addCardMan;
  };

  const getDeleteAction = () => {
    if (category === "woman") return deleteCardWoman;
    if (category === "children") return deleteCardChildren;
    if (category === "man") return deleteCardMan;
  };
  const currentItem = { id, name, price, quantity, size, colors, category };
  const findedItem = getCategoryList().find((item) => item.id === id);
  const reEdit = () => {
    setInputsValue({
      name,
      price,
      quantity,
      size,
    });
    setColorFields(
      (colors || []).map((c) => ({ ...c, id: c.id ?? crypto.randomUUID() }))
    );
    setIsEdit(id);
    setAddModal(true);
  };
  const handleDelete = async () => {
    try {
      const res = await dispatch(deleteProduct(id));
      if (deleteProduct.fulfilled.match(res)) {
        closeModal("delete");
        dispatch(getProduct());
      }
    } catch (err) {
      console.error("Ошибка при удалении:", err);
    }
  };
  return (
    <STyledWrapper>
      <StyledFirstLIne>
        <p>{name}</p>
        <StyleICONSDIV>
          <IconButton
            onClick={() =>
              dispatch(getAddAction()({ ...findedItem, id: Date.now() }))
            }
          >
            <Icons.CopyPaper />
          </IconButton>
          <IconButton
            onClick={() => {
              reEdit(findedItem);
              openModal("edit");
            }}
          >
            <Icons.EditBasket />
          </IconButton>
          <IconButton
            onClick={() => {
              openModal("delete");
            }}
          >
            <Icons.Basket />
          </IconButton>
          <DeleteModal
            open={isOpen("delete")}
            onClose={() => closeModal("delete")}
            onDelete={handleDelete}
          />
        </StyleICONSDIV>
      </StyledFirstLIne>
      <StyledSecondDiv>
        <StyledImg src={colors?.[0]?.image} alt="" />
        <StyledDiv>
          <StyledColorLine>
            <STyledSquares2>
              <span>Цвета в наличии</span>
              <STyledSquaresConatiner>
                {colors?.map((item) => (
                  <StyledSquaresdiv
                    color={item.colorsquare}
                    key={item.id}
                  ></StyledSquaresdiv>
                ))}
              </STyledSquaresConatiner>
            </STyledSquares2>
            <STyledSquares>
              <p>Размеры в наличии</p>
              <StyledSizes>{size}</StyledSizes>
            </STyledSquares>
          </StyledColorLine>
          <STyledDIvz>
            <STyledDIvz2>
              <p>{quantity} шт</p>
              <span>Запас</span>
            </STyledDIvz2>
            <STyledDIvz2>
              <p>{price} KGS</p>
              <span>Цена</span>
            </STyledDIvz2>
          </STyledDIvz>
        </StyledDiv>
      </StyledSecondDiv>
      <AddProductModal
        open={isOpen("edit")}
        onClose={() => closeModal("edit")}
      />
    </STyledWrapper>
  );
};

const STyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: rgb(250, 250, 251);
  width: 1162px;
  height: 244px;
`;
const StyledSquares = styled.div`
  display: flex;
  gap: 10px;
`;
const StyledImg = styled.img`
  width: 108px;
  height: 136px;
  border-radius: 10px;
`;
const StyledDiv = styled.div`
  display: flex;
  gap: 459px;
`;

const StyledSizes = styled.p`
  width: 146px;
  height: 20px;
`;
const StyledColorLine = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: 300;
  line-height: 20px;
  gap: 16px;
`;

const STyledSquares = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;
const STyledSquares2 = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
`;

const STyledDIvz = styled.div`
  display: flex;
  gap: 64px;
`;
const STyledDIvz2 = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    min-width: 68px;
    height: 24px;
  }
  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    color: rgb(126, 132, 148);
  }
`;
const StyledFirstLIne = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 54px;
  padding: 16px 16px 16px 25px;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  border-radius: 10px;
  background: rgb(255, 255, 255);
`;
const StyledSecondDiv = styled.div`
  display: flex;
  gap: 24px;
  height: 189px;
  width: 100%;
  padding: 20px 40px 33px 20px;
  border-radius: 10px;
  background: rgb(255, 255, 255);
`;
const StyleICONSDIV = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const StyledSquaresdiv = styled.div`
  background-color: ${({ color }) => `${color}`};

  width: 20px;
  height: 20px;
`;
const STyledSquaresConatiner = styled.div`
  display: flex;
  gap: 20px;
`;
