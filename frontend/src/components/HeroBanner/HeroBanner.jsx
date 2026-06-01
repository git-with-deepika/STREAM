import "./HeroBanner.css";

function HeroBanner() {
  return (
    <div className="hero-banner">

      <div className="hero-content">

        <h1>Featured Stream</h1>

        <p>
          Discover trending videos, creators and premium content
          on StreamNest.
        </p>

        <div className="hero-buttons">
          <button className="watch-btn">
            Watch Now
          </button>

          <button className="info-btn">
            More Info
          </button>
        </div>

      </div>

    </div>
  );
}

export default HeroBanner;