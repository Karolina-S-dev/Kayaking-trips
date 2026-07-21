import "../assets/css/trips.css";
import "../assets/css/queries-TripsScreen.css";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import ScrollToTop from "./Home/ScrollToTop";
import TripsHero from "./TripsScreen/TripsHero";
import { useEffect } from "react";
import { usePageContext } from "../context/pageContext";
import TripsChoice from "./TripsScreen/TripsChoice";

const TripsScreen = () => {
  const { setActivePage } = usePageContext();

  useEffect(() => {
    setActivePage("/trasy-splywow");
  }, [setActivePage]);

  return (
    <>
      <Header />
      <TripsHero />
      <TripsChoice />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default TripsScreen;
