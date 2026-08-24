import { useTranslation } from "react-i18next";
import { tripcChoiceUtils } from "../../utils/TripsScreen/tripsChoiceUtils";
import { motion } from "motion/react";

const TripsChoice = () => {
  const { t } = useTranslation("routes");
  return (
    <>
      <section className="trips-choice-section flex-col">
        <p className="trips-choice-label green">{t("tripsHero.chooseRoute")}</p>
        <p className="trips-choice-title dark-grey">
         {t("tripsHero.description")}
        </p>
        <svg
          width="90"
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

        <div className="flex-row trips-choice-cards">
          {tripcChoiceUtils.map((choice, index) => (
            <motion.a
              href={choice.route}
              key={index}
              className="trips-choice-card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img src={choice.img} alt={choice.alt} />

              <div className="choice-card-text white">
                <p className="choice-card-title ">{t(choice.title)}</p>
                <p className="choice-card-duration">{t(choice.duration)}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </>
  );
};

export default TripsChoice;
