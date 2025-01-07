import { Link } from 'react-router-dom';
import './Tourist_App.css';

function FoodBeverage() {
  return (
    <div className="app-container">
      <header className="header">
        <h1 style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: "bold", fontSize: "7rem" }}>Penang</h1>
        <h2 style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif", fontStyle: "italic", fontSize: "2rem" }}>Food & Beverage</h2>

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
        {/* Add food and beverage content */}
      </main>
      <footer className="footer">
        <p>&copy; 2024 CAT Projects</p>
      </footer>
    </div>
  );
}

export default FoodBeverage;
