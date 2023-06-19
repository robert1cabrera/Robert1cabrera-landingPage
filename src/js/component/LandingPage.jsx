import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import CardList from "./CardList";
import Card from "./Card";
import Footer from "./Footer";

export function LandingPage() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Jumbotron />
        <CardList>
          <Card />
          <Card />
          <Card />
        </CardList>
        <Footer />
      </div>
    </div>
  )
};
