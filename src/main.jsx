import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./i18n"; // Importando a configuração do i18next

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
