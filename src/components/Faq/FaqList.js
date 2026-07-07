import "../../assets/css/faq.css";
import { faqContentData } from "../../utils/faqUtils";
import FaqBanner from "./FaqBanner";

const FaqList = () => {
  return (
    <>
      <section className="faq-section">
        {faqContentData.map((item, index) => (
          <FaqBanner item={item} key={index} />
        ))}
      </section>
    </>
  );
};

export default FaqList;
