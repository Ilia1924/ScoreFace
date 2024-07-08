import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { LikedCardsProvider } from "./components/LikedCardsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LikedCardsProvider>
        <App />
      </LikedCardsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
