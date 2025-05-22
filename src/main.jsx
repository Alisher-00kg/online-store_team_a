import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ModalProvider } from "./context/ModalContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { AppRouter } from "./routes/AppRouter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <AppRouter />
      </ModalProvider>
    </Provider>
  </React.StrictMode>
);
