import { oneDayTripsDesc } from "../../utils/TripsScreen/tripsScreenUtils__oneday";
import oneDayTrips from "../../assets/img/onedaytrips.jpeg";
import TripCard from "./TripCard";

const OneDayTrips = () => {
  return (
    <section className="oneday-trips-section flex-col">
      <p className="family-trips-label">Trasy spływów jednodniowych</p>

      <p className="oneday-trips-title dark-grey">
        Poznaj uroki Nidy podczas jednodniowych spływów kajakowych dopasowanych
        do każdego poziomu zaawansowania. Od spokojnych tras rodzinnych po
        bardziej wymagające odcinki - każda z nich pozwala cieszyć się pięknem
        natury, aktywnym wypoczynkiem i wyjątkową atmosferą rzeki.
      </p>
      <svg
        width="90"
        height="12"
        viewBox="0 0 70 10"
        className="wave align-center"
      >
        <path
          d="M2 6 Q10 2 18 6 T34 6 T50 6 T66 6 T78 6"
          stroke="#F0D11F"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <div className="flex-row oneday-trips-row">
        <div className="oneday-trips-img ">
          <img
            src={oneDayTrips}
            alt="Mapa tras spływów jednodniowych"
            className="box-shadow"
          />
        </div>
        <div className="flex-col oneday-routes-content">
          <div className="flex-row routes-header">
            <ion-icon name="map-outline"></ion-icon>
            <p className="routes-header-text">DOSTĘPNE TRASY</p>
          </div>

          <div className="oneday-trips-cards flex-col">
            {oneDayTripsDesc.map((item, index) => {
              return (
                <div key={index}>
                  <TripCard item={item} multiDayTrips={false} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneDayTrips;
