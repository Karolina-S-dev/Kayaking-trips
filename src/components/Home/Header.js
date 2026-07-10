import { useLocation, useNavigate } from "react-router-dom";
import companyLogo from "../../assets/img/company-logo.png";
import { usePageContext } from "../../context/pageContext";

const Header = () => {
  const { activePage } = usePageContext();
  const navigate = useNavigate();
  const handleRedirectHomeScreen = () => {
    navigate("/");
    console.log("activePage w Header:", activePage);
  };

  const handleRedirectTripsScreen = () => {
    navigate("/trips");
  };

  const handleRedirectGalleryScreen = () => {
    navigate("/gallery");
  };
  const handleRedirectFaqScreen = () => {
    navigate("/faq");
  };

  const location = useLocation();
  const isHome = location.pathname === "/";


  return (
    <header
      className={
        isHome
          ? "header-section flex-row"
          : "header-section flex-row header-subpage"
      }
    >
      <a href="/">
        <img className="header-logo" src={companyLogo} alt="Company Logo" />
      </a>
      <nav>
        <ul className="nav-links flex-row">
          <li>
            <button
              onClick={handleRedirectHomeScreen}
              className={`nav-button ${activePage === "/" ? "active-nav-button" : ""}`}
            >
              <span className="white">Strona główna</span>
            </button>
          </li>
          <li>
            <button
              onClick={handleRedirectTripsScreen}
              className={`nav-button ${activePage === "/trips" ? "active-nav-button" : ""}`}
            >
              <span className="white">Trasy spływów</span>
            </button>
          </li>
          <li>
            <button
              onClick={handleRedirectGalleryScreen}
              className={`nav-button ${activePage === "/gallery" ? "active-nav-button" : ""}`}
            >
              <span className="white">Galeria</span>
            </button>
          </li>
          <li>
            <button
              onClick={handleRedirectFaqScreen}
              className={`nav-button ${activePage === "/faq" ? "active-nav-button" : ""}`}
            >
              <span className="white">FAQ</span>
            </button>
          </li>
          <li>
            <button className="nav-button white">PL | ENG</button>
          </li>

          <li>
            <a
              href="/contact"
              className="nav-button nav-button--contact navy-blue"
            >
              <ion-icon name="mail-outline"></ion-icon>
              <span>Kontakt</span>
            </a>
          </li>
        </ul>

        <ion-icon name="apps"></ion-icon>
      </nav>
    </header>
  );
};

export default Header;
