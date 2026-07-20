import longTrips from "../../assets/img/long-trips.jpeg";
import { multiDayTripsDesc } from "../../utils/Trips/tripsScreenUtils__multiday";
import TripCard from "./TripCard";

const MultiDayTrips = () => {
  return (
    <>
      <section className="multiday-trips-section flex-col">
        <p className="family-trips-label">Trasy spływów kilkudniowych</p>
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
        <p className="family-multiday-trips-title dark-grey">
          Odkryj Nidę w jej najpiękniejszym wydaniu podczas kilkudniowych
          spływów kajakowych. To propozycja dla osób, które chcą zwolnić tempo,
          spędzić więcej czasu blisko natury i poznać malownicze zakątki rzeki
          niedostępne podczas krótszych tras.
        </p>

        <div className="flex-row family-trips-row">
          <div className="multiday-trips-img box-shadow">
            <img src={longTrips} alt="Mapa tras spływów wielodniowych" />
          </div>
          <div className="flex-col routes-content">
            <div className="flex-row routes-header">
              <ion-icon name="map-outline"></ion-icon>
              <p className="routes-header-text">DOSTĘPNE TRASY</p>
            </div>

            <div className="family-trips-cards flex-col">
              {multiDayTripsDesc.map((item, index) => {
                return (
                  <div key={index}>
                    <TripCard item={item} multiDayTrips={true}/>
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

export default MultiDayTrips;
