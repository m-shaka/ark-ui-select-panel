import React from "react";
import ReactDOM from "react-dom/client";
import 'ress/dist/ress.min.css';
import App from "./app.tsx";
import "./index.css";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
