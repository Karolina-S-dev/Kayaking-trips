import shallowRiver from "../../assets/img/shallow-river.jpeg";


const FaqNotice = () => {
  return (
    <>
      <div className="faq-notice flex-row">
        <div className="flex-col faq-notice-left">
          <p className="faq-notice-title white">Nie znalazłeś odpowiedzi?</p>
          <svg width="90" height="12" viewBox="0 0 70 10" className="wave ">
            <path
              d="M2 6 Q10 2 18 6 T34 6 T50 6 T66 6 T78 6"
              stroke="#F3C623"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <p className="faq-notice-content white">
            Skontaktuj się z nami - chętnie pomożemy dobrać trasę i odpowiemy na
            wszystkie pytania.
          </p>

          <a href="/kontakt" className="faq-notice-button flex-row">
            Skontaktuj się z nami
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </a>
        </div>
        <div className="faq-notice-photo">
          <img src={shallowRiver} alt="" />
        </div>
         </div>
    </>
  );
};

export default FaqNotice;
