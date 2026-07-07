import Hero from "./Home/Hero";
import Footer from "./Home/Footer";
import AboutUs from "./Home/AboutUs";
import OfferList from "./Home/OfferList";
import GalleryHome from "./Home/GalleryHome";
import Features from "./Home/Features";
import WhyUs from "./Home/WhyUs";
import ScrollToTop from "./Home/ScrollToTop";
import FaqListHome from "./Home/FaqListHome";
import GoogleReviews from "./Home/GoogleReviews";

const HomeScreen = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Features />
      <OfferList />
      <WhyUs />
      <GalleryHome />
      <FaqListHome />
      <GoogleReviews />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default HomeScreen;
