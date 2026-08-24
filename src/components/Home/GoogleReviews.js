import { useTranslation } from "react-i18next";
import googleLogo from "../../assets/icons/google-icon-logo-svgrepo-com.svg";
import GoogleEmblaCarousel from "./GoogleEmblaCarousel";
import { motion } from "motion/react";

const GoogleReviews = () => {
  const { t } = useTranslation("home");
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="reviews-home-section flex-col"
      >
        <p className="green reviews-home-label">{t("googleReviews.label")}</p>
        <p className="reviews-home-title">{t("googleReviews.title")}</p>
        <svg
          width="85"
          height="12"
          viewBox="0 0 70 10"
          className="wave align-center"
        >
          <path
            d="M2 6 Q10 2 18 6 T34 6 T50 6 T66 6 T78 6"
            stroke="#F0D11F"
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
              <p className="review-text">{t("googleReviews.googleSummary")}</p>
            </div>
          </div>

          <a
            className="reviews-button flex-row"
            href="https://www.google.com/search?sca_esv=46d04319012e7670&sxsrf=APpeQnt4b3M96xJKXw5UozQVdnC50c8-BQ:1782891064360&q=Sp%C5%82ywy+Kajakowe+U+Jakuba&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_--Lsz_jjCVg37EW0EpLobtl9ozdgUswU0tR1PKkwJaCryt2wsEpc4WFTRMdntQmaQduCW8%3D&uds=AJ5uw188wWN8SkrC9q-xYaK174H7EFpZ1dKmTKKHpzui8RH8_9__Sk0KvOFaARCydofmlqIL2dBEBq8zo_7nV0fnn3ndCUeV9xlA0ymizh9EqK2txI9dHX2Q7HUPVz81asm5hPFyovJ3&sa=X&ved=2ahUKEwjFyMHk-rCVAxWBa_EDHXItA1oQ3PALegQIGRAE&biw=1920&bih=911&dpr=1"
          >
            <img src={googleLogo} alt="Google Logo" className="google-logo" />
            {t("googleReviews.googleButton")}
            <ion-icon name="arrow-up-right-box-outline"></ion-icon>
          </a>
        </div>
        <GoogleEmblaCarousel />

        <a href="/kontakt" className="reviews-home-button flex-row">
           {t("googleReviews.bookButton")}
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </a>
      </motion.section>
    </>
  );
};

export default GoogleReviews;
