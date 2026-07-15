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
      {!isMobile ? (
        //navItem for mobile

        type === "contact" ? (
          <button
            onClick={redirect}
            className={`nav-button nav-button--contact navy-blue `}
          >
            <span>{text}</span>
          </button>
        ) : (
          <button
            onClick={redirect}
            className={`nav-button ${activePage === route ? "active-nav-button" : ""}`}
          >
            <div className="mobile-icon white">{icon}</div>
            <span className="white">{text}</span>
          </button>
        )
      ) : //navItem for desktop

      type === "contact" ? (
        <button
          onClick={redirect}
          className={`nav-button nav-button--contact navy-blue `}
        >
          <ion-icon name="mail-outline"></ion-icon>
          <span>{text}</span>
        </button>
      ) : (
        <button
          onClick={redirect}
          className={`nav-button ${activePage === route ? "active-nav-button" : ""}`}
        >
          <span className="white">{text}</span>
        </button>
      )}
    </>
  );
};

export default NavItem;
