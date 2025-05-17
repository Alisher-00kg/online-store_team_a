import styled from "styled-components";
import { BaseIconButton } from "./BaseIconButton";
import { Icons } from "../../assets/icons/icon";
import { BaseButton } from "./BaseButton";

export const Card = ({ status, image, title, cost }) => {
  return (
    <StyledWrapper>
      <StyledImg src={image} alt="image" />
      <StyledSecondLine>
        <StyledDescription>
          <StyledDiv>
            <StyledNewP>{status}</StyledNewP>
            <StyledsecondP>{title}</StyledsecondP>
            <StyledSpan>{cost}</StyledSpan>
          </StyledDiv>

          <StyledBaseIconBtn>
            <Icons.GreenHeart />
          </StyledBaseIconBtn>
        </StyledDescription>
        <StyledBaseButn>Добавить в корзину</StyledBaseButn>
      </StyledSecondLine>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 697px;
  gap: 14px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 503px;
`;

const StyledSecondLine = styled.div`
  width: 100%;
  padding: 0px 7px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const StyledDescription = styled.div`
  width: 344.34px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 5px;
  position: relative;
`;

const StyledBaseIconBtn = styled(BaseIconButton)`
  position: absolute;
  top: -5px;
  right: -9px;
`;

const StyledSpan = styled.span`
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  max-width: 287px;
  max-width: 287px;
`;
const StyledNewP = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
  max-width: 287px;
`;
const StyledsecondP = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  max-width: 287px;
`;

const StyledBaseButn = styled(BaseButton)`
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
`;
