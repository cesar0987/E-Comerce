import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";
import "./index.css";
import { BrowserRouter as BrouserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrouserRouter>
      <App />
    </BrouserRouter>
  </StrictMode>
);
