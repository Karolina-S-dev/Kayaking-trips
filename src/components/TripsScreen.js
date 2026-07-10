import "../assets/css/trips.css";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import ScrollToTop from "./Home/ScrollToTop";
import TripsHero from "./Trips/TripsHero";
import TripsChoice from "./Trips/TripsChoice";
import FamilyTrips from "./Trips/FamilyTrips";
import OneDayTrips from "./Trips/OneDayTrips";
import LongTrips from "./Trips/LongTrips";
import { useEffect } from "react";
import { usePageContext } from "../context/pageContext";

const TripsScreen = () => {
  const { setActivePage } = usePageContext();

  useEffect(() => {
    setActivePage("/trips");
  }, [setActivePage]);

  return (
    <>
      <Header />
      <TripsHero />
      <TripsChoice />
      <FamilyTrips />
      <OneDayTrips />
      <LongTrips />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default TripsScreen;
