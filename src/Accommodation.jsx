import { Link } from 'react-router-dom';
import './Tourist_App.css';

function Accommodation() {
  return (
    <div className="app-container">
      <header className="header">
        <h1 style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: "bold", fontSize: "7rem" }}>Penang</h1>
        <h2 style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif", fontStyle: "italic", fontSize: "2rem" }}>Accomodation</h2>

        <div className="small_box_container">
          <Link to="/" className="custom-link-topic">
            <section className="small_box1">Main Page</section>
          </Link>
          <Link to="/tourist" className="custom-link-topic">
            <section className="small_box1">Tourist</section>
          </Link>
          <Link to="/food-beverage" className="custom-link-topic">
            <section className="small_box1">Food & Beverage</section>
          </Link>
          <Link to="/entertainment" className="custom-link-topic">
            <section className="small_box1">Entertainment</section>
          </Link>
        </div>
      </header>
      <main className="main">
        <h2>Discover the Best Accomodation in Penang!</h2>
        <p style={{fontFamily: "'Poppins', sans-serif",fontWeight:"bold",color:'white',letterSpacing: "0.2rem",textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", textAlign:'center',fontSize:'3.5rem'}}>Top 3 Tourist Accomodation</p>
        <section className = "card">
        <h2 style={{fontWeight:"bold"}}> Eastern & Oriental Hotel</h2>
        <img src="/photo/EO_Hotel.png" alt="Eastern & Oriental Hotel" className="card-image" />
        <p>
        The Eastern & Oriental Hotel, affectionately known as the E&O Hotel, stands as a timeless and iconic landmark in the heart of George Town. Established in 1885 by the Sarkies Brothers, who also founded the renowned Raffles Hotel in Singapore, the E&O Hotel captures the elegance of a bygone era with its old-world charm.    
        Staying at the E&O offers guests a unique opportunity to immerse themselves in Penang&apos;s rich colonial heritage. The lavishly designed suites and rooms are adorned with elegant furnishings, while the sprawling grounds feature beautifully landscaped gardens and a stunning swimming pool.
        The hotel is also home to several exceptional dining options, offering a variety of exquisite cuisines. Guests can enjoy traditional English afternoon tea in the colonial-inspired Palm Court or indulge in fine dining at Sarkies. Afternoon tea at the E&O is a quintessential Penang experience and a must-do, even if your visit to Penang is limited to a single day
        </p>

        <h2 style={{fontWeight:"bold"}}> Ren I Tang Heritage Inn</h2>
        <img src="/photo/RenITang_Hotel.png" alt="Ren I Tang Heritage Inn" className="card-image" />
        <p>
        Ren I Tang Heritage Inn, nestled in the heart of George Town, occupies a beautifully restored 19th-century building. This boutique hotel spans three interconnected shop houses and exudes historical charm. It features a herbal courtyard, a cozy restaurant, and a small museum on the ground floor, which once served as a medical hall.
        The property showcases authentic architectural elements, including air wells, timber flooring, traditional five-foot walkways, steep heritage wooden staircases, and Chinese roof tiles. Every corner of Ren I Tang radiates a sense of history and character, making it a truly unique and memorable place to stay.
        </p>

        <h2 style={{fontWeight:"bold"}}> The Edison</h2>
        <img src="/photo/Edison_Hotel.png" alt="The Edison" className="card-image" />
        <p>

        Tucked away from the lively UNESCO Heritage district of George Town, The Edison is a beautifully restored 20th-century mansion with a distinctive art deco flair. The property retains its original charm, featuring an open-air courtyard, marble-tiled floors, and intricate Peranakan tiles, while vibrant accents and modern furnishings provide a fresh and inviting atmosphere for guests.
        The rooms are spacious and thoughtfully designed, but it&pos;s the communal areas that truly set The Edison apart. Guests can enjoy a 24-hour lounge stocked with snacks, fresh fruit, drinks, and a Franke coffee machine. This lounge opens to an al fresco dining area complete with a picturesque landscaped pond. Upstairs, a cozy lounge with wooden rocking chairs offers the perfect spot to relax with a book. For those seeking tranquility, the swimming pool provides a peaceful retreat from the city&apos;s hustle and bustle.
        </p>



        </section>
        
      </main>
      <footer className="footer">
        <p>&copy; 2025 CAT Projects</p>
      </footer>
    </div>
  );
}

export default Accommodation;


