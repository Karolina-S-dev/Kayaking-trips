import { useState } from "react";
import FaqQuestion from "./FaqQuestion";

const FaqBanner = ({ item }) => {
  const [isFaqBannerOpen, setIsFaqBannerOpen] = useState(false);

  return (
    <>
      <div className="flex-col">
        <div
          onClick={() => {
            isFaqBannerOpen
              ? setIsFaqBannerOpen(false)
              : setIsFaqBannerOpen(true);
          }}
          className="faq-banner flex-row box-shadow"
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
        {isFaqBannerOpen ? (
          <div className="flex-col faq-content">
            {item.questions.map((question, index) => (
              <FaqQuestion question={question} key={index} />
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default FaqBanner;
