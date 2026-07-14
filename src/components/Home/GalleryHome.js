import galleryPhoto10 from "../../assets/img/gallery/gallery-photo-10.png";
import galleryPhoto3 from "../../assets/img/gallery/gallery-photo-3.png";
import galleryPhoto14 from "../../assets/img/gallery/gallery-photo-14.png";
import galleryPhoto1 from "../../assets/img/gallery/gallery-photo-1.png";
import galleryPhoto9 from "../../assets/img/gallery/gallery-photo-9.png";
import galleryPhoto25 from "../../assets/img/gallery/gallery-photo-25.png";

const GalleryHome = () => {
  return (
    <>
      <section className="gallery-home-section flex-col">
        <p className="green gallery-home-label">Galeria</p>
        <p className="dark-grey gallery-home-title">
          Kadry z naszych spływów, ognisk i najpiękniejszych zakątków Nidy.
        </p>
        <svg
          width="85"
          height="12"
          viewBox="0 0 70 10"
          className="wave align-center"
        >
          <path
            d="M2 6 Q10 2 18 6 T34 6 T50 6 T66 6 T78 6"
            stroke="#F3C623"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <div className="gallery-home-div flex-row">
          <div className="gallery-home-div-img">
            <img src={galleryPhoto3} alt="Zdjęcie ze spływu kajakowego" />
          </div>
          <div className="gallery-home-div-img width14">
            <img src={galleryPhoto1} alt="Zachód słońca nad rzeką Nidą" />
          </div>
          <div className="gallery-home-div-img">
            <img src={galleryPhoto25} alt="Zdjęcie zamku" />
          </div>
          <div className="gallery-home-div-img">
            <img src={galleryPhoto10} alt="Świetna atmosfera na kajakach" />
          </div>
          <div className="gallery-home-div-img width14">
            <img src={galleryPhoto14} alt="Ognisko" />
          </div>
          <div className="gallery-home-div-img">
            <img
              src={galleryPhoto9}
              alt="Grupa wyruszająca na spływ kajakowy"
            />
          </div>
        </div>
        <a href="/galeria" className="gallery-home-button flex-row">
          Zobacz więcej zdjęć
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </a>
      </section>
    </>
  );
};

export default GalleryHome;
