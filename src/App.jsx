import { useState } from "react";
import { AddProductModal } from "./components/modal/AddProductModal";
import { BasketModal } from "./components/modal/BasketModal";
import { BaseButton } from "./components/UI/BaseButton";
import { FilterModal } from "./components/modal/FilterModal";
import styled from "styled-components";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);
  return (
    <div>
      App
      <AddProductModal />
      <BaseButton onClick={handleOpen}>Открыть корзину</BaseButton>
      <div>
        {" "}
        <FilterModal onClose={handleClose} open={isModalOpen} />
      </div>
    </div>
  );
};

export default App;

const STylediv = styled.div`
  display: flex;
  position: fixed;
  right: 0;
`;
