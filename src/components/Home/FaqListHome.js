import { Link } from "react-router-dom";
import { faqHomeData } from "../../utils/HomeScreen/faqHomeUtils";
import FaqCardHome from "./FaqCardHome";
import { motion } from "motion/react";

const FaqListHome = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5 }}
        className="faq-home-section flex-col"
      >
        <p className="green faq-home-label">FAQ</p>
        <p className="faq-home-title">Najczęściej zadawane pytania</p>
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

        <Link to="/faq" className="faq-home-button flex-row">
          Zobacz pełne FAQ
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </Link>
      </motion.section>
    </>
  );
};

export default FaqListHome;
