import { offerTrips } from "../../utils/Home/offerTripsUtils";
import OfferCard from "./OfferCard";

const OfferList = () => {
  return (
    <>
      <section className="offer-section flex-col">
        <p className="green offer-label">Oferta</p>
        <p className="navy-blue offer-title">Nasze spływy</p>
        <svg
          width="85"
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
        <div className="offer-cards flex-row">
          {offerTrips.map((trip, index) => (
            <OfferCard trip={trip} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default OfferList;
