import { useTranslation } from "react-i18next";
import { offerTrips } from "../../utils/HomeScreen/offerTripsUtils";
import OfferCard from "./OfferCard";
import { motion } from "motion/react";

const OfferList = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="offer-section flex-col">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-col"
        >
          <p className="green offer-label">{t("offer.label")}</p>
          <p className="navy-blue offer-title">{t("offer.title")}</p>

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
        </motion.div>
        <div className="offer-cards flex-row">
          {offerTrips.map((trip, index) => (
            <OfferCard trip={trip} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default OfferList;
