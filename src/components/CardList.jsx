import React from "react";
import { cards } from "../utils/card";
import { CardItem } from "./CardItem";
import styled from "styled-components";

export const CardList = ({ array }) => {
  return (
    <StyledWrapper>
      {array?.map((item) => (
        <CardItem key={item.id} {...item} />
      ))}
    </StyledWrapper>
  );
};
const StyledWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 93px;
`;
