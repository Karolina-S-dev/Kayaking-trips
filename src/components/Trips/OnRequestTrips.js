import familyTrips from "../../assets/img/family-trips.png";
import { familyTripsDesc } from "../../utils/Trips/tripsScreenUtils";
import TripCard from "./TripCard";

const OnRequestTrips = () => {
  return (
    <>
      <section className="family-trips-section flex-col">
        <p className="family-trips-label">Trasy spływów na życzenie</p>
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
        <p className="family-trips-title dark-grey">
          Trasy rodzinne to najłatwiejsze i najspokojniejsze odcinki Nidy.
          Polecane są rodzinom z dziećmi, osobom początkującym oraz wszystkim,
          którzy chcą spędzić czas na wodzie bez większych wyzwań.
        </p>

        <div className="flex-row family-trips-row">
          <div className="family-trips-img box-shadow">
            <img src={familyTrips} alt="Mapa tras spływów rodzinnych" />
          </div>
          <div className="flex-col routes-content">
            <div className="flex-row routes-header">
              <ion-icon name="map-outline"></ion-icon>
              <p className="routes-header-text">DOSTĘPNE TRASY</p>
            </div>

            <div className="family-trips-cards flex-col">
              {familyTripsDesc.map((item, index) => {
                return (
                  <div key={index}>
                    <TripCard item={item} />
                  </div>
                );
              })}
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default OnRequestTrips;
