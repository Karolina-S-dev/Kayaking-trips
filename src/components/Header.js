import kayakLogo from "../assets/img/company-logo.png";

const Header = () => {
  return (
    <header className="hero-header flex-row">
      <img className="hero-logo" src={kayakLogo} alt="Kayak Logo" />

      <nav>
        <ul className="nav-links flex-row">
          <li>
            <a className="nav-button">
              <span>Strona główna</span>
            </a>
          </li>
          <li>
            <a className="nav-button">
              <span>Spływy</span>
            </a>
          </li>
          <li>
            <a className="nav-button">
              <span>Galeria</span>
            </a>
          </li>
          <li>
            <a className="nav-button">
              <span>FAQ</span>
            </a>
          </li>
          <li>
            <a className="nav-button nav-button--contact">
              <ion-icon name="mail-outline"></ion-icon>
              <span>Kontakt</span>
            </a>
          </li>
        </ul>
        <ion-icon id="nav-burger" name="reorder-three"></ion-icon>
      </nav>
    </header>
  );
};

export default Header;
