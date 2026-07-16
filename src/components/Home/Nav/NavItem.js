import { useNavigate } from "react-router-dom";
import { usePageContext } from "../../../context/pageContext";

const NavItem = ({ route, isMobile, text, type, icon }) => {
  const { activePage } = usePageContext();
  const navigate = useNavigate();

  //albo tak albo mozna location = useLocation()
  // const is Active = location.pathname === route

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
              className={`nav-button ${activePage === route ? "active-nav-button" : ""}`}
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
              className={`nav-button ${activePage === route ? "active-nav-button" : ""}`}
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
