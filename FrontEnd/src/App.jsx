import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/login";
import DashBoard from "./pages/DashBoard/DashBoard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashBoard" element={<DashBoard />} />
    </Routes>
  );
}

export default App;
