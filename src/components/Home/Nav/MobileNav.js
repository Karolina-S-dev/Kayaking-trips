import { Link, useLocation } from "react-router-dom";
import companyLogo from "../../../assets/img/company-logo.png";
import NavItem from "./NavItem";
import { navUtils } from "../../../utils/HomeScreen/navUtils";

const MobileNav = ({ isMobileNavOpen }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {isMobileNavOpen ? (
        <div className="header-mobile-wrapper">
          <div
            className={`header-section-mobile flex-col ${!isHome ? "header-subpage" : ""} `}
          >
            <Link to="/">
              <img
                className="header-logo-mobile"
                src={companyLogo}
                alt="Company Logo"
              />
            </Link>

            <nav>
              <ul className="nav-links-mobile flex-col">
                {navUtils.map((util, index) => (
                  <li key={util.route}>
                    <NavItem util={util} isMobile={true} />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MobileNav;

//MobileNav -> <NavItem isMobile={true}/>    - navItem to kazdy button
//DesktopNav -> <NavItem isMobile={false}/>
// const NavItem = ({ route, isMobile }) => {
//     //route: /faq
//     const redirect = () =>{
//         // navigate(route)
//     }
//     const isActive = location.pathname === route
//     return ({ isMobile ? <li >

//     </li> : <a>cos tam</a>})
// };

// export default NavItem;
