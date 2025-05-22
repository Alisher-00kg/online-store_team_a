import React, { useContext, useState, useEffect } from "react";
import { Modal } from "./Modal";
import { Box, styled } from "@mui/material";
import { BaseIconButton } from "../UI/BaseIconButton";
import { BaseButton } from "../UI/BaseButton";
import { Icons } from "../../assets/icons/icon";
import { Context } from "../../context/ContextProvider";

export const FilterModal = ({ open, onClose, size, setSize, allCards }) => {
  const { tab, setTab } = useContext(Context);
  const [radio, setRadio] = useState(tab);
  const [localSize, setLocalSize] = useState(size);

  useEffect(() => {
    if (open) {
      setRadio(tab);
      setLocalSize(size);
    }
  }, [open, tab, size]);

  const handleCategoryClick = (category) => {
    setRadio(category);
  };

  const handleClose = () => {
    setTab(radio);
    setSize(localSize);
    onClose();
  };
  const filteredInModal = allCards
    .filter((card) => card.category === radio)
    .filter((card) =>
      localSize
        ? card.size
            .toLowerCase()
            .split(",")
            .map((s) => s.trim())
            .includes(localSize.toLowerCase())
        : true
    );

  return (
    <StyledModal open={open} onClose={handleClose}>
      <StyledBox>
        <StyledTopBox>
          <h2>Фильтровать</h2>
          <BaseIconButton onClick={handleClose}>
            <Icons.X />
          </BaseIconButton>
        </StyledTopBox>

        <StyledContainerSize>
          <p>По категориям:</p>
          <div style={{ display: "flex", gap: "26px" }}>
            {["man", "woman", "children"].map((category) => (
              <BaseButton
                key={category}
                radio={radio}
                value={category}
                variantType="category"
                onClick={() => handleCategoryClick(category)}
              >
                {category === "man"
                  ? "Мужчинам"
                  : category === "woman"
                  ? "Женщинам"
                  : "Детям"}
              </BaseButton>
            ))}
          </div>
        </StyledContainerSize>

        <StyledContainerSize>
          <p>По размерам:</p>
          <StyledBoxSize>
            <div style={{ display: "flex", gap: "32px" }}>
              {["XXS", "XS", "S", "M"].map((sizeOption) => (
                <BaseButton
                  key={sizeOption}
                  variantType="size"
                  radio={localSize}
                  value={sizeOption}
                  onClick={() => setLocalSize(sizeOption)}
                >
                  {sizeOption}
                </BaseButton>
              ))}
            </div>
            <div style={{ display: "flex", gap: "32px" }}>
              {["L", "XL", "XXL", "XXXL"].map((sizeOption) => (
                <BaseButton
                  key={sizeOption}
                  variantType="size"
                  radio={localSize}
                  value={sizeOption}
                  onClick={() => setLocalSize(sizeOption)}
                >
                  {sizeOption}
                </BaseButton>
              ))}
            </div>
          </StyledBoxSize>
        </StyledContainerSize>
      </StyledBox>

      <StyledBoxBtn>
        <BaseButton variantType="showResults" onClick={handleClose}>
          Показать результаты ({filteredInModal.length})
        </BaseButton>
      </StyledBoxBtn>
    </StyledModal>
  );
};

const StyledModal = styled(Modal)({
  "& > .MuiBox-root": {
    width: "397px",
    height: "851px",
    backgroundColor: "#fff",
    position: "absolute",
    top: "50%",
    right: 0,
    transform: "translateY(-50%)",
    borderRadius: "0 12px 12px 0",
    padding: "32px",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
    overflowY: "auto",
  },
});

const StyledTopBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "42px",
  "& h2": {
    fontSize: "18px",
  },
});
const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
});
const StyledContainerSize = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  "& p": {
    fontSize: "14px",
  },
});
const StyledBoxSize = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});
const StyledBoxBtn = styled(Box)({
  width: "200px",
  height: "30px",
  marginTop: "115px",
});
