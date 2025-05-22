import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BaseButton } from "../components/UI/BaseButton";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
<<<<<<< HEAD
import BreadCrumbs from "../components/UI/BreadCrumbs";
import { useSelector } from "react-redux";

const colorTranslations = {
  black: "Чёрный",
  white: "Белый",
  red: "Красный",
  blue: "Синий",
  green: "Зелёный",
  yellow: "Жёлтый",
  beige: "Бежевый",
  gray: "Серый",
};
=======
import { useDispatch } from "react-redux";
import { addToBasket } from "../store/reducer/cardMainSlice";
>>>>>>> f7d40b6e52168b498c0b44cfaddc6854049c88d4

export const InnerPageCards = () => {
  const { womanCardAdmin } = useSelector((state) => state.cardsSlicer);
  const { cardId } = useParams();
<<<<<<< HEAD

  const selectedCard = womanCardAdmin.find(
    (card) => card.id === Number(cardId)
  );

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

=======
  const dispatch = useDispatch();
  const selectedCard = cards.find((card) => card.id === Number(cardId));
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const handleAddToBasket = () => {
    dispatch(addToBasket(selectedCard));
  };
>>>>>>> f7d40b6e52168b498c0b44cfaddc6854049c88d4
  if (!selectedCard) return <p>Карточка не найдена</p>;

  return (
<<<<<<< HEAD
    <>
      <StyledBreadCrumbsContainer>
        <BreadCrumbs />
      </StyledBreadCrumbsContainer>
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
              onSlideChange={(swiper) =>
                setActiveSlideIndex(swiper.activeIndex)
              }
=======
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
>>>>>>> f7d40b6e52168b498c0b44cfaddc6854049c88d4
            >
              {selectedCard.colors?.map((img, index) => (
                <SwiperSlide key={index}>
                  <StyledImage
                    src={img.image}
                    alt="thumb"
                    style={{ height: "87px" }}
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
              onSlideChange={(swiper) =>
                setActiveSlideIndex(swiper.activeIndex)
              }
            >
              {selectedCard.images?.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt="main"
                    onClick={() => setActiveSlideIndex(index)}
                    style={{ cursor: "pointer" }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </StyledMainImage>
        </StyledImageBlock>
        <WrapperDataProduct>
          <BoxTitlePrice>
            <p>{selectedCard.name}</p>
            <span>KGS{selectedCard.price}</span>
          </BoxTitlePrice>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "50px" }}>
              {selectedCard.colors?.[activeSlideIndex] && (
                <StyledSquaresdiv
                  color={selectedCard.colors[activeSlideIndex].colorsquare}
                  isSelected={true}
                  style={{ cursor: "pointer" }}
                />
              )}
            </div>

            <div>
              {selectedCard.colors?.[activeSlideIndex] && (
                <span>
                  {colorTranslations[
                    selectedCard.colors[activeSlideIndex].colorsquare
                      .toLowerCase()
                      .trim()
                  ] || selectedCard.colors[activeSlideIndex].colorsquare}
                </span>
              )}
            </div>
          </div>
<<<<<<< HEAD

          <BoxSizes>
            <p>Таблица размеров</p>
            <div>
              <div>{selectedCard.size}</div>
            </div>
            <p>Товар будет доставлен в течении 10 дней</p>
          </BoxSizes>
          <BaseButton sx={{ marginTop: "82%" }}>Добавить в корзину</BaseButton>
        </WrapperDataProduct>
      </Wrapper>
    </>
=======
          <p>Товар будет доставлен в течении 10 дней</p>
        </BoxSizes>
        <BaseButton sx={{ marginTop: "82%" }} onClick={handleAddToBasket}>
          Добавить в корзину
        </BaseButton>
      </WrapperDataProduct>
    </Wrapper>
>>>>>>> f7d40b6e52168b498c0b44cfaddc6854049c88d4
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: "71px";
<<<<<<< HEAD
  margin-top: 130px;
=======
  margin-top: 150px;
  margin-bottom: 100px;
>>>>>>> f7d40b6e52168b498c0b44cfaddc6854049c88d4
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

const StyledBreadCrumbsContainer = styled.div`
  position: relative;
  top: 80px;
  left: 135px;
`;
const StyledSquaresdiv = styled.div`
  background-color: ${({ color }) => `${color}`};
  border: ${({ isSelected }) =>
    isSelected ? "2px solid black" : "1px solid gray"};

  width: 20px;
  height: 20px;
`;
