import kayakingMovie from "../assets/movies/movie_kayaking.mp4";

const Hero = () => {
  return (
    <section className="hero-section flex-col">
      <video
        src={kayakingMovie}
        autoPlay
        muted
        loop
        playsInline
        type="video/mp4"
        className="hero-video"
      ></video>
      <div className="hero-content flex-col">
        <h1 className="hero-title-dancing-script">Przeżyj przygodę</h1>
        <h1 className="hero-title">na rzece Nidzie</h1>

        <p className="hero-description">
          Niezapomniane spływy kajakowe dla Ciebie, Twojej rodziny i przyjaciół
        </p>
        <div className="home-hero-buttons flex-row">
          <a className="btn btn-primary">
            <ion-icon name="newspaper-outline"></ion-icon>
            Zobacz dostępne terminy
          </a>
          <a className="btn btn-secondary">
            <ion-icon name="call"></ion-icon>
            Zadzwoń
          </a>
        </div>
      </div>
      <div className="hero-wave">
        <svg viewBox="0 0 1440 180" preserveAspectRatio="none">
          <path
            d="
      M0,80
      C120,140 220,20 340,70
      C460,120 560,160 720,90
      C900,10 980,140 1120,100
      C1260,60 1340,30 1440,80
      L1440,180
      L0,180
      Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
