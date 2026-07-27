import { useLocation, useNavigate } from "react-router-dom";


const NavItem = ({ route, isMobile, text, type, icon = null }) => {
  const navigate = useNavigate();

  const location = useLocation();
  const isActive = location.pathname === route;

  const redirect = () => {
    navigate(route);
  };

  return (
    <>
      {isMobile ? (
        //navItem for mobile
        <>
          {type === "contact" ? (
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
              <span>{text}</span>
            </button>
          ) : null}
          {type === "common" ? (
            <button
              onClick={redirect}
              className={`nav-button ${isActive ? "active-nav-button" : ""}`}
            >
              <div className="mobile-icon white">{icon}</div>
              <span className="white">{text}</span>
            </button>
          ) : null}
        </>
      ) : (
        //navItem for desktop
        <>
          {type === "contact" ? (
            <button
              onClick={redirect}
              className="nav-button nav-button--contact navy-blue "
            >
              <div>
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <span>{text}</span>
            </button>
          ) : null}

          {type === "common" ? (
            <button
              onClick={redirect}
              className={`nav-button ${isActive ? "active-nav-button" : ""}`}
            >
              <span className="white">{text}</span>
            </button>
          ) : null}
        </>
      )}
    </>
  );
};

export default NavItem;
