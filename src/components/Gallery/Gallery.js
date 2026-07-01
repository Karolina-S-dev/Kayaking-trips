import "../../assets/css/gallery.css";
import galleryPhoto1 from "../../assets/img/gallery/gallery-photo-1.png";
import galleryPhoto2 from "../../assets/img/gallery/gallery-photo-2.png";
import galleryPhoto3 from "../../assets/img/gallery/gallery-photo-3.png";
import galleryPhoto4 from "../../assets/img/gallery/gallery-photo-4.png";
import galleryPhoto5 from "../../assets/img/gallery/gallery-photo-5.png";
import galleryPhoto6 from "../../assets/img/gallery/gallery-photo-6.png";
import galleryPhoto7 from "../../assets/img/gallery/gallery-photo-7.png";
import galleryPhoto8 from "../../assets/img/gallery/gallery-photo-8.png";
import galleryPhoto9 from "../../assets/img/gallery/gallery-photo-9.png";
import galleryPhoto10 from "../../assets/img/gallery/gallery-photo-10.png";
import galleryPhoto11 from "../../assets/img/gallery/gallery-photo-11.png";
import galleryPhoto12 from "../../assets/img/gallery/gallery-photo-12.png";
import galleryPhoto13 from "../../assets/img/gallery/gallery-photo-13.png";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="gallery-section">
        <p className="gallery-label">GALERIA</p>
        <p className="gallery-description dark-grey">
          Zobacz piękno rzek, którymi pływamy i atmosferę naszych spływów.
        </p>

        <div className="gallery-content flex-row">
          <div className="gallery-content-img large">
            <img src={galleryPhoto1} alt="Zachód słońca nad rzeką Nidą" />
          </div>
          <div className="gallery-content-img ">
            <img src={galleryPhoto2} alt="Firmowy bus" />
          </div>
          <div className="gallery-content-img">
            <img src={galleryPhoto3} alt="Zdjęcie ze spływu kajakowego" />
          </div>
          <div className="gallery-content-img">
            <img src={galleryPhoto11} alt="Zdjęcie rzeki Nidy" />
          </div>
          <div className="gallery-content-img">
            <img src={galleryPhoto10} alt="Świetna atmosfera na kajakach" />
          </div>
          <div className="gallery-content-img">
            <img src={galleryPhoto4} alt="Zdjęcie ze spływu kajakowego" />
          </div>
          <div className="gallery-content-img">
            <img
              src={galleryPhoto9}
              alt="Grupa wyruszająca na spływ kajakowy"
            />
          </div>
          <div className="gallery-content-img">
            <img src={galleryPhoto5} alt="Zdjęcie kajaków" />
          </div>
          <div className="gallery-content-img">
            <img src={galleryPhoto7} alt="Zdjęcie kajaków na przyczepie" />
          </div>
          <div className="gallery-content-img">
            <img src={galleryPhoto8} alt="Uczestnicy wycieczki w kajakach" />
          </div>
          <div className="gallery-content-img large">
            <img src={galleryPhoto13} alt="Zimorodek" />
          </div>
          <div className="gallery-content-img">
            <img src={galleryPhoto6} alt="Grupa przy brzegu" />
          </div>
          <div className="gallery-content-img">
            <img src={galleryPhoto12} alt="Bóbr" />
          </div>
        </div>

        <div className="share-div flex-row">
          <div className="flex-row ion-icon-row">
            <ion-icon name="image-outline"></ion-icon>
            <div className="flex-col">
              <p className="share-title">Masz zdjęcia z naszych spływów?</p>
              <p className="share-description">
                Podziel się nimi z nami! Najlepsze zdjęcia opublikujemy w naszej
                galerii.
              </p>
            </div>
          </div>
          <button
            className="share-button white"
            onClick={() => {
              navigate("/contact");
            }}
          >
            WYŚLIJ ZDJĘCIA
          </button>
        </div>
      </section>
    </>
  );
};

export default Gallery;
