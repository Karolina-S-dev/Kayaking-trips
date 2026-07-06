import { useState } from "react";
import "../../assets/css/faq.css";
import { faqContentData } from "../../utils/utils";
import FaqContent from "./FaqContent";

const FaqList = () => {
  const [isFaqContentOpen, setIsFaqContentOpen] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  return (
    <>
      <section className="faq-section">
        {faqContentData.map((item, index) => (
          <div key={index} className="flex-col">
            <div
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
                  for (const key in isFaqContentOpen) {
                    key === Number(item.id)
                      ? setIsFaqContentOpen({
                          ...isFaqContentOpen,
                        })
                      : setIsFaqContentOpen({
                          ...isFaqContentOpen,
                        });
                  }
                }}
              >
                {isFaqContentOpen ? (
                  <ion-icon name="chevron-down-outline"></ion-icon>
                ) : (
                  <ion-icon name="chevron-up-outline"></ion-icon>
                )}
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
