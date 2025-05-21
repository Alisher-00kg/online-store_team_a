import React from "react";
import { BaseIconButton } from "./UI/BaseIconButton";
import { Icons } from "../assets/icons/icon";
import { Logo } from "../assets/images/images";
import styled from "styled-components";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { BasketModal } from "./modal/BasketModal";
import { useModal } from "../context/ModalContext";

export const Header = () => {
  const total = useSelector((state) =>
    state.basket.basket.reduce((acc, item) => acc + item.quantity, 0)
  );
  const { openModal, closeModal, isOpen } = useModal();
  return (
    <StyledHeader>
      <img
        src={Logo}
        alt="BrandNameSquare"
        style={{ width: "250px", height: "55px" }}
      />
      <WrapperIcons>
        <BaseIconButton>
          <Icons.Anonim />
          <span>Войти</span>
        </BaseIconButton>
        <BaseIconButton>
          <Icons.Heart />
          <span>Избранные</span>
        </BaseIconButton>
        <BaseIconButton onClick={() => openModal("basket")}>
          <Badge
            badgeContent={total}
            color="success"
            invisible={total === 0}
            overlap="circular"
            sx={{
              "& .MuiBadge-badge": {
                fontSize: 10,
                color: "#ffffff",
                top: 10,
                right: -10,
              },
            }}
          />
          <Icons.Bug />
          <span>Корзина</span>
        </BaseIconButton>
      </WrapperIcons>
      <BasketModal
        open={isOpen("basket")}
        onClose={() => closeModal("basket")}
      />
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 5;
  background-color: #ffffff;
  padding: 24px 120px;
`;
const WrapperIcons = styled.div`
  display: flex;
  gap: 28px;
  span {
    color: rgb(0, 0, 0);
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
`;
