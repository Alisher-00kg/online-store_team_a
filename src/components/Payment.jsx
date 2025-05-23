import React, { useState } from "react";
import { BaseButton } from "./UI/BaseButton";
import styled from "styled-components";
import { Icons } from "../assets/icons/icon";
import { useNavigate } from "react-router-dom";

export const Payment = () => {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState("wallet");
  const handleChange = (value) => {
    setSelectedPayment(value);
  };

  return (
    <Wrapper>
      <h3>Оформление заказа</h3>
      <InnerWrapper>
        <BoxDelivery>
          <FirstSpan>Доставка Яндекс</FirstSpan>
          <p>Послезавтра</p>
          <SecondSpan>Доставка 0 KGS</SecondSpan>
        </BoxDelivery>
        <p>Как оплатить заказ?</p>
        <PaymentList>
          <PaymentOption
            isActive={selectedPayment === "wallet"}
            onClick={() => handleChange("wallet")}
          >
            <Icons.Wallet />
            <span>BrandName Кошелек</span>
            <input
              type="radio"
              name="payment"
              checked={selectedPayment === "wallet"}
              readOnly
            />
          </PaymentOption>
          <PaymentOption
            isActive={selectedPayment === "sber"}
            onClick={() => handleChange("sber")}
          >
            <Icons.SberBank />
            <span>Сбербанк</span>
            <input
              type="radio"
              name="payment"
              checked={selectedPayment === "sber"}
              readOnly
            />
          </PaymentOption>
          <PaymentOption
            isActive={selectedPayment === "sbp"}
            onClick={() => handleChange("sbp")}
          >
            <Icons.SBP />
            <span>Привязать банк с СБП</span>
            <input
              type="radio"
              name="payment"
              checked={selectedPayment === "sbp"}
              readOnly
            />
          </PaymentOption>
        </PaymentList>
        <p>Итого</p>
        <BaseButton onClick={() => navigate("/main")}>Заказать</BaseButton>
      </InnerWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-top: 120px;
  margin-bottom: 100px;
  margin-left: 35%;
`;
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  width: 100%;
`;
const BoxDelivery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const FirstSpan = styled.span`
  font-size: 12px;
  color: darkgray;
`;
const SecondSpan = styled.span`
  font-size: 12px;
  color: #0dee45;
`;
const PaymentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
`;
const PaymentOption = styled.li.withConfig({
  shouldForwardProp: (prop) => prop !== "isActive",
})`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 14px 20px;
  border: 2px solid ${({ isActive }) => (isActive ? "#0dee45" : "#ccc")};
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "#f5fff8" : "white")};
  transition: 0.3s;
  span {
    flex: 1;
    margin-left: 10px;
  }
  input {
    display: none;
  }
`;
