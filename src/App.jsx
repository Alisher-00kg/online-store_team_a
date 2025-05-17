import { AddProductModal } from "./components/modal/AddProductModal";
import { BaseButton } from "./components/UI/BaseButton";
import { useModal } from "./context/ModalContext";

const App = () => {
  const { openModal, closeModal, isOpen } = useModal();
  return (
    <div>
      <BaseButton onClick={() => openModal("add")}>Add</BaseButton>
      <AddProductModal open={isOpen("add")} onClose={() => closeModal("add")} />
    </div>
  );
};

export default App;
