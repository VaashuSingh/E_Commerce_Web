import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Utility/functions.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
