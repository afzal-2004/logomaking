// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextProvider } from "./context/contextprovider.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ContextProvider>
    <App />
  </ContextProvider>
  // </StrictMode>
);
