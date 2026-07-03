import { faqContentData } from "../../utils/utils";

const FaqContent = ({ isFaqContentOpen, item }) => {
  return (
    <>
      {isFaqContentOpen ? (
        <div className="flex-col faq-content">
          {item.questions.map((question, index) => (
            <div key={index} className="flex-col question-and-answer">
              <p className="faq-question">{question.question}</p>
              <p className="faq-answer">{question.answer}</p>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default FaqContent;
