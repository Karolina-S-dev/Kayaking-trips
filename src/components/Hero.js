import kayakLogo from "../assets/icons/kayaking-logo.png";

const Hero = () => {
  return (
    <section className="hero-section flex-col">
      <header className="hero-header flex-row">
        <img className="hero-logo" src={kayakLogo} alt="Kayak Logo" />
        <nav>
          <ul class="nav-links flex-row">
            <li>
              <a href="" class="nav-button">
                Strona główna
              </a>
            </li>
            <li>
              <a href="" class="nav-button">
                O nas
              </a>
            </li>
            <li>
              <a href="" class="nav-button">
                Oferta
              </a>
            </li>
            <li>
              <a href="" class="nav-button">
                Galeria
              </a>
            </li>
            <li>
              <a href="" class="nav-button">
                FAQ
              </a>
            </li>
            <li>
              <a href="" class="nav-button nav-button--contact">
                <ion-icon name="mail-outline"></ion-icon>
                Kontakt
              </a>
            </li>
          </ul>
          <ion-icon id="nav-burger" name="reorder-three"></ion-icon>
        </nav>
      </header>
      <div className="hero-content flex-col">
        <h1 className="hero-title-dancing-script">Przeżyj przygodę</h1>
        <h1 className="hero-title">na rzece Nidzie</h1>

        <p className="hero-description">
          Niezapomniane spływy kajakowe dla Ciebie, Twojej rodziny i przyjaciół
        </p>
        <div class="home-hero-buttons flex-row">
          <a href="" class="btn btn-primary">
            <ion-icon name="newspaper-outline"></ion-icon>
            Zobacz naszą ofertę
          </a>
          <a href="" class="btn btn-secondary">
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
