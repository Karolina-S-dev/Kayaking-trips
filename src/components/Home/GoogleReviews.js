import googleLogo from "../../assets/icons/google-icon-logo-svgrepo-com.svg";
import { googleReviews } from "../../utils/utils";

const GoogleReviews = () => {
  return (
    <>
      <section className="reviews-home-section flex-col">
        <p className="green reviews-home-label">Opinie klientów</p>
        <p className="reviews-home-description">Co mówią o nas uczestnicy?</p>
        <svg width="85" height="12" viewBox="0 0 70 10" className="mt-3">
          <path
            d="M2 6 Q10 2 18 6 T34 6 T50 6 T66 6 T78 6"
            stroke="#F3C623"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <div className="flex-row reviews-banner">
          <div className="flex-row">
            <img
              src={googleLogo}
              alt="Google-logo"
              className="google-logo-big"
            />
            <div className="flex-col">
              <div className="flex-row rating-div">
                <p className="reviews-average">4,9</p>
                <div className="star-rating">★★★★★</div>
              </div>
              <p className="review-text">Na podstawie 47 opinii w Google</p>
            </div>
          </div>

          <a
            className="reviews-button flex-row"
            href="https://www.google.com/search?sca_esv=46d04319012e7670&sxsrf=APpeQnt4b3M96xJKXw5UozQVdnC50c8-BQ:1782891064360&q=Sp%C5%82ywy+Kajakowe+U+Jakuba&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_--Lsz_jjCVg37EW0EpLobtl9ozdgUswU0tR1PKkwJaCryt2wsEpc4WFTRMdntQmaQduCW8%3D&uds=AJ5uw188wWN8SkrC9q-xYaK174H7EFpZ1dKmTKKHpzui8RH8_9__Sk0KvOFaARCydofmlqIL2dBEBq8zo_7nV0fnn3ndCUeV9xlA0ymizh9EqK2txI9dHX2Q7HUPVz81asm5hPFyovJ3&sa=X&ved=2ahUKEwjFyMHk-rCVAxWBa_EDHXItA1oQ3PALegQIGRAE&biw=1920&bih=911&dpr=1"
          >
            <img src={googleLogo} alt="Google Logo" className="google-logo" />
            Zobacz wszystkie opinie w google
            <ion-icon name="arrow-up-right-box-outline"></ion-icon>
          </a>
        </div>

        <div className="flex-row review-cards">
          {googleReviews.map((review, index) => (
            <div key={index} className="review-card">
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
        <a href="/contact" className="reviews-home-button flex-row">
          Zarezerwuj swój spływ
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </a>
      </section>
    </>
  );
};

export default GoogleReviews;
