import onRequestTrips from "../../assets/img/onrequest-trips.png";
import manInCanoe from "../../assets/icons/manincanoe.png";
import tent from "../../assets/icons/tent.png";
import part from "../../assets/icons/part.png";
import car from "../../assets/icons/car.png";
import program from "../../assets/icons/program.png";

const OnRequestTrips = () => {
  return (
    <>
      <section className="onrequest-section flex-col">
        <p className="family-trips-label">SPŁYWY NA ŻYCZENIE</p>

        <p className="onrequest-trips-title dark-grey">
          Marzysz o prawdziwej kajakowej ekspedycji? Przygotujemy wyprawę dopasowaną do Ciebie i Twojej ekipy.
        </p>
        <svg
          width="90"
          height="12"
          viewBox="0 0 70 10"
          className="wave align-center"
        >
          <path
            d="M2 6 Q10 2 18 6 T34 6 T50 6 T66 6 T78 6"
            stroke="#F3C623"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <div className="flex-row onrequest-trips-row">
          <div className="onrequest-trips-img box-shadow ">
            <img
              src={onRequestTrips}
              alt="Mapa tras spływów na życzenie"
              className="box-shadow"
            />
          </div>
          <div className="flex-col onrequest-routes-content">
            <p className="onrequest-trips-subtitle dark-grey">
              Dłuższe wyprawy <br />
              kajakowe - Nida i Wisła
            </p>
            <svg
              width="90"
              height="12"
              viewBox="0 0 70 10"
              className="wave align-left"
            >
              <path
                d="M2 6 Q10 2 18 6 T34 6 T50 6 T66 6 T78 6"
                stroke="#F3C623"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <div className="flex-col onrequest-descriptions ">
              <p className="onrequest-desc">
                Organizujemy indywidualne wyprawy kajakowe od kilku dni aż do
                około tygodnia.
              </p>
              <p className="onrequest-desc">
                Najdłuższa proponowana przez nas trasa prowadzi z biegu Nidy aż
                do jej ujścia do Wisły, możliwe jest kontynuowanie spływu już
                nurtem największej rzeki w Polsce.
              </p>

              <p className="onrequest-desc">
                To wyjątkowa okazja, aby poznać zmieniające się krajobrazy,
                spędzić kilka dni blisko natury i przeżyć prawdziwą kajakową
                przygodę.
              </p>

              <p className="onrequest-desc">
                Każdą wyprawę dopasowujemy do doświadczenia uczestników,
                planując długość trasy, miejsca noclegowe, etapy dzienne oraz
                transport.
              </p>

              <p className="onrequest-desc">
                Szczegóły organizacji ustalamy wyłącznie podczas kontaktu
                telefonicznego.
              </p>
            </div>
          </div>
        </div>

        <p className="onrequest-trips-subtitle dark-grey">
          Każda wyprawa obejmuje
        </p>
        <svg
          width="90"
          height="12"
          viewBox="0 0 70 10"
          className="wave align-left"
        >
          <path
            d="M2 6 Q10 2 18 6 T34 6 T50 6 T66 6 T78 6"
            stroke="#F3C623"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <div className="flex-row onrequest-cards">
          <div className="onrequest-card box-shadow">
            <img src={manInCanoe} alt="icon" />
            <p className="onrequest-card-title">Długośc trasy</p>
            <p className="onrequest-card-content">
              Indywidualne dopasowanie trasy i czasu wyprawy
            </p>
          </div>
          <div className="onrequest-card box-shadow">
            <img src={tent} alt="icon" />
            <p className="onrequest-card-title">Noclegi</p>
            <p className="onrequest-card-content">
              Dobór miejsc biwakowych lub noclegowych
            </p>
          </div>
          <div className="onrequest-card box-shadow">
            <img src={part} alt="icon" />
            <p className="onrequest-card-title">Etapy dzienne</p>
            <p className="onrequest-card-content">
              Planowanie etapów dziennych
            </p>
          </div>
          <div className="onrequest-card box-shadow">
            <img src={car} alt="icon" />
            <p className="onrequest-card-title">Transport</p>
            <p className="onrequest-card-content">
              Pełną logistykę i transport uczestników
            </p>
          </div>
          <div className="onrequest-card box-shadow">
            <img src={program} alt="icon" />
            <p className="onrequest-card-title">Program</p>
            <p className="onrequest-card-content">
              Dopasowany do doświadczenia grupy
            </p>
          </div>
        </div>

        <p>
          Masz ochotę przeżyć prawdziwą kajakową ekspedycję? Skontaktuj się z
          nami - przygotujemy trasę dopasowaną specjalnie do Ciebie i Twojej
          ekipy!
        </p>
      </section>
    </>
  );
};

export default OnRequestTrips;
