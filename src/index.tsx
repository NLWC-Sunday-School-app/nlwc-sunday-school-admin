import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.scss";
import "../src/assets/fonts/Apercu/apercu.css";
import "../src/assets/fonts/Clearface/clearface.css";
import AppRouter from "./router/router";
import UserContextProvider from "./context/auth-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <AppRouter />
    </UserContextProvider>
  </React.StrictMode>
);
