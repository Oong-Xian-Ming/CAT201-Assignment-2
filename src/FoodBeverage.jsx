import { Link } from "react-router-dom";
import "./Tourist_App.css";
import React from "react";
import "./FoodBeverage_App.css";
import ckt from "./assets/images/ckt.jpg";
import al from "./assets/images/al.jpg";
import nl from "./assets/images/nl.jpeg";
import cd from "./assets/images/cd.jpg";

function FoodBeverage() {
  return (
    <div className="app-container">
      <header className="header">
        <h1
          style={{
            fontFamily: "'Courier New', Courier, monospace",
            fontWeight: "bold",
            fontSize: "7rem",
          }}
        >
          Penang
        </h1>
        <h2
          style={{
            fontFamily: "'Comic Sans MS', cursive, sans-serif",
            fontStyle: "italic",
            fontSize: "2rem",
          }}
        >
          Food & Beverage
        </h2>

        <div className="small_box_container">
          <Link to="/" className="custom-link-topic">
            <section className="small_box1">Main Page</section>
          </Link>
          <Link to="/tourist" className="custom-link-topic">
            <section className="small_box1">Tourist</section>
          </Link>
          <Link to="/accommodation" className="custom-link-topic">
            <section className="small_box1">Accommodation</section>
          </Link>
          <Link to="/entertainment" className="custom-link-topic">
            <section className="small_box1">Entertainment</section>
          </Link>
        </div>
      </header>
      <main className="main">
        <h2>Discover the Best Food & Beverages in Penang!</h2>
        <div className="rectangle-body">
          <div className="rectangle-body-1">
            <p className="rectangle-body-text">Char Koay Teow</p>
            <img src={ckt} alt="Char Koay Teow" />
            <p className="food-description">
              A popular stir-fried noodle dish, made with flat rice noodles,
              prawns, eggs, and bean sprouts.
            </p>
          </div>
          <div className="rectangle-body-2">
            <p className="rectangle-body-text">Asam Laksa</p>
            <img src={al} alt="Asam Laksa" />
            <p className="food-description">
              A tangy and spicy noodle soup, known for its tamarind-based broth
              and fish flakes.
            </p>
          </div>
          <div className="rectangle-body-3">
            <p className="rectangle-body-text">Nasi Lemak</p>
            <img src={nl} alt="Nasi Lemak" />
            <p className="food-description">
              Malaysia's national dish, featuring fragrant coconut rice, sambal,
              and a variety of toppings.
            </p>
          </div>
          <div className="rectangle-body-4">
            <p className="rectangle-body-text">Cendol</p>
            <img src={cd} alt="Cendol" />
            <p className="food-description">
              A sweet, refreshing Southeast Asian dessert made of green pandan
              rice noodles, coconut milk, palm sugar syrup, and crushed ice.
            </p>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2025 Visit Penang. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default FoodBeverage;
