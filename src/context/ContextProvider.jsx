import React, { createContext, useState } from "react";

export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [addModal, setAddModal] = useState(false);
  const [inputsValue, setIntputsValue] = useState({
    name: "",
    price: "",
    quantity: "",
    size: "",
  });
  const [colorFields, setColorFields] = useState([
    { color: "", image: "", id: Date.now() },
  ]);
  const [isEdit, setIsEdit] = useState(null);
  const [tab, setTab] = useState("woman");

  return (
    <Context.Provider
      value={{
        addModal,
        setAddModal,
        inputsValue,
        setIntputsValue,
        colorFields,
        setColorFields,
        isEdit,
        setIsEdit,
        tab,
        setTab,
      }}
    >
      {children}
    </Context.Provider>
  );
};
