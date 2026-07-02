import galleryPhoto10 from "../../assets/img/gallery/gallery-photo-10.png";
import galleryPhoto3 from "../../assets/img/gallery/gallery-photo-3.png";
import galleryPhoto11 from "../../assets/img/gallery/gallery-photo-11.png";
import galleryPhoto14 from "../../assets/img/gallery/gallery-photo-14.png";
import galleryPhoto1 from "../../assets/img/gallery/gallery-photo-1.png";
import galleryPhoto9 from "../../assets/img/gallery/gallery-photo-9.png";
import { Link } from "react-router-dom";

const GalleryHome = () => {
  return (
    <>
      <section className="gallery-home-section flex-col">
        <p className="green gallery-home-label">Galeria</p>
        <p className="dark-grey gallery-home-description">
          Kadry z naszych spływów, ognisk i najpiękniejszych zakątków Nidy.
        </p>
        <div className="gallery-home-div flex-row">
          <img src={galleryPhoto3} alt="Zdjęcie ze spływu kajakowego" />
          <img
            className="width10"
            src={galleryPhoto1}
            alt="Zachód słońca nad rzeką Nidą"
          />
          <img src={galleryPhoto11} alt="Zdjęcie rzeki Nidy" />
          <img src={galleryPhoto10} alt="Świetna atmosfera na kajakach" />
          <img className="width10" src={galleryPhoto14} alt="Ognisko" />
          <img src={galleryPhoto9} alt="Grupa wyruszająca na spływ kajakowy" />
        </div>
        <Link to="/gallery">
          Zobacz więcej zdjęć<ion-icon name="arrow-forward-outline"></ion-icon>
        </Link>
        <a href="/gallery" className="gallery-home-button flex-row">
          Zobacz więcej zdjęć
        </a>
      </section>
    </>
  );
};

export default GalleryHome;
