import styled from "styled-components";
import { BaseIconButton } from "../UI/BaseIconButton";
import { Icons } from "../../assets/icons/icon";
import { BaseButton } from "../UI/BaseButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, toggleFavorite } from "../../store/slices/cardMainSlice";

export const CardItem = ({ id, name, price, image, colors = [] }) => {
  const navigate = useNavigate();
  const imgSrc = image || colors[0]?.image || "/placeholder.jpg";
  const dispatch = useDispatch();
  const isFavorite = useSelector(
    (s) => s.cardsSlicer.mainCards.find((c) => c.id === id)?.isFavorite
  );

  const goToCard = () => navigate(`/main/${id}`);

  const addToCart = () => dispatch(addToBasket({ id, name, price, image }));

  const toggleFav = () => {
    if (isFavorite && !window.confirm("Удалить из избранного?")) return;
    dispatch(toggleFavorite({ id }));
  };
  return (
    <StyledWrapper>
      <StyledImg src={imgSrc} alt={name} onClick={goToCard} />
      <StyledSecondLine>
        <StyledDescription>
          <StyledDiv>
            <StyledNewP>New New</StyledNewP>
            <StyledsecondP>{name}</StyledsecondP>
            <StyledSpan>KGS {price}</StyledSpan>
          </StyledDiv>
          <StyledBaseIconBtn onClick={toggleFav}>
            {isFavorite ? <Icons.GreenHeart /> : <Icons.Heart />}
          </StyledBaseIconBtn>
        </StyledDescription>
        <BaseButton onClick={addToCart}>Добавить в корзину</BaseButton>
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
