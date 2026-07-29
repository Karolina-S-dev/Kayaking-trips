import { faqContentData } from "../../utils/FaqScreen/faqUtils";
import FaqBanner from "./FaqBanner";
import { motion } from "motion/react";

const FaqList = () => {
  return (
    <>
      <section className="faq-list flex-col">
        <motion.div
          className="flex-col"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="faq-label green">FAQ</p>
          <p className="faq-title">
            Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące
            rezerwacji, przebiegu spływu i organizacji
          </p>
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

        {faqContentData.map((item,index) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            key={item.id}
          >
            <FaqBanner item={item} />
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default FaqList;
