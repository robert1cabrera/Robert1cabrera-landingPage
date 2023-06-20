import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import CardList from "./CardList";
import Footer from "./Footer";

export function LandingPage() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Jumbotron />
        <div className="cardlist">
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        </div>
        </div>
      <Footer />
    </div>
  )
};
