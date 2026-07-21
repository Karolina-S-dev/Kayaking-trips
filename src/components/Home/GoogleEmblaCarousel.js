import useEmblaCarousel from "embla-carousel-react";
import googleLogo from "../../assets/icons/google-icon-logo-svgrepo-com.svg";
import { googleReviews } from "../../utils/HomeScreen/googleReviewsUtils";
import { useEffect, useState } from "react";

const GoogleEmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true, //infinite effect
    align: "start",
    slidesToScroll: 3, //3 slides scrolling at once
    breakpoints: { "(max-width: 767px)": { slidesToScroll: 1 } },
  });
  // 3 dots state
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [selectedSnap, setSelectedSnap] = useState(0);

  // 3 dots functions
  const scrollTo = (index) => emblaApi?.scrollTo(index);
  const setupSnaps = (emblaApi) => setScrollSnaps(emblaApi.scrollSnapList());
  const setActiveSnap = (emblaApi) =>
    setSelectedSnap(emblaApi.selectedScrollSnap());

  // 3 dots useEffect
  useEffect(() => {
    if (!emblaApi) return;
    setupSnaps(emblaApi);
    setActiveSnap(emblaApi);
    emblaApi.on("reInit", setupSnaps);
    emblaApi.on("reInit", setActiveSnap);
    emblaApi.on("select", setActiveSnap);
  }, [emblaApi]);

  //buttons next/prev - functions
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <>
      {/* // EMBLA carousel */}
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="flex-row review-cards embla__container">
            {googleReviews.map((review, index) => (
              <div key={index} className="review-card embla__slide">
                <div className="flex-row review-card-banner">
                  <div className="flex-row">
                    <img src={review.image} alt="" className="review-img" />
                    <div className="flex-col">
                      <p className="review-username">{review.userName}</p>
                      <p className="review-userreviews mid-grey">
                        {review.userReviews}
                      </p>
                    </div>
                  </div>
                  <img
                    src={googleLogo}
                    alt="Google Logo"
                    className="google-logo"
                  />
                </div>
                <div className="flex-row card-stars-div">
                  <div className="card-star-rating">★★★★★</div>
                  <p className="review-date">{review.date}</p>
                </div>
                <p className="review-content">{review.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <button
              className={`embla__dot ${index === selectedSnap ? " embla__dot--selected" : ""}`}
              key={index}
              onClick={() => scrollTo(index)}
            ></button>
          ))}
        </div>

        <button className="embla__prev" onClick={scrollPrev}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <button className="embla__next" onClick={scrollNext}>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
    </>
  );
};

export default GoogleEmblaCarousel;
