import "../assets/css/trips.css";
import "../assets/css/queries-TripsScreen.css";
import TripsHero from "./TripsScreen/TripsHero";
import { useEffect } from "react";
import { usePageContext } from "../context/pageContext";
import TripsChoice from "./TripsScreen/TripsChoice";
import ScreenWrapper from "./ScreenWrapper";

const TripsScreen = () => {
  const { setActivePage } = usePageContext();

  useEffect(() => {
    setActivePage("/trasy-splywow");
  }, [setActivePage]);

  return (
    <ScreenWrapper>
      <TripsHero />
      <TripsChoice />
    </ScreenWrapper>
  );
};

export default TripsScreen;
