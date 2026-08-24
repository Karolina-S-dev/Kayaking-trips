import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const TripsHero = () => {
  const { t } = useTranslation("routes");

  return (
    <>
      <section className="trips-hero-section flex-col">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="trips-hero-label white">{t("tripsHero.title")}</p>
          <p className="trips-hero-title white">{t("tripsHero.subtitle")}</p>
        </motion.div>
      </section>
    </>
  );
};

export default TripsHero;
