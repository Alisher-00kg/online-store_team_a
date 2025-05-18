import React from "react";
import { CardList } from "../components/CardList";
import styled from "styled-components";

export const MainPage = () => {
  return (
    <Wrapper>
      <CardList />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 50px 120px;
`;
