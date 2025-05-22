import styled from "styled-components";
import { BaseIconButton } from "./UI/BaseIconButton";
import { Icons } from "../assets/icons/icon";
import { BaseButton } from "./UI/BaseButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBasket } from "../store/slices/BasketSlice";

export const CardItem = ({ id, status, image, title, price }) => {
  // const navigate = useNavigate();
  // const handleCardClick = () => {
  //   navigate(`/main/${id}`);
  // };
  const dispatch = useDispatch();
  const handleAddToBasket = () => {
    dispatch(addToBasket({ id, image, title, price }));
  };

  return (
    <StyledWrapper>
      {/* <StyledImg src={image} alt="image" onClick={() => handleCardClick(id)} /> */}
      <StyledImg src={image} alt="image" />
      <StyledSecondLine>
        <StyledDescription>
          <StyledDiv>
            <StyledNewP>{status}</StyledNewP>
            <StyledsecondP>{title}</StyledsecondP>
            <StyledSpan>{price}</StyledSpan>
          </StyledDiv>
          <StyledBaseIconBtn>
            <Icons.Heart />
          </StyledBaseIconBtn>
        </StyledDescription>
        <BaseButton onClick={handleAddToBasket}>Добавить в корзину</BaseButton>
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
  cursor: pointer;
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
