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
import galleryPhoto15 from "../../assets/img/gallery/gallery-photo-15.png";
import galleryPhoto16 from "../../assets/img/gallery/gallery-photo-16.png";
import galleryPhoto17 from "../../assets/img/gallery/gallery-photo-17.png";
import galleryPhoto18 from "../../assets/img/gallery/galleryPhoto-18.jpeg";
import galleryPhoto19 from "../../assets/img/gallery/galleryPhoto-19.jpeg";
import galleryPhoto20 from "../../assets/img/gallery/galleryPhoto-20.jpeg";
import galleryPhoto21 from "../../assets/img/gallery/galleryPhoto-21.jpeg";
import galleryPhoto22 from "../../assets/img/gallery/galleryPhoto-22.jpeg";
import galleryPhoto23 from "../../assets/img/gallery/galleryPhoto-23.jpeg";
import galleryPhoto24 from "../../assets/img/gallery/gallery-photo-24.png";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

// ------- LIGHTBOX -------
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

const Gallery = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="gallery-section flex-col">
        <p className="gallery-label green">GALERIA</p>
        <p className="gallery-title dark-grey">
          Zobacz piękno rzek, którymi pływamy i atmosferę naszych spływów.
        </p>
        <svg
          width="90"
          height="12"
          viewBox="0 0 70 10"
          className="wave-gallery"
        >
          <path
            d="M2 6 Q10 2 18 6 T34 6 T50 6 T66 6 T78 6"
            stroke="#F3C623"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        <button
          type="button"
          onClick={() => {
            setOpen(true);
          }}
        >
          Open Lightbox
        </button>

        <Lightbox
          plugins={[Counter]}
          counter={{ container: { style: { top: "unset", bottom: 0 } } }}
          open={open}
          close={() => {
            setOpen(false);
          }}
          slides={[
            { src: galleryPhoto1 },
            { src: galleryPhoto2 },
            { src: galleryPhoto3 },
            { src: galleryPhoto4 },
            { src: galleryPhoto5 },
            { src: galleryPhoto6 },
            { src: galleryPhoto7 },
            { src: galleryPhoto8 },
            { src: galleryPhoto9 },
            { src: galleryPhoto10 },
            { src: galleryPhoto11 },
            { src: galleryPhoto12 },
            { src: galleryPhoto13 },
            { src: galleryPhoto15 },
            { src: galleryPhoto16 },
            { src: galleryPhoto17 },
            { src: galleryPhoto18 },
            { src: galleryPhoto19 },
            { src: galleryPhoto20 },
            { src: galleryPhoto21 },
            { src: galleryPhoto22 },
            { src: galleryPhoto23 },
            { src: galleryPhoto24 },
          ]}
        />

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
            <img src={galleryPhoto4} alt="Zdjęcie ze spływu kajakowego" />
          </div>
          <div className="gallery-content-img large">
            <img src={galleryPhoto22} alt="Zdjęcie kamienistej rzeki" />
          </div>

          <div className="gallery-content-img">
            <img src={galleryPhoto19} alt="Zdjęcie rzeki z pomostu" />
          </div>

          <div className="gallery-content-img">
            <img src={galleryPhoto20} alt="Zdjęcie pod wiaduktem" />
          </div>

          <div className="gallery-content-img">
            <img src={galleryPhoto11} alt="Zdjęcie rzeki Nidy" />
          </div>
          <div className="gallery-content-img">
            <img src={galleryPhoto10} alt="Świetna atmosfera na kajakach" />
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
            <img src={galleryPhoto21} alt="Zdjęcie mężczyzny z kajakami" />
          </div>
          <div className="gallery-content-img large">
            <img src={galleryPhoto18} alt="Zdjęcie rzeki z brzegu" />
          </div>
          <div className="gallery-content-img large">
            <img src={galleryPhoto24} alt="Zdjęcie ruin zamku" />
          </div>
          <div className="gallery-content-img">
            <img
              src={galleryPhoto15}
              alt="Spokojna rzeka z kajakarzami w słońcu"
            />
          </div>
          <div className="gallery-content-img">
            <img src={galleryPhoto16} alt="Kajakowanie na spokojnej rzece" />
          </div>

          <div className="gallery-content-img">
            <img src={galleryPhoto17} alt="Kajakarze na spokojnej rzece" />
          </div>
          <div className="gallery-content-img large">
            <img
              src={galleryPhoto23}
              alt="Zdjęcie drewnianego budynku na trasie"
            />
          </div>

          <div className="gallery-content-img">
            <img src={galleryPhoto6} alt="Grupa przy brzegu" />
          </div>
          <div className="gallery-content-img large">
            <img src={galleryPhoto13} alt="Zimorodek" />
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
