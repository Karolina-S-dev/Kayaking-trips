import { faqContentData } from "../FAQ/faqUtils";

const faqHomeData = [
  {
    question: faqContentData[0].questions[0].question,
    answer: faqContentData[0].questions[0].answer,
    icon: <ion-icon name="calendar-outline"></ion-icon>,
  },
  {
    question: faqContentData[0].questions[1].question,
    answer: faqContentData[0].questions[1].answer,
    icon: <ion-icon name="card-outline"></ion-icon>,
  },
  {
    question: faqContentData[2].questions[2].question,
    answer: faqContentData[2].questions[2].answer,
    icon: <ion-icon name="people-outline"></ion-icon>,
  },
  {
    question: faqContentData[1].questions[0].question,
    answer: faqContentData[1].questions[0].answer,
    icon: <ion-icon name="accessibility-outline"></ion-icon>,
  },
  {
    question: faqContentData[2].questions[0].question,
    answer: faqContentData[2].questions[0].answer,
    icon: <ion-icon name="happy-outline"></ion-icon>,
  },
];

export { faqHomeData };
