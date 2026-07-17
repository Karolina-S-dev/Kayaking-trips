import { faqContentData } from "../../utils/FAQ/faqUtils";
import FaqBanner from "./FaqBanner";

const FaqList = () => {
  return (
    <>
    
      <section className="faq-list flex-col">
        <p className="faq-label green">FAQ</p>
        <p className="faq-title">
          Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące
          rezerwacji, przebiegu spływu i organizacji.
        </p>
        <svg
          width="85"
          height="12"
          viewBox="0 0 70 10"
          className="wave align-center"
        >
          <path
            d="M2 6 Q10 2 18 6 T34 6 T50 6 T66 6 T78 6"
            stroke="#F3C623"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        {faqContentData.map((item, index) => (
          <FaqBanner item={item} key={index} />
        ))}
      </section>
   
    </>
  );
};

export default FaqList;
