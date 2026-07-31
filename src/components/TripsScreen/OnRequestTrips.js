import { Link } from "react-router-dom";
import goldCanoe from "../../assets/icons/gold-canoe.png";
import { onRequestTripsDesc } from "../../utils/TripsScreen/tripsScreenUtils_onrequest";
import { motion } from "motion/react";

const OnRequestTrips = () => {
  return (
    <>
      <section className="onrequest-hero flex-col">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex-col onrequest-routes-content white"
        >
          <p className="onrequest-trips-subtitle">Dłuższe wyprawy kajakowe</p>
          <svg
            width="90"
            height="12"
            viewBox="0 0 70 10"
            className="wave align-left"
          >
            <path
              d="M2 6 Q10 2 18 6 T34 6 T50 6 T66 6 T78 6"
              stroke="#F0D11F"
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
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="onrequest-trips-section"
      >
        <p className="onrequest-description-label dark-grey">
          Co organizujemy?
        </p>
        <p className="onrequest-description-title">
          Każdą wyprawę dopasowujemy do Twoich potrzeb i oczekiwań. Ty wybierasz
          - my zajmujemy się resztą.
        </p>

        <div className="flex-row onrequest-cards">
          {onRequestTripsDesc.map((item) => (
            <div className="onrequest-card-wrapper" key={item.id}>
              <div
                key={item.id}
                className={`onrequest-card flex-col ${item.className}`}
              >
                <div className="flex-row">
                  <ion-icon name="checkmark-circle"></ion-icon>
                  <p className="onrequest-card-title">{item.name}</p>
                </div>
                <p className="onrequest-card-content">{item.content}</p>
              </div>
            </div>
          ))}
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
          <Link to="/kontakt" className="onrequest-button white flex-row">
            ZAPLANUJ SWOJĄ WYPRAWĘ
          </Link>
        </div>
      </motion.section>
    </>
  );
};

export default OnRequestTrips;
