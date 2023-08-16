import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./header.jsx";

import Menu from "./Menu.jsx";
import Footer from "./Footer.jsx";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
