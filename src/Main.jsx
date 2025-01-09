import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./Main.css";
import TouristApp from "./Tourist_App";
import FoodBeverage from "./FoodBeverage";
import Accommodation from "./Accommodation";
import Entertainment from "./Entertainment";

function Header() {
  const location = useLocation();

  // Show the main page header only on the root ("/") path
  if (location.pathname === "/") {
    return (
      <div className="app">
        <header className="head_back">
          <h1
            style={{
              fontFamily: "'Courier New', Courier, monospace",
              fontWeight: "bold",
              fontSize: "6rem",
              color: "white",
            }}
          >
            Get to Know About Penang{" "}
          </h1>
          <p style={{ fontSize: "1rem", color: "white" }}>
            Explore the best of Penang through our curated sections!
          </p>
        </header>
        <section className="highlights">
          <h2>Explore Penang</h2>
          <div className="cards">
            <div className="card">
              <Link to="/tourist" style={{ textDecoration: "none" }}>
                <section>
                  <img
                    src="/photo/main-penang-tourist.jpg"
                    alt="Tourist"
                    className="pic_card"
                  />
                  <h3 style={{ padding: "1rem 0rem 0rem 0rem" }}>Tourist</h3>
                </section>
              </Link>
            </div>

            <div className="card">
              <Link to="/food-beverage" style={{ textDecoration: "none" }}>
                <section>
                  <img
                    src="/photo/main-penang-Fb.JPG"
                    alt="Tourist"
                    className="pic_card"
                  />
                  <h3 style={{ padding: "1rem 0rem 0rem 0rem" }}>
                    Food & Beverage
                  </h3>
                </section>
              </Link>
            </div>

            <div className="card">
              <Link to="/accommodation" style={{ textDecoration: "none" }}>
                <section>
                  <img
                    src="/photo/main-penang-accommo.jpg"
                    alt="Tourist"
                    className="pic_card"
                  />
                  <h3 style={{ padding: "1rem 0rem 0rem 0rem" }}>
                    Accommodation
                  </h3>
                </section>
              </Link>
            </div>

            <div className="card">
              <Link to="/entertainment" style={{ textDecoration: "none" }}>
                <section>
                  <img
                    src="/photo/main-penang-en.jpg"
                    alt="Tourist"
                    className="pic_card"
                  />
                  <h3 style={{ padding: "1rem 0rem 0rem 0rem" }}>
                    Entertainment
                  </h3>
                </section>
              </Link>
            </div>
          </div>
        </section>
        <footer className="footer">
          <p>© 2025 Visit Penang. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  return null; // Do not render the header on other pages
}

function Main() {
  return (
    <Router>
      <div>
        <Header /> {/* Conditionally render the main page header */}
        <Routes>
          <Route path="/tourist" element={<TouristApp />} />
          <Route path="/food-beverage" element={<FoodBeverage />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/entertainment" element={<Entertainment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Main;
