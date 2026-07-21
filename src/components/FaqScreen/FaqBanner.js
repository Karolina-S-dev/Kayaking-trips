import { useState } from "react";
import FaqQuestion from "./FaqQuestion";

const FaqBanner = ({ item }) => {
  const [isFaqBannerOpen, setIsFaqBannerOpen] = useState(false);

  return (
    <>
      <div
        className={`flex-col faq-banner-and-content ${isFaqBannerOpen ? "faq-banner-and-content-open" : ""}`}
      >
        <div
          onClick={() => {
            isFaqBannerOpen
              ? setIsFaqBannerOpen(false)
              : setIsFaqBannerOpen(true);
          }}
          className={`faq-banner flex-row ${isFaqBannerOpen ? "faq-banner-open" : ""}`}
        >
          <div className="banner-icon">{item.icon} </div>
          <p className="banner-title"> {item.title}</p>

          <ion-icon
            className={
              !isFaqBannerOpen ? "banner-arrowicon" : "banner-arrowicon-rotated"
            }
            name="chevron-down-outline"
          ></ion-icon>
        </div>

        <div
          className={`flex-col faq-content ${isFaqBannerOpen ? "faq-content-open" : ""}`}
        >
          <div className="faq-content-inner">
          {item.questions.map((question, index) => (
            <FaqQuestion question={question} key={index} />
          ))}
        </div></div>
      </div>
    </>
  );
};

export default FaqBanner;
