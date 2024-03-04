import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import SendDataJSON from "./components/SendDataJSON";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/send-data" element={<SendDataJSON />} />
    </Routes>
  );
};

export default AppRoutes;
