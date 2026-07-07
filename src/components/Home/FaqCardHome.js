import { useState } from "react";

const FaqCardHome = ({ card, index }) => {
  const [isFaqCardHomeOpen, setIsFaqCardHomeOpen] = useState(false);

  return (
    <>
      <div
        key={index}
        className={`flex-col faq-card-open ${isFaqCardHomeOpen ? " box-shadow" : ""}`}
      >
        <div className={`faq-home-card flex-row box-shadow ${isFaqCardHomeOpen? "box-shadow-none":""}`}>
          <div className="faq-home-card-icon">{card.icon} </div>
          <p
            className={`faq-home-card-title ${!isFaqCardHomeOpen ? "" : "open"}`}
          >
            {card.question}
          </p>
          <div
            className={
              !isFaqCardHomeOpen
                ? "faq-home-card-arrowicon"
                : "faq-home-card-arrowicon-rotated"
            }
            onClick={() => {
              !isFaqCardHomeOpen
                ? setIsFaqCardHomeOpen(true)
                : setIsFaqCardHomeOpen(false);
            }}
          >
            <ion-icon name="chevron-down-outline"></ion-icon>
          </div>
        </div>

        {isFaqCardHomeOpen ? (
          <div className="faq-home-content">
            <p className="faq-home-answer mid-grey ">{card.answer}</p>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default FaqCardHome;
