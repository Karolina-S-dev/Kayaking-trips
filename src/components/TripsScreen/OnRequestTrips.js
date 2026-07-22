import goldCanoe from "../../assets/icons/gold-canoe.png";

const OnRequestTrips = () => {
  return (
    <>
      <section className="onrequest-hero flex-col">
        <div className="flex-col onrequest-routes-content white">
          <p className="onrequest-trips-subtitle">Dłuższe wyprawy kajakowe</p>
          <svg
            width="90"
            height="12"
            viewBox="0 0 70 10"
            className="wave align-left"
          >
            <path
              d="M2 6 Q10 2 18 6 T34 6 T50 6 T66 6 T78 6"
              stroke="#F3C623"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <p className="onrequest-trips-title"> Nida i Wisła</p>
          <div className="flex-col onrequest-descriptions ">
            <p className="onrequest-desc">
              Organizujemy indywidualne wyprawy kajakowe od kilku dni aż do
              około tygodnia.
            </p>
            <p className="onrequest-desc">
              Najdłuższa proponowana przez nas trasa prowadzi z biegu Nidy aż do
              jej ujścia do Wisły - istnieje również możliwość kontynuacji
              spływu już nurtem największej rzeki w Polsce.
            </p>

            <p className="onrequest-desc">
              To wyjątkowa okazja, aby poznać zmieniające się krajobrazy,
              spędzić kilka dni blisko natury i przeżyć prawdziwą kajakową
              przygodę.
            </p>

            <p className="onrequest-desc">
              Szczegóły organizacji ustalamy wyłącznie podczas kontaktu
              telefonicznego.
            </p>
          </div>
        </div>
      </section>

      <section className="onrequest-trips-section">
      <p className="onrequest-description-label dark-grey">Co organizujemy?</p>
      <p className="onrequest-description-title">
        Każdą wyprawę dopasowujemy do Twoich potrzeb i oczekiwań. Ty wybierasz -
        my zajmujemy się resztą.
      </p>

      <div className="flex-row onrequest-cards">
        <div className="onrequest-card-wrapper flex-col">
          <div className="onrequest-card flex-col move-top-left">
            <div className="flex-row">
              <ion-icon name="checkmark-circle"></ion-icon>
              <p className="onrequest-card-title">DŁUGOŚĆ TRASY</p>
            </div>
            <p className="onrequest-card-content">
              Indywidualnie dopasowana do Twoich możliwości i czasu
            </p>
          </div>
        </div>

        <div className="onrequest-card-wrapper">
          <div className="onrequest-card flex-col move-top">
            <div className="flex-row">
              <ion-icon name="checkmark-circle"></ion-icon>
              <p className="onrequest-card-title">NOCLEGI</p>
            </div>
            <p className="onrequest-card-content">
              Dobór miejsc biwakowych lub noclegowych
            </p>
          </div>
        </div>
        <div className="onrequest-card-wrapper">
          <div className="onrequest-card flex-col move-top-right">
            <div className="flex-row">
              <ion-icon name="checkmark-circle"></ion-icon>
              <p className="onrequest-card-title">ETAPY DZIENNE</p>
            </div>
            <p className="onrequest-card-content">
              Planowanie etapów dziennych
            </p>
          </div>
        </div>
        <div className="onrequest-card-wrapper">
          <div className="onrequest-card flex-col move-bottom-left">
            <div className="flex-row">
              <ion-icon name="checkmark-circle"></ion-icon>
              <p className="onrequest-card-title">TRANSPORT</p>
            </div>
            <p className="onrequest-card-content">
              Zapewniamy pełną logistykę i transport uczestników oraz sprzętu
            </p>
          </div>
        </div>
        <div className="onrequest-card-wrapper">
          <div className="onrequest-card flex-col move-bottom-right">
            <div className="flex-row">
              <ion-icon name="checkmark-circle"></ion-icon>
              <p className="onrequest-card-title">PROGRAM</p>
            </div>
            <p className="onrequest-card-content">
              Dopasowany do doświadczenia grupy
            </p>
          </div>
        </div>
      </div>
      <div className="flex-col">
        <div className="onrequest-cta-img">
          <img src={goldCanoe} alt="ikona kajaka" />
        </div>
        <p className="onrequest-cta-title">
          Twoja wyprawa. Twoje zasady. My zajmujemy się resztą.
        </p>
        <p className="onrequest-cta-text">
          Każda wyprawa powstaje od podstaw specjalnie dla Twojej grupy.
          Dobieramy trasę, tempo, noclegi i logistykę tak, aby{" "}
          <strong> wszystko było dopasowane</strong> do Waszych oczekiwań.
        </p>
        <a href="/kontakt" className="onrequest-button white flex-row">
          ZAPLANUJ SWOJĄ WYPRAWĘ
        </a>
      </div>
      </section>
    </>
  );
};

export default OnRequestTrips;
