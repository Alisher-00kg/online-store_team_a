import React from "react";
import { BaseIconButton } from "./UI/BaseIconButton";
import { Icons } from "../assets/icons/icon";
import { Logo } from "../assets/images/images";
import styled from "styled-components";

export const Header = () => {
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
        <BaseIconButton>
          <Icons.Bug />
          <span>Корзина</span>
        </BaseIconButton>
      </WrapperIcons>
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
