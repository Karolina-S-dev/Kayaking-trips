import { useState } from "react";
import { faqHomeData } from "../../utils/utils";

const FaqHome = () => {
  const [isHomeFaqOpen, setIsHomeFaqOpen] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  return (
    <>
      <section className="faq-home-section flex-col">
        <p className="green faq-home-label">FAQ</p>
        <p className="faq-home-description">Najczęściej zadawane pytania</p>
        <svg width="85" height="12" viewBox="0 0 70 10" className="mt-3">
          <path
            d="M2 6 Q10 2 18 6 T34 6 T50 6 T66 6 T78 6"
            stroke="#F3C623"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        {faqHomeData.map((data, index) => (
          <div key={index} className="flex-col">
            <div className="faq-home-banner flex-row">
              <div className="banner-icon">{data.icon} </div>
              <p className="banner-title"> {data.question}</p>
              <div className="banner-arrowicon">
                <ion-icon
                  name="chevron-down-outline"
                  onClick={() =>
                    isHomeFaqOpen
                      ? setIsHomeFaqOpen(false)
                      : setIsHomeFaqOpen(true)
                  }
                ></ion-icon>
              </div>
            </div>
            {isHomeFaqOpen ? (
              <div className="faq-home-content">
                <p className="faq-home-text mid-grey">{data.answer}</p>
              </div>
            ) : null}
          </div>
        ))}
        <a href="/faq" className="faq-home-button flex-row">
          Zobacz pełne FAQ
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </a>
      </section>
    </>
  );
};

export default FaqHome;
