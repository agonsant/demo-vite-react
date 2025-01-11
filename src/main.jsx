import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const parentElement = document.getElementById("root");
createRoot(parentElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
