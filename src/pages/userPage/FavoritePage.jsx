import React from "react";
import { CardItem } from "../../components/userComponents/CardItem";
import styled from "styled-components";
import { useSelector } from "react-redux";

export const FavoritePage = () => {
  const favoriteCards = useSelector((state) =>
    state.cardsSlicer.mainCards.filter((card) => card.isFavorite)
  );
  return (
    <Container>
      {favoriteCards.length === 0 ? (
        <StyledPTag>Нет избранных товаров</StyledPTag>
      ) : (
        <>
          <BoxTitle>
            <h3>Избранные</h3>
            <p>Здесь собраны понравившиеся Вам модели.</p>
          </BoxTitle>
          <CardsWrapper>
            {favoriteCards.map((card) => (
              <CardItem
                key={card.id}
                id={card.id}
                title={card.name}
                price={card.price}
                image={
                  card.colors?.[0]?.image || "https://placehold.co/360x503"
                }
              />
            ))}
          </CardsWrapper>
        </>
      )}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 47px;
  padding: 50px 120px;
  margin-top: 100px;
`;
const StyledPTag = styled.p`
  color: rgb(124, 124, 124);
  font-size: 25px;
  font-style: italic;
  margin-top: 50px;
  margin-bottom: 120px;
`;
const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  h3 {
    font-size: 14px;
    font-weight: 700;
  }
  p {
    font-size: 14px;
    font-weight: 400;
  }
`;
const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
`;
