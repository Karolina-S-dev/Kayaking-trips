import Footer from "./Home/Footer";
import Header from "./Home/Header";
import ScrollToTop from "./Home/ScrollToTop";
import TripsHero from "./Trips/TripsHero";
import "../assets/css/trips.css";
import TripsChoice from "./Trips/TripsChoice";
import FamilyTrips from "./Trips/FamilyTrips";
import OneDayTrips from "./Trips/OneDayTrips";
import LongTrips from "./Trips/LongTrips";


const TripsScreen = () => {
  return (
    <>
      <Header />
      <TripsHero />
      <TripsChoice/>
      <FamilyTrips/>
      <OneDayTrips/>
      <LongTrips/>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default TripsScreen;
