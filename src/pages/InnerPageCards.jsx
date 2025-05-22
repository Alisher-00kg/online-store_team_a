import React, { useState } from "react";
import { cards } from "../utils/card";
import { useParams } from "react-router-dom";
import { BaseButton } from "../components/UI/BaseButton";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { useDispatch } from "react-redux";
import { addToBasket } from "../store/reducer/cardMainSlice";

export const InnerPageCards = () => {
  const { cardId } = useParams();
  const dispatch = useDispatch();
  const selectedCard = cards.find((card) => card.id === Number(cardId));
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const handleAddToBasket = () => {
    dispatch(addToBasket(selectedCard));
  };
  if (!selectedCard) return <p>Карточка не найдена</p>;
  return (
    <Wrapper>
      <StyledImageBlock>
        <SmallImageBlock>
          <Swiper
            direction="vertical"
            onSwiper={setThumbsSwiper}
            slidesPerView={4}
            spaceBetween={-30}
            navigation
            watchSlidesProgress
            modules={[Thumbs, Navigation]}
          >
            {selectedCard.images?.map((img, index) => (
              <SwiperSlide key={index}>
                <StyledImage
                  src={img}
                  alt="thumb"
                  style={{
                    height: "87px",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </SmallImageBlock>
        <StyledMainImage>
          <Swiper
            navigation
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Navigation, Thumbs]}
            style={{ width: "100%", height: "100%" }}
          >
            {selectedCard.images?.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt="main" />
              </SwiperSlide>
            ))}
          </Swiper>
        </StyledMainImage>
      </StyledImageBlock>
      <WrapperDataProduct>
        <BoxTitlePrice>
          <p>{selectedCard.title}</p>
          <span>KGS{selectedCard.price}</span>
        </BoxTitlePrice>
        <div>
          {selectedCard.colors?.map((clr, index) => (
            <BoxColor
              key={index}
              onClick={() => setSelectedColorIndex(index)}
              $isSelected={index === selectedColorIndex}
            >
              <img src={clr.color} alt={clr.colorTitle} />
              {index === selectedColorIndex && <span>{clr.colorTitle}</span>}
            </BoxColor>
          ))}
        </div>
        <BoxSizes>
          <p>Таблица размеров</p>
          <div>
            <div>{selectedCard.size}</div>
          </div>
          <p>Товар будет доставлен в течении 10 дней</p>
        </BoxSizes>
        <BaseButton sx={{ marginTop: "82%" }} onClick={handleAddToBasket}>
          Добавить в корзину
        </BaseButton>
      </WrapperDataProduct>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: "71px";
  margin-top: 150px;
  margin-bottom: 100px;
`;
const StyledImageBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
`;
const SmallImageBlock = styled.div`
  display: flex;
  width: 85px;
  height: 612px;
  position: relative;
  background-color: #fbfbfb;
  transition: border 0.2s ease;
  .swiper-button-prev {
    top: 18px;
    left: 50%;
    transform: translateX(-50%) rotate(90deg);
    right: auto;
    bottom: auto;
  }
  .swiper-button-next {
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%) rotate(90deg);
    top: auto;
    right: auto;
  }
  .swiper-button-disabled {
    opacity: 0.3;
    pointer-events: none;
  }
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
  margin-top: 40px;
`;
const StyledMainImage = styled.div`
  width: 581px;
  height: 650px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .swiper-button-prev {
    top: 50%;
    left: 15%;
    transform: translateX(-100%) rotate(0deg);
    bottom: auto;
  }
  .swiper-button-next {
    bottom: 50%;
    left: 82%;
    transform: translateX(100%) rotate(0deg);
    right: auto;
  }
  .swiper-button-disabled {
    opacity: 0.3;
    pointer-events: none;
  }
`;
const WrapperDataProduct = styled.div`
  width: 370px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const BoxTitlePrice = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    width: 157px;
    font-size: 17px;
    font-weight: 400;
  }
`;
const BoxColor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-top: 2px;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
    border: ${({ $isSelected }) =>
      $isSelected ? "2px solid black" : "1px solid gray"};
  }
  span {
    font-size: 12px;
    font-weight: 300;
    color: rgb(18, 19, 20);
  }
`;
const BoxSizes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  p {
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.3px;
    text-decoration-line: underline;
  }
`;
