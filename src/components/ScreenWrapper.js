import { useRef } from "react";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import ScrollToTop from "./Home/ScrollToTop";
import Hero from "./Home/Hero";

const ScreenWrapper = ({ children, isHome = false }) => {
  const headerRef = useRef(null);

  return (
    <>
      {isHome ? (
        <Hero headerRef={headerRef} />
      ) : (
        <Header headerRef={headerRef} />
      )}
      {children}
      <Footer />
      <ScrollToTop headerRef={headerRef} />
    </>
  );
};

export default ScreenWrapper;
