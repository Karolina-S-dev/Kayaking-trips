import { useTranslation } from "react-i18next";
import { faqHomeData } from "../../utils/HomeScreen/faqHomeUtils";
import FaqCardHome from "./FaqCardHome";
import { motion } from "motion/react";

const FaqListHome = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="faq-home-section flex-col"
      >
        <p className="green faq-home-label">FAQ</p>
        <p className="faq-home-title">{t("faq.title")}</p>
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

        {faqHomeData.map((card, index) => (
          <FaqCardHome card={card} key={index} />
        ))}

        <a href="/faq" className="faq-home-button flex-row">
          {t("faq.button")}
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </a>
      </motion.section>
    </>
  );
};

export default FaqListHome;
