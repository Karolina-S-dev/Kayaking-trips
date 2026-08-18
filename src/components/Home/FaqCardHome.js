import { useState } from "react";
import { useTranslation } from "react-i18next";

const FaqCardHome = ({ card }) => {
  const [isFaqCardHomeOpen, setIsFaqCardHomeOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div
        className={`flex-col faq-card-open ${isFaqCardHomeOpen ? " box-shadow" : ""}`}
      >
        <div
          onClick={() => {
            !isFaqCardHomeOpen
              ? setIsFaqCardHomeOpen(true)
              : setIsFaqCardHomeOpen(false);
          }}
          className={`faq-home-card flex-row box-shadow ${isFaqCardHomeOpen ? "box-shadow-none" : ""}`}
        >
          <div className="faq-home-card-icon">{card.icon} </div>
          <p
            className={`faq-home-card-title ${!isFaqCardHomeOpen ? "" : "open"}`}
          >
            {t(card.question)}
          </p>
          <div
            className={
              !isFaqCardHomeOpen
                ? "faq-home-card-arrowicon"
                : "faq-home-card-arrowicon-rotated"
            }
          >
            <ion-icon name="chevron-down-outline"></ion-icon>
          </div>
        </div>

        {isFaqCardHomeOpen ? (
          <div className="faq-home-content">
            <p className="faq-home-answer mid-grey ">{t(card.answer)}</p>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default FaqCardHome;
