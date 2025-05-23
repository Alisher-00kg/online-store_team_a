import React, { useContext, useState } from "react";
import { CardList } from "../../components/userComponents/CardList";
import styled from "styled-components";
import { BaseIconButton } from "../../components/UI/BaseIconButton";
import { Icons } from "../../assets/icons/icon";
import { FilterModal } from "../../components/modal/FilterModal";
import { useSelector } from "react-redux";
import { Context } from "../../context/ContextProvider";
import { useModal } from "../../context/ModalContext";

export const SnackBar = () => {
  const { openModal, closeModal, isOpen } = useModal();
  const [sizeFilter, setSizeFilter] = useState("");
  const { tab } = useContext(Context);

  const { womanCardAdmin, childrenCardAdmin, manCardAdmin } = useSelector(
    (state) => state.cardsSlicer
  );

  const allCards =
    tab === "woman"
      ? womanCardAdmin || []
      : tab === "children"
      ? childrenCardAdmin || []
      : manCardAdmin || [];

  const filteredCards = sizeFilter
    ? allCards.filter((card) =>
        card.size
          .toLowerCase()
          .split(",")
          .map((s) => s.trim())
          .includes(sizeFilter.toLowerCase())
      )
    : allCards;

  return (
    <Wrapper>
      <StyledFilterDiv>
        <StyledFilterIcon>
          Фильтры
          <BaseIconButton onClick={() => openModal("filter")}>
            <Icons.Filter />
          </BaseIconButton>
          <FilterModal
            open={isOpen("filter")}
            onClose={() => closeModal("filter")}
            size={sizeFilter}
            setSize={setSizeFilter}
            allCards={allCards}
          />
        </StyledFilterIcon>
      </StyledFilterDiv>
      {Array.isArray(filteredCards) && filteredCards.length > 0 ? (
        <CardList array={filteredCards} />
      ) : (
        <StyledP>Пусто</StyledP>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 50px 120px;
  margin-top: 100px;
`;
const StyledFilterDiv = styled.div`
  height: 17vh;
  position: relative;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  top: -40px;
`;
const StyledP = styled.p`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 100px;
`;
const StyledFilterIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 30px;
  display: flex;
  gap: 30px;
  align-items: center;
  width: 150px;
  height: 44px;
  border: 0.2px solid rgb(0, 0, 0);
  padding: 10px;
`;
