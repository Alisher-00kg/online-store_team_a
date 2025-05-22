import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ModalProvider } from "./context/ModalContext.jsx";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <App />
      </ModalProvider>
    </Provider>
  </React.StrictMode>
);
