import React from "react";
import Nav from "./components/Nav/Nav";
import Header from "./components/Headers/Header";
import Specialists from "./components/Specialists/Specialists";
import Offers from "./components/Offers/Offers";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <Specialists  /> 
      <Offers  /> 
      <Footer />
    </>
  );
};

export default App;
