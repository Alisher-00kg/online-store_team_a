import React, { useEffect } from "react";
import { cards } from "../../utils/card";
import { CardItem } from "./CardItem";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../store/thunks/addProductThunk";

export const CardList = () => {
  const dispatch = useDispatch();
  const { items: products, isLoading, error } = useSelector((s) => s.products);
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  if (isLoading) return <p>Загрузка…</p>;
  if (error) return <p>Ошибка: {error}</p>;
  if (!products.length) return <p>Пусто 😕</p>;
  return (
    <StyledWrapper>
      {products.map((product) => (
        <CardItem
          key={product.id}
          id={product.id}
          title={product.name}
          price={product.price}
          image={product.colors[0].image}
        />
      ))}
    </StyledWrapper>
  );
};
const StyledWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 93px;
`;
