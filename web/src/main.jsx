import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PrimaryLayout from "./layout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimaryLayout>
      <App />
    </PrimaryLayout>
  </StrictMode>
);
