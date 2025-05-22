import React, { useContext, useState } from "react";
import { CardList } from "../components/CardList";
import styled from "styled-components";
import { BaseIconButton } from "../components/UI/BaseIconButton";
import { Icons } from "../assets/icons/icon";
import { FilterModal } from "../components/modal/FilterModal";
import { useSelector } from "react-redux";
import { Context } from "../context/ContextProvider";

export const MainPage = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [sizeFilter, setSizeFilter] = useState("");
  const { tab } = useContext(Context);

  const openModalHandler = () => setIsFilterModalOpen(true);
  const closeModalHandler = () => setIsFilterModalOpen(false);

  const { womanCardAdmin, childrenCardAdmin, manCardAdmin } = useSelector(
    (state) => state.cardsSlicer
  );

  const allCards =
    tab === "woman"
      ? womanCardAdmin
      : tab === "children"
      ? childrenCardAdmin
      : manCardAdmin;

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
          <BaseIconButton onClick={openModalHandler}>
            <Icons.Filter />
          </BaseIconButton>
          <FilterModal
            open={isFilterModalOpen}
            onClose={closeModalHandler}
            size={sizeFilter}
            setSize={setSizeFilter}
            allCards={allCards}
          />
        </StyledFilterIcon>
      </StyledFilterDiv>
      {filteredCards.length > 0 ? (
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
