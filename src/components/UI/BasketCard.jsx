import React from "react";
import styled from "styled-components";
import { AfroWoman } from "../../assets/images/images";
import { Icons } from "../../assets/icons/icon";
import { IconButton } from "@mui/material";

export const BasketCard = ({ image, title, cost }) => {
  return (
    <StyledWrapper>
      <STyledContainer>
        <STyledImg src={image} alt="" />
        <STyledSecondConatiner>
          <STyledTrikotaj>
            <STyleddivw>
              <STyledP>{title}</STyledP>
              <STyledSpan>Размер</STyledSpan>
            </STyleddivw>
            <STyledDDIV>
              <STyledP2> {cost}</STyledP2>
              <span>ХS</span>
            </STyledDDIV>
          </STyledTrikotaj>
          <STyledThirdLine>
            <Styledthirinnerdiv1>
              <Styledthirinnerdiv>
                <Icons.LeftSquare />
                <Icons.RightSquare />
              </Styledthirinnerdiv>
              <span>Светло-синий</span>
            </Styledthirinnerdiv1>
            <STyledsecondinnerdiv>
              <IconButton>
                <Icons.Minus />
              </IconButton>
              <StyledCount>
                <span>1</span>
              </StyledCount>

              <IconButton>
                <Icons.Plus />
              </IconButton>
            </STyledsecondinnerdiv>
          </STyledThirdLine>
        </STyledSecondConatiner>
      </STyledContainer>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 936px;
  height: 154px;
  padding: 20px;
  display: flex;
  background-color: #fafafa;
`;

const STyledImg = styled.img`
  height: 100%;
  width: 110px;
  border: 1px solid rgb(124, 124, 124);
  border-radius: 8px;
`;
const STyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;
const STyledSecondConatiner = styled.div`
  display: flex;
  height: 100%;
  align-items: start;
  gap: 180px;
`;
const STyledTrikotaj = styled.div`
  width: 365px;
  height: 94px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

const STyledThirdLine = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 41px;
`;

const Styledthirinnerdiv = styled.div`
  display: flex;
  gap: 8px;
`;
const Styledthirinnerdiv1 = styled.div`
  display: flex;
  gap: 40px;
  font-size: 12px;
  font-weight: 300;
  line-height: 20px;
  span {
    width: 86px;
    height: 20px;
  }
`;

const STyledsecondinnerdiv = styled.div`
  width: 178px;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 400;
  justify-content: space-around;

  span {
    font-size: 16px;
    font-weight: 400;
  }
`;
const StyledCount = styled.div`
  width: 40px;
  height: 40px;
  /* Light Colors/Platinum */
  border: 1px solid rgb(234, 236, 238);
  /* Light Colors / White */
  background: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    max-width: 40px;
  }
`;

const STyledP = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  max-width: 148px;
  height: 56px;
`;

const STyledSpan = styled.span`
  width: 45px;
  height: 20px;
  font-size: 12px;
  font-weight: 300;
  line-height: 20px;
`;

const STyledP2 = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
`;

const STyledDDIV = styled.div`
  display: flex;
  flex-direction: column;
  height: 97px;
  justify-content: space-between;
  align-items: end;
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
  }
  span {
    font-size: 12px;
    font-weight: 300;
    line-height: 20px;
  }
`;
const STyleddivw = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 16px;
`;
