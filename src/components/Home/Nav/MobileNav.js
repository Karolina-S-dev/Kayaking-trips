import { useLocation } from "react-router-dom";
import companyLogo from "../../../assets/img/company-logo.png";
import NavItem from "./NavItem";

const MobileNav = ({ isMobile }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {isMobile ? (
        <div className="header-mobile-wrapper">
          <div
            className={`header-section-mobile flex-row ${!isHome ? "header-subpage" : ""}`}
          >
            <a href="/">
              <img
                className="header-logo"
                src={companyLogo}
                alt="Company Logo"
              />
            </a>
            <nav>
              <ul className="nav-links-mobile flex-row">
                <li>
                  <NavItem
                    text={"Strona główna"}
                    route={"/"}
                    icon={<ion-icon name="home-outline"></ion-icon>}
                  />
                </li>
                <li>
                  <NavItem
                    text={"Trasy spływów"}
                    route={"/trasy-splywow"}
                    icon={<ion-icon name="git-branch-outline"></ion-icon>}
                  />
                </li>
                <li>
                  <NavItem
                    text={"Galeria"}
                    route={"/galeria"}
                    icon={<ion-icon name="image-outline"></ion-icon>}
                  />
                </li>
                <li>
                  <NavItem
                    text={"FAQ"}
                    route={"/faq"}
                    icon={<ion-icon name="help-circle-outline"></ion-icon>}
                  />
                </li>
                <li>
                  <NavItem
                    text={"PL | ENG"}
                    route={""}
                    icon={<ion-icon name="globe-outline"></ion-icon>}
                  />
                </li>

                <li>
                  <NavItem
                    text={"Kontakt"}
                    route={"/kontakt"}
                    type={"contact"}
                  />
                </li>
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
