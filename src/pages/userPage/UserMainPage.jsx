import React from "react";
import { CardList } from "../../components/userComponents/CardList";
import styled from "styled-components";

export const UserMainPage = () => {
  return (
    <Wrapper>
      <CardList />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 50px 120px;
  margin-top: 100px;
`;
