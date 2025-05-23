import React, { useContext } from "react";
import { BaseButton } from "../../components/UI/BaseButton";
import styled from "styled-components";
import { AddProductModal } from "../../components/modal/AddProductModal";
import { useSelector } from "react-redux";
import { Context } from "../../context/ContextProvider";
import { AdminCard } from "../../components/adminComponents/AdminCard";

export const ManPage = () => {
  const { manCardAdmin } = useSelector((state) => state.cardsSlicer);
  const { addModal, setAddModal } = useContext(Context);

  return (
    <StyledSecondDiv>
      <StyledAddContainer>
        <p>Мужская</p>
        <StyledAdd>
          <StyledButton onClick={() => setAddModal(true)}>
            +Добавить
          </StyledButton>
        </StyledAdd>
        <AddProductModal
          open={addModal}
          onClose={() => setAddModal(false)}
          category="man"
        />
      </StyledAddContainer>
      {manCardAdmin.map((item) => (
        <AdminCard key={item.id} {...item} category="man" />
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
`;
