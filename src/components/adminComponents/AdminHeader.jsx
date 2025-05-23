import React from "react";
import { BaseButton } from "../UI/BaseButton";
import { Icons } from "../../assets/icons/icon";
import styled from "styled-components";
import { useModal } from "../../context/ModalContext";
import { AddProductModal } from "../modal/AddProductModal";

export const AdminHeader = () => {
  const { openModal, closeModal, isOpen } = useModal();
  return (
    <StyledHeader>
      <h2>Женская</h2>
      <div>
        <BaseButton onClick={() => openModal("addProduct")}>
          <Icons.Plus /> Добавить
        </BaseButton>
      </div>
      <AddProductModal
        open={isOpen("addProduct")}
        onClose={() => closeModal("addProduct")}
      />
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-radius: 10px;
  background: rgb(255, 255, 255);
  h2 {
    color: rgb(52, 54, 53);
    font-family: Nunito;
    font-size: 24px;
    font-weight: 700;
    line-height: 33px;
  }
  div {
    width: 120px;
    height: 40px;
    border-radius: 10px;
  }
`;
