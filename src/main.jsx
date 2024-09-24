import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import { Icon } from "@iconify/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
