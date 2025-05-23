import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ModalProvider } from "./context/ModalContext.jsx";
import { AppRouter } from "./routes/AppRouter.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { ContextProvider } from "./context/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalProvider>
      <Provider store={store}>
        <ContextProvider>
          <AppRouter />
        </ContextProvider>
      </Provider>
    </ModalProvider>
  </React.StrictMode>
);
