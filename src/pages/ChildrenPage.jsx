import React, { useContext } from "react";
import { AdminCard } from "../components/UI/AdminCard";
import { BaseButton } from "../components/UI/BaseButton";
import styled from "styled-components";
import { AddProductModal } from "../components/modal/AddProductModal";
import { useSelector } from "react-redux";
import { Context } from "../context/ContextProvider";

export const ChildrenPage = () => {
  const { childrenCardAdmin } = useSelector((state) => state.cardsSlicer);
  const { addModal, setAddModal } = useContext(Context);

  return (
    <StyledSecondDiv>
      <StyledAddContainer>
        <p>Детская</p>
        <StyledAdd>
          <StyledButton onClick={() => setAddModal(true)}>
            +Добавить
          </StyledButton>
        </StyledAdd>
        <AddProductModal
          open={addModal}
          onClose={() => setAddModal(false)}
          category="children"
        />
      </StyledAddContainer>
      {childrenCardAdmin.map((item) => (
        <AdminCard key={item.id} {...item} category="children" />
      ))}
    </StyledSecondDiv>
  );
};

const StyledSecondDiv = styled.div`
  background-color: rgb(250, 250, 251);
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const StyledButton = styled(BaseButton)``;
const StyledAddContainer = styled.div`
  width: 1162px;
  height: 72px;
  padding: 16px 20px 16px 30px;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 33px;
  }
`;
const StyledAdd = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
`;
