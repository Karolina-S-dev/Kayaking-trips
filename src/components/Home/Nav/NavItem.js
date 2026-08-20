import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

const NavItem = ({ isMobile, util }) => {
  const navigate = useNavigate();

  const location = useLocation();
  const isActive = location.pathname === util.route;

  const redirect = () => {
    navigate(util.route);
  };

  const { t,i18n } = useTranslation();

  return (
    <>
      {util.type === "contact" && (
        <button
          onClick={redirect}
          className={`nav-button nav-button--contact navy-blue ${isActive && "active-contact-nav-button"} `}
        >
          <div>
            <ion-icon
              className="contact-mobile-icon"
              name="mail-outline"
            ></ion-icon>
          </div>
          <span>{t(util.text)}</span>
        </button>
      )}

      {util.type === "common" && (
        <button
          onClick={redirect}
          className={`nav-button ${isActive ? "active-nav-button" : ""}`}
        >
          {isMobile && <div className="mobile-icon white">{util.icon}</div>}

          <span className="white">{t(util.text)}</span>
        </button>
      )}

      {util.type === "languagePl" && (
        <button
          onClick={() => i18n.changeLanguage("pl")}
          className="nav-button language-pl"
        >
          {isMobile && <div className="mobile-icon white">{util.icon}</div>}
          <ReactCountryFlag countryCode="PL" svg className="emoji-flag"/>
          <span className="white">{util.text}</span>
        </button>
      )}
      {util.type === "languageEng" && (
        <button
          onClick={() => i18n.changeLanguage("en")}
          className="nav-button language-eng"
        >
          {isMobile && <div className="mobile-icon white">{util.icon}</div>}
          <ReactCountryFlag countryCode="GB" svg className="emoji-flag"/>
          <span className="white">{util.text}</span>
        </button>
      )}
    </>
  );
};

export default NavItem;
