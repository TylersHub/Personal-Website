import "bootstrap/dist/css/bootstrap.min.css"; // Includes bootstrap css classes
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Includes JS from Bootstrap (Mainly For Navbar Toggle Dropdown when screen size is too small)

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "/src/css/Colors.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
