import React from "react";
import { Icons } from "../assets/icons/icon";
import styled from "styled-components";
import { BrandName } from "../assets/images/images";

export const Footer = () => {
  return (
    <StyledFooter>
      <WrapperTopContainer>
        <WrapperDataContainer>
          <InnerWrapperDataContainer>
            <img
              src={BrandName}
              alt="BrandNameNoBackground"
              style={{ width: "250px", height: "33px" }}
            />
            <InnerWrapperDataBlock>
              <BlockData>
                <p>О нас </p>
                <p>Контакты</p>
              </BlockData>
              <BlockData>
                <p>Способы оплаты</p>
                <p>Условия доставки</p>
              </BlockData>
              <BlockData>
                <p>Пользовательское соглашение</p>
                <p>Политика конфиденциальности</p>
              </BlockData>
            </InnerWrapperDataBlock>
          </InnerWrapperDataContainer>
          <InnerBottomBlock>
            <p>brandname.com</p>
            <Icons.Copyright />
            <p>2023</p>
            <p>Все права защищены</p>
          </InnerBottomBlock>
        </WrapperDataContainer>
      </WrapperTopContainer>
      <StyledBottomContainer>
        <StyledLeftBottomBlock>
          <p>Onlineshop</p>
          <p>Onlineshop</p>
        </StyledLeftBottomBlock>
        <StyledRightBottomBlock>
          <p>Onlineshop</p>
          <p>Onlineshop</p>
          <p>Onlineshop</p>
        </StyledRightBottomBlock>
      </StyledBottomContainer>
    </StyledFooter>
  );
};
const StyledFooter = styled.footer`
  width: 100%;
  height: 345px;
  display: flex;
  flex-direction: column;
  border: 2px solid rgb(46, 46, 46);
  padding: 80px 120px;
`;
const WrapperTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 2px solid rgb(46, 46, 46); */
`;
const WrapperDataContainer = styled.div`
  width: 100%;
  height: 182px;
  display: flex;
  flex-direction: column;
  gap: 82px;
`;
const InnerWrapperDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const InnerWrapperDataBlock = styled.div`
  display: flex;
  gap: 146px;
`;
const BlockData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  p {
    font-weight: 400;
  }
`;
const InnerBottomBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
const StyledBottomContainer = styled.div`
  width: 100%;
  height: 82px;
  display: flex;
`;
const StyledLeftBottomBlock = styled.div`
  display: flex;
  gap: 154px;
  padding: 38px 192px;
  background-color: rgb(242, 237, 114);
  border-right: 2px solid rgb(46, 46, 46);
  border-top: 4px solid rgb(46, 46, 46);
  p {
    color: rgb(46, 46, 46);
    font-family: Syncopate;
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.2px;
    text-transform: uppercase;
  }
`;
const StyledRightBottomBlock = styled.div`
  display: flex;
  gap: 39px;
  padding: 34px 50px;
  background: rgb(48, 114, 63);
  border-left: 2px solid rgb(46, 46, 46);
  border-top: 4px solid rgb(46, 46, 46);
  p {
    color: rgb(46, 46, 46);
    font-family: Syncopate;
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.2px;
    text-transform: uppercase;
  }
`;
