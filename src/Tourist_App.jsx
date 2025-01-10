import "./Tourist_App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLocationDot,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { Link } from "react-router-dom";

function App() {
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
          Penang{" "}
        </h1>
        <h2
          style={{
            fontFamily: "'Comic Sans MS', cursive, sans-serif",
            fontStyle: "italic",
            fontSize: "2rem",
          }}
        >
          Tourist
        </h2>

        {/* Add a container for the boxes */}
        <div className="small_box_container">
          <Link to="/" className="custom-link-topic">
            <section className="small_box1">Main </section>
          </Link>
          <Link to="/food-beverage" className="custom-link-topic">
            <section className="small_box1">Food & Beverage</section>
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
        <p style={{ color: "gray", fontSize: "0.9rem" }}>
          Discover the wonders of Penang!
        </p>
        <p style={{ color: "gray", fontSize: "0.9rem" }}>
          Begin your journey with the Tourist Attractions.
        </p>
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "bold",
            color: "white",
            letterSpacing: "0.2rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            textAlign: "center",
            fontSize: "6vw",
          }}
        >
          Top 3 Tourist Location
        </p>
        <section className="card">
          <h2 style={{ fontWeight: "bold" }}>
            {" "}
            1. Kek Lok Si Temple, Air Itam
          </h2>
          <img
            src="/photo/kek_lok_si.jpg"
            alt="Kek Lok Si Temple"
            className="card-image"
          />
          <section>
            One of the biggest and most recognizable Buddhist temples in
            Southeast Asia is the Kek Lok Si Temple, which is situated in Air
            Itam, Penang. Known as the Temple of Supreme Bliss, this magnificent
            complex is a popular tourist destination in Penang and an important
            place of pilgrimage for Buddhists worldwide.In addition to being a
            religious site, Kek Lok Si Temple is a marvel of architecture and
            culture. This famous temple in Penang provides an incredibly
            enriching experience, whether you&apos;re looking for peace,
            breathtaking views, or a greater understanding of Buddhism.
            <h4>
              <FontAwesomeIcon icon={faMoneyBill} />
              Entrance Fee:
            </h4>
            Free
            <h4>
              <FontAwesomeIcon icon={faClock} />
              Available on:{" "}
            </h4>
            Open daily - 8:30am to 5:30pm
            <h4>
              {" "}
              <FontAwesomeIcon icon={faPhone} />{" "}
              <a
                href="+60 48283317"
                className="custom-link"
                rel="noopener noreferrer"
              >
                +60 48283317
              </a>
            </h4>
            <h4>
              {" "}
              <FontAwesomeIcon icon={faGlobe} />{" "}
              <a
                href="http://kekloksitemple.com"
                className="custom-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                http://kekloksitemple.com{" "}
              </a>{" "}
            </h4>
            <h4>
              <FontAwesomeIcon icon={faLocationDot} />
              <a
                href="https://www.google.com/maps/place/kek+lok+si/data=!4m2!3m1!1s0x304ac2185dfc8665:0x2c9084ea7f433ec4?sa=X&ved=1t:155783&ictx=111"
                className="custom-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Jln Balik Pulau, 11500 Ayer Itam, Pulau Pinang
              </a>
            </h4>
          </section>
          <section>
            <h2 style={{ fontWeight: "bold" }}>2. ESCAPE Penang</h2>
            <img
              src="/photo/penang-hill.jpeg"
              alt="Penang Hill"
              className="card-image"
            />
            <p>
              Penang Hill, located in Air Itam, Penang, is one of the most
              iconic and well-loved attractions in Malaysia. Known for its
              serene environment and breathtaking views, Penang Hill offers
              visitors a unique blend of natural beauty, history, and modern
              amenities. As the first colonial hill station in Southeast Asia,
              it holds a significant place in Penang&apos;s history and remains
              a must-visit destination.
            </p>
            <img
              src="/photo/penang-hill2.jpg"
              alt="Penang Hill"
              className="card-image"
            />
            <p>
              Penang Hill has a range of activities, such as the well-known Sky
              Walk and The Habitat, which provides immersive experiences with
              the island&apos;s lush rainforest, in addition to its cool,
              refreshing environment. Penang Hill offers a memorable getaway
              from the city, whether you&apos;re admiring the expansive views of
              George Town and the Penang Bridge, discovering the abundant
              biodiversity, or just taking in the peace and quiet.
            </p>
            <p>
              For those who enjoy the outdoors, history, or tranquility amid
              clouds, this charming hideaway is ideal. All visitors are
              guaranteed a great experience because to Penang Hil&apos;s unique
              blend of natural appeal and cultural legacy.
            </p>
            <h4>
              <FontAwesomeIcon icon={faMoneyBill} />
              Entrance Fee:
            </h4>
            <div>
              <p>
                <strong>Malaysian Citizens (MyKad/MyKid holders):</strong>
              </p>
              <p>
                -Adults (13-59 years old): RM16 (Normal Lane), RM40 (Fast Lane)
              </p>
              <p>
                -Children (4-12 years old): RM8 (Normal Lane), RM20 (Fast Lane)
              </p>
              <p>
                -Senior Citizens (60 years and above): RM8 (Normal and Fast
                Lane)
              </p>

              <p>
                <strong>Non-Malaysian Citizens:</strong>
              </p>
              <p>
                -Adults (13-59 years old): RM30 (Normal Lane), RM80 (Fast Lane)
              </p>
              <p>
                -Children (4-12 years old): RM15 (Normal Lane), RM40 (Fast Lane)
              </p>
              <p>
                -Senior Citizens (60 years and above): RM30 (Normal Lane), RM60
                (Fast Lane)
              </p>
            </div>
            <h4>
              <FontAwesomeIcon icon={faClock} />
              Available on:{" "}
            </h4>
            Open daily - 6:30am to 11:00pm
            <h4>
              {" "}
              <FontAwesomeIcon icon={faPhone} />{" "}
              <a
                href="+604 8288880"
                className="custom-link"
                rel="noopener noreferrer"
              >
                +60 48288880
              </a>
            </h4>
            <h4>
              {" "}
              <FontAwesomeIcon icon={faGlobe} />{" "}
              <a
                href="https://www.penanghill.gov.my/index.php/en/"
                className="custom-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                https://www.penanghill.gov.my{" "}
              </a>{" "}
            </h4>
            <h4>
              <FontAwesomeIcon icon={faLocationDot} />
              <a
                href="https://www.google.com/maps/place/Penang+Hill/@5.4084609,100.2567321,14z/data=!3m1!4b1!4m6!3m5!1s0x304ac28738d4ea43:0xf862c72e1eb12bb9!8m2!3d5.4084613!4d100.2773317!16zL20vMDYwcnhk?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                className="custom-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                11500 Bukit Bendera, Penang
              </a>
            </h4>
          </section>
          <section>
            <h2 style={{ fontWeight: "bold" }}>3.The Top@ Komtar Penang</h2>
            <img src="/photo/komtar.jpg" alt="Komtar" className="card-image" />
            <p>
              The Top Komtar Penang is a premier entertainment and tourist
              destination located in the iconic Komtar Tower in George Town,
              Penang. As one of the tallest buildings in Malaysia, it offers a
              blend of thrilling attractions, breathtaking views, and
              family-friendly activities. The Top provides an unforgettable
              experience, making it a must-visit for locals and tourists alike.
            </p>
            <img src="/photo/komtar2.jpg" alt="Komtar" className="card-image" />
            <p>
              The Rainbow Skywalk, a glass bridge on the 68th floor that
              provides expansive views over George Town, the Penang shoreline,
              and beyond, is one of the main attractions. Visitors can enjoy a
              different view of the landscape from the Observatory Deck, which
              is located on the same level. The Jurassic Research Center, Tech
              Dome Penang, and Penang State Gallery are a few examples of indoor
              attractions that combine fun and education for visitors of all
              ages.
            </p>
            <img
              src="/photo/komtar3.jpeg"
              alt="Komtar"
              className="card-image"
            />
            <p>
              The Top Komtar is a flexible location for a range of events since
              it also has food options and event spaces. Its blend of
              entertainment, culture, and leisure guarantees that guests depart
              with a greater understanding of Penang&apos;s dynamic personality
              and contemporary charm.
            </p>
            <h4>
              <FontAwesomeIcon icon={faMoneyBill} />
              Entrance Fee:
            </h4>
            Start from RM48
            <h4>
              <FontAwesomeIcon icon={faClock} />
              Available on:{" "}
            </h4>
            <p>Open daily - 10:00am to 10:00pm</p>
            <p>Tuseday: 10:00am to 7:00pm</p>
            <h4 style={{ display: "inline-block", marginRight: "1rem" }}>
              <FontAwesomeIcon icon={faPhone} />
              <a
                href="+0123368074"
                className="custom-link"
                rel="noopener noreferrer"
              >
                {" "}
                +60 123368074
              </a>
            </h4>
            <h4 style={{ display: "inline-block" }}>/ &nbsp;</h4>
            <h4 style={{ display: "inline-block" }}>
              <a
                href="+0172890366"
                className="custom-link"
                rel="noopener noreferrer"
              >
                {" "}
                +60 172890366
              </a>
            </h4>
            <h4>
              {" "}
              <FontAwesomeIcon icon={faGlobe} />{" "}
              <a
                href="https://thetop.com.my/"
                className="custom-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                https://thetop.com.my{" "}
              </a>{" "}
            </h4>
            <h4>
              <FontAwesomeIcon icon={faLocationDot} />
              <a
                href="https://www.google.com/maps/place/the+top+penang+location/data=!4m2!3m1!1s0x304ac395ce63cafb:0x786a38ba7f1ba486?sa=X&ved=1t:155783&ictx=111"
                className="custom-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                1, Jln Penang, 10000 George Town, Pulau Pinang
              </a>
            </h4>
          </section>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2025 Visit Penang. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
