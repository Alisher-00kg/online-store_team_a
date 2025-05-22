import React, { useState } from "react";
import { Modal } from "./Modal";
import { Box, styled, Typography } from "@mui/material";
import { BaseButton } from "../UI/BaseButton";
import { PaymentMethod } from "./PaymentMethod";
import { useModal } from "../../context/ModalContext";
import { BaseIconButton } from "../UI/BaseIconButton";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../../store/reducer/cardMainSlice";
import { Icons } from "../../assets/icons/icon";

export const BasketModal = ({ open, onClose }) => {
  const { openModal, closeModal, isOpen } = useModal();
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.cardsSlicer.shopCards);
  const [selectedColors, setSelectedColors] = useState({});
  const totalPrice = basket.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Modal open={open} onClose={onClose}>
      <CenteredBox>
        <StyledWrapper>
          <StyledBasketBox>
            {basket.length === 0 ? "" : <p>Корзина</p>}
            {basket.length === 0 ? (
              <StyledTypography variant="body2">
                Ваша корзина пуста
              </StyledTypography>
            ) : (
              <StyledWrapperBasket>
                {basket.map((item) => (
                  <div key={item.id}>
                    <BoxProduct>
                      <StyledBoxImg>
                        <img src={item.image} alt={item.title} />
                      </StyledBoxImg>
                      <BoxTitle>
                        <p>{item.title}</p>
                        <span>Размер</span>
                      </BoxTitle>
                      <BoxPrice>
                        <p>KGS {item.price}</p>
                        <span>{}</span>
                      </BoxPrice>
                      <WrapperColorTotal>
                        <div>
                          {item.colors?.map((clr, index) => (
                            <BoxColor
                              key={index}
                              onClick={() =>
                                setSelectedColors((prev) => ({
                                  ...prev,
                                  [item.id]: index,
                                }))
                              }
                              isSelected={selectedColors[item.id] === index}
                            >
                              <img src={clr.color} alt={clr.colorTitle} />
                              {selectedColors[item.id] === index && (
                                <span>{clr.colorTitle}</span>
                              )}
                            </BoxColor>
                          ))}
                        </div>
                        <Boxtotal>
                          <BaseIconButton
                            onClick={() => dispatch(decrease(item.id))}
                          >
                            <Icons.Minus/>
                          </BaseIconButton>
                          <div>{item.quantity}</div>
                          <BaseIconButton
                            onClick={() => dispatch(increase(item.id))}
                          >
                            <Icons.Plus />
                          </BaseIconButton>
                        </Boxtotal>
                      </WrapperColorTotal>
                    </BoxProduct>
                  </div>
                ))}
              </StyledWrapperBasket>
            )}
          </StyledBasketBox>
          {basket.length === 0 ? (
            ""
          ) : (
            <>
              <BoxPayment>
                <p>Итого</p>
                <span>KGS {totalPrice}</span>
              </BoxPayment>
              <StyledBoxBtn>
                <BaseButton> Перейти к оплте</BaseButton>
              </StyledBoxBtn>
            </>
          )}
        </StyledWrapper>
      </CenteredBox>
      <PaymentMethod
        open={isOpen("payment")}
        onClose={() => closeModal("payment")}
      />
    </Modal>
  );
};
const CenteredBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  outline: "none",
});
const StyledWrapper = styled(Box)({
  width: "1000px",
  height: "600px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "40px",
  background: "rgb(255, 255, 255)",
  padding: "24px 30px",
});
const StyledBasketBox = styled(Box)({
  width: "100%",
  height: "330px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  overflowY: "auto",
  cursor: "default",
  "& p": {
    fontSize: "20px",
    fontWeight: "400",
  },
});
const StyledTypography = styled(Typography)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: " rgb(124, 124, 124)",
  fontStyle: "italic",
  marginTop: "250px",
});
const BoxProduct = styled(Box)({
  width: "936px",
  height: "154px",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "60px",
  padding: "20px 20px",
  background: "rgb(250, 250, 250)",
});
const StyledWrapperBasket = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  height: 332px;
  overflow-y: auto;
  cursor: default;
  padding: 10px 0px;
`;
const StyledBoxImg = styled("div")`
  width: 110px;
  height: 110px;
  background: rgba(229, 228, 228, 0.7);
  img {
    width: 100%;
    height: 100%;
    border: 1px solid rgb(124, 124, 124);
    border-radius: 8px;
    object-fit: contain;
  }
`;
const BoxTitle = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  p {
    width: 148px;
    font-weight: 400;
  }
  span {
    font-size: 12px;
    font-weight: 300;
    color: rgb(18, 19, 20);
  }
`;
const BoxPrice = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 44px;
  p {
    width: 148px;
    font-weight: 400;
  }
  span {
    font-size: 12px;
    font-weight: 300;
    color: rgb(18, 19, 20);
  }
`;
const WrapperColorTotal = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 47px;
`;
const Boxtotal = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  div {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(234, 236, 238);
    background: rgb(255, 255, 255);
    padding: 16px 16px;
  }
`;

const BoxColor = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-top: 2px;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
    border: ${({ isSelected }) =>
      isSelected ? "2px solid black" : "1px solid gray"};
  }
  span {
    font-size: 12px;
    font-weight: 300;
    color: rgb(18, 19, 20);
  }
`;
const BoxPayment = styled(Box)({
  width: "255px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  alignSelf: "end",
  marginTop: "30px",
  "& p": {
    fontWeight: "700",
  },
  "& span": {
    fontSize: "14px",
    fontWeight: "400",
  },
});
const StyledBoxBtn = styled(Box)({
  alignSelf: "flex-end",
  width: "344px",
  height: "50px",
  marginTop: "20px",
});
