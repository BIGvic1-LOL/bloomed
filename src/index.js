import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <button onClick={() => window.location.reload()}> New Quote</button>
    <a href="/favorite"> View Favorite Quotes</a>
  </React.StrictMode>
);

reportWebVitals();
