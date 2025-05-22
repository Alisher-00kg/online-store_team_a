import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const StyledWrapper = styled.div`
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const StyledSecondDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 165px;
`;
const StyledFilterDiv = styled.div`
  height: 17vh;
  position: relative;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
const StyledFilterIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 148px;
  display: flex;
  gap: 30px;
  align-items: center;
  width: 150px;
  height: 44px;
  border: 0.2px solid rgb(0, 0, 0);
  padding: 10px;
`;
