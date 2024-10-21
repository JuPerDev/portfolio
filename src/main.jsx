import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import { LanguageProvider } from "./assets/contexts/LangContext.jsx";

createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </LanguageProvider>
);
