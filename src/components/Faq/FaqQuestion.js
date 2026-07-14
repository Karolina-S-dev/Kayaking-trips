import { useState } from "react";

const FaqQuestion = ({ question }) => {
  const [isFaqAnswearOpen, setIsFaqAnswearOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          isFaqAnswearOpen
            ? setIsFaqAnswearOpen(false)
            : setIsFaqAnswearOpen(true);
        }}
        className="flex-col question-and-answer"
      >
        <div className="flex-row">
          <p className="faq-question">{question.question}</p>
          <ion-icon
            name="chevron-down-outline"
            className={
              !isFaqAnswearOpen
                ? "banner-arrowicon"
                : "banner-arrowicon-rotated"
            }
          ></ion-icon>
        </div>

        <p className={`faq-answer mid-grey ${isFaqAnswearOpen ? "faq-answer-open" : ""}`}>
          {question.answer}
        </p>
      </div>
    </>
  );
};

export default FaqQuestion;
