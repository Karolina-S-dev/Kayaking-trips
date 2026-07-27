import { useLocation, useNavigate } from "react-router-dom";

const NavItem = ({ isMobile, util }) => {
  const navigate = useNavigate();

  const location = useLocation();
  const isActive = location.pathname === util.route;

  const redirect = () => {
    navigate(util.route);
  };

  return (
    <>
      {util.type === "contact" && (
        <button
          onClick={redirect}
          className={`nav-button nav-button--contact navy-blue `}
        >
          <div>
            <ion-icon
              className="contact-mobile-icon"
              name="mail-outline"
            ></ion-icon>
          </div>
          <span>{util.text}</span>
        </button>
      )}

      {util.type === "common" && (
        <button
          onClick={redirect}
          className={`nav-button ${isActive ? "active-nav-button" : ""}`}
        >
          {isMobile && <div className="mobile-icon white">{util.icon}</div>}

          <span className="white">{util.text}</span>
        </button>
      )}
    </>
  );
};

export default NavItem;
