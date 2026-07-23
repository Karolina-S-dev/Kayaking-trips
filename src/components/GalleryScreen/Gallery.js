import { useState } from "react";
import { galleryPhotos } from "../../utils/GalleryScreen/galleryUtils";

// ------- YET ANOTHER REACT LIGHTBOX -------
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import { Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(null);

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
            stroke="#F0D11F"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        <Lightbox
          plugins={[Counter, Thumbnails, Zoom]}
          index={index}
          on={{ view: ({ index: currentIndex }) => setIndex(currentIndex) }}
          counter={{ container: { style: { top: "unset", bottom: 0 } } }}
          open={open}
          close={() => {
            setOpen(false);
          }}
          slides={galleryPhotos.map((photo) => ({
            src: photo.img,
          }))}
        />

        <div className="gallery-content flex-row">
          {galleryPhotos.map((photo, index) => (
            <div
              key={index}
              onClick={() => {
                setOpen(true);
                setIndex(index);
              }}
              className={`gallery-content-img ${photo.className} `}
            >
              <img src={photo.img} alt={photo.alt} />
              <ion-icon name="scan-outline"></ion-icon>
            </div>
          ))}
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
          <a href="/kontakt" className="share-button white flex-row">
            WYŚLIJ ZDJĘCIA
          </a>
        </div>
      </section>
    </>
  );
};

export default Gallery;
