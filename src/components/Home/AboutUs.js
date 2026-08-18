import { useTranslation } from "react-i18next";
import riverSunset from "../../assets/img/river-sunset.png";
import { motion } from "motion/react";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="about-us-section flex-row">
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="about-us-text-col"
        >
          <p className="green about-us-label">{t("about.label")}</p>
          <p className="navy-blue about-us-title">
            {t("about.titleFirst")} <br />
            {t("about.titleSecond")}
          </p>
          <svg width="85" height="12" viewBox="0 0 70 10" className="wave">
            <path
              d="M2 6 Q10 2 18 6 T34 6 T50 6 T66 6 T78 6"
              stroke="#F0D11F"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <p className="about-us-description dark-grey">
            {t("about.description")}
          </p>
        </motion.div>

        <div className="about-us-photo-col">
          <img src={riverSunset} alt="Zachód słońca nad rzeką" />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
