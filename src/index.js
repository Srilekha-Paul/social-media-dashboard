import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // optional (remove if not using)
import App from "./App";
import reportWebVitals from "./reportWebVitals"; // optional

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional (can delete if not needed)
reportWebVitals();