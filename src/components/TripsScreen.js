import "../assets/css/trips.css";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import ScrollToTop from "./Home/ScrollToTop";
import TripsHero from "./Trips/TripsHero";
import { useEffect } from "react";
import { usePageContext } from "../context/pageContext";
import TripsChoice from "./Trips/TripsChoice";

const TripsScreen = () => {
  const { setActivePage } = usePageContext();

  useEffect(() => {
    setActivePage("/trasy-splywow");
  }, [setActivePage]);

  return (
    <>
      <Header />
      <TripsHero />
      <TripsChoice/>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default TripsScreen;
