import React from "react";
import { AdminCard } from "./AdminCard";
import styled from "styled-components";

export const AdminCardList = ({ array }) => {
  return (
    <CardContainer>
      {array?.map((item) => (
        <AdminCard
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          size={item.size}
          colors={item.colors}
          category={item.category}
        />
      ))}
    </CardContainer>
  );
};
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
