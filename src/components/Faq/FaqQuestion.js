import { useState } from "react";

const FaqQuestion = ({ question }) => {
  const [isFaqAnswearOpen, setIsFaqAnswearOpen] = useState(false);

  return (
    <>
      <div className="flex-col question-and-answer">
        <div className="flex-row">
          <p className="faq-question">{question.question}</p>
          <ion-icon
            name="chevron-down-outline"
            className="question-arrowicon"
            onClick={() => {
              isFaqAnswearOpen
                ? setIsFaqAnswearOpen(false)
                : setIsFaqAnswearOpen(true);
            }}
          ></ion-icon>
        </div>
        {isFaqAnswearOpen ? (
          <p className="faq-answer mid-grey">{question.answer}</p>
        ) : null}
      </div>
    </>
  );
};

export default FaqQuestion;
