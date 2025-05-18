import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ModalProvider } from "./context/ModalContext.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>
);
