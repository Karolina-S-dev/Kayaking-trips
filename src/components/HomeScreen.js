import Hero from "./Home/Hero";
import AboutUs from "./Home/AboutUs";
import OfferList from "./Home/OfferList";
import GalleryHome from "./Home/GalleryHome";
import Features from "./Home/Features";
import WhyUs from "./Home/WhyUs";
import FaqListHome from "./Home/FaqListHome";
import GoogleReviews from "./Home/GoogleReviews";
import { usePageContext } from "../context/pageContext";
import { useEffect } from "react";
import ScreenWrapper from "./ScreenWrapper";

const HomeScreen = () => {
  const { setActivePage } = usePageContext();

  useEffect(() => {
    setActivePage("/");
  }, [setActivePage]);

  return (
    <ScreenWrapper isHome>
      <AboutUs />
      <Features />
      <OfferList />
      <WhyUs />
      <GalleryHome />
      <FaqListHome />
      <GoogleReviews />
    </ScreenWrapper>
  );
};

export default HomeScreen;
