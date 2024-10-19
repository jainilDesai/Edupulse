import React from "react";
import "./DashBoard.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Content from "../../components/content/content";

function DashBoard() {
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default DashBoard;
