import "../assets/css/gallery.css";
import "../assets/css/queries.css";
import "../assets/css/queries-GalleryScreen.css";
import { useEffect } from "react";
import { usePageContext } from "../context/pageContext";
import Gallery from "./GalleryScreen/Gallery";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import ScrollToTop from "./Home/ScrollToTop";

const GalleryScreen = () => {
  const { setActivePage } = usePageContext();

  useEffect(() => {
    setActivePage("/galeria");
  }, [setActivePage]);

  return (
    <>
      <Header />
      <Gallery />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default GalleryScreen;
