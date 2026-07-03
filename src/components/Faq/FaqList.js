import { useState } from "react";
import "../../assets/css/faq.css";
import { faqContentData } from "../../utils/utils";
import FaqContent from "./FaqContent";

const FaqList = () => {
  const [isFaqContentOpen, setIsFaqContentOpen] = useState(false);

  return (
    <>
      <section className="faq-section">
        {faqContentData.map((item, index) => (
          <div key={index} className="flex-col">
            <div
              key="index"
              className={
                !isFaqContentOpen
                  ? "faq-banner flex-row"
                  : "faq-banner-open flex-row"
              }
            >
              <div className="banner-icon">{item.icon} </div>
              <p className="banner-title"> {item.title}</p>
              <div
                className="banner-arrowicon"
                onClick={() => {
                  isFaqContentOpen
                    ? setIsFaqContentOpen(false)
                    : setIsFaqContentOpen(true);
                }}
              >
                {item.arrowIcon}
              </div>
            </div>
            <FaqContent item={item} isFaqContentOpen={isFaqContentOpen} />
          </div>
        ))}
      </section>
    </>
  );
};

export default FaqList;
