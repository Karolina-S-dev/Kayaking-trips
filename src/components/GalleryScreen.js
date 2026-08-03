import "../assets/css/gallery.css";
import "../assets/css/queries.css";
import "../assets/css/queries-GalleryScreen.css";
import { useEffect } from "react";
import { usePageContext } from "../context/pageContext";
import Gallery from "./GalleryScreen/Gallery";
import ScreenWrapper from "./ScreenWrapper";

const GalleryScreen = () => {
  const { setActivePage } = usePageContext();

  useEffect(() => {
    setActivePage("/galeria");
  }, [setActivePage]);

  return (
    <ScreenWrapper>
      <Gallery />
    </ScreenWrapper>
  );
};

export default GalleryScreen;
