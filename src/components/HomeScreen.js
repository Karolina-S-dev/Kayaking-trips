import Hero from "./Home/Hero";
import Footer from "./Home/Footer";
import AboutUs from "./Home/AboutUs";
import Offer from "./Home/Offer";
import GalleryHome from "./Home/GalleryHome";
import Features from "./Home/Features";
import WhyUs from "./Home/WhyUs";
import ScrollToTop from "./Home/ScrollToTop";

const HomeScreen = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Features />
       <Offer />
      <WhyUs />
      <GalleryHome />
      <Footer />
      <ScrollToTop/>
    </>
  );
};

export default HomeScreen;
