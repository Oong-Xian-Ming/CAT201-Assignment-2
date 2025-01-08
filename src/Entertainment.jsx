import { Link } from "react-router-dom";
import "./Tourist_App.css";
import "./Entertainment.css";

function Entertainment() {
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
          Entertainment
        </h2>

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
          <Link to="/accommodation" className="custom-link-topic">
            <section className="small_box1">Accommodation</section>
          </Link>
        </div>
      </header>

      <main className="main-content">
        <p style={{ color: "gray", fontSize: "0.9rem" }}>
          Discover the wonders of Penang!
        </p>
        <p style={{ color: "gray", fontSize: "0.9rem" }}>
          Begin your journey with the Endless Entertainments.
        </p>
        <h2>Endulge in only the Best Entertainment in Penang!</h2>
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "bold",
            color: "white",
            letterSpacing: "0.2rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            textAlign: "center",
            fontSize: "3.5rem",
          }}
        >
          Top 5 Entertainments
        </p>
        <div className="spot">
          <p className="rectangle-body-text">Penang Hill-The Habitat</p>
          <img
            src="https://www.exotravel.com/blog/wp-content/uploads/2018/10/Malaysia-The-Habitat-Penang-Hill-4-Treetop-Walk3.jpg"
            alt="Penang Hill - The Habitat"
            className="spot-image"
          />
          <p className="spot-description">
            A visit to Penang Hill is a must when you&apos;re in Penang. Head up
            to the island&apos;s highest vantage point at The Habitat, where you
            can take in a breathtaking 360-degree view of Penang Island and
            experience the wonders of its ancient 130-million-year-old
            rainforest. Don&apos;t miss the exciting and revitalizing
            230-meter-long Langur Way Canopy Walk, offering an unforgettable
            perspective of the natural beauty around you!
          </p>
        </div>

        <div className="spot">
          <p className="rectangle-body-text">
            Entopia, by Penang Butterfly Farm
          </p>
          <img
            src="https://res.cloudinary.com/dcm/image/upload/w_800,h_400,f_auto,dpr_2.0/v1/prod/b/butterfly.jpg"
            alt="Spot 3"
            className="spot-image"
          />
          <p className="spot-description">
            Entopia by Penang Butterfly Farm is a perfect destination for
            families and butterfly enthusiasts alike. This vibrant attraction is
            home to 15,000 butterflies soaring freely, alongside more than 200
            plant species, all set against the backdrop of cascading waterfalls,
            serene ponds, caves, and beautifully designed gardens. As one of
            Malaysia&apos;s largest butterfly gardens, Entopia offers an
            enchanting experience for nature lovers of all ages.
          </p>
        </div>

        <div className="spot">
          <p className="rectangle-body-text">
            Georgetown&apos;s Unique Street Art
          </p>
          <img
            src="https://findingbeyond.com/app/uploads/2017/03/george-town-georgetown-street-art-penang-malaysia-4.jpg"
            alt="Spot 4"
            className="spot-image"
          />
          <p className="spot-description">
            Embrace your inner tourist for a day by exploring the renowned
            street art scattered throughout Georgetown. A prime location to
            discover these captivating artworks is Armenian Street, home to
            iconic pieces like the Brother and Sister on a Swing, Boy on
            Motorbike, and Kids on Bicycle, among others. It’s a fantastic way
            to immerse yourself in the vibrant art scene of Penang.
          </p>
        </div>

        <div className="spot">
          <p className="rectangle-body-text">WonderFood Museum</p>
          <img
            src="https://th.bing.com/th/id/R.e99944a95306fab53ce29a2b85541719?rik=8On86E%2bavCRKdQ&riu=http%3a%2f%2ffravel.co%2fwp-content%2fuploads%2f2020%2f08%2fwonderfood-museum-in-penang.jpg&ehk=%2fNrHJEPI%2bUhBbbDY9p3zqxFNSEWgAXH53DubjqDrWBE%3d&risl=&pid=ImgRaw&r=0"
            alt="Spot 4"
            className="spot-image"
          />
          <p className="spot-description">
            What better way to explore Malaysia&apos;s rich culinary heritage
            than by visiting a museum devoted entirely to food? The WonderFood
            Museum in Penang offers a unique experience with its giant replicas
            of Malaysian dishes, along with fun and detailed exhibits showcasing
            international culinary delights. It’s a must-see for food lovers and
            anyone looking to indulge in the flavors of Malaysia through art!
          </p>
        </div>

        <div className="spot">
          <p className="rectangle-body-text">Penang&apos;s unique Speakasies</p>
          <img
            src="https://thepenangite.com/wp-content/uploads/2019/11/hidden-bar-penang-the-mandarin02-768x768.jpg"
            alt="Spot 4"
            className="spot-image"
          />
          <p className="spot-description">
            Penang boasts a vibrant nightlife, with its array of beach bars and
            cocktail lounges, but for a truly thrilling experience, why not add
            some adventure to your bar-hopping journey? Venture out to discover
            the island’s secret hidden bars. Regulars of Georgetown will be
            familiar with its charming speakeasies tucked away throughout the
            historic city, offering a unique twist to your night out.
          </p>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2025 CAT Projects.</p>
      </footer>
    </div>
  );
}

export default Entertainment;
