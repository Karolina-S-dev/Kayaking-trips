import { trips } from "../../utils/utils";
import OfferCard from "./OfferCard";

const OfferList = () => {
  return (
    <>
      <section className="offer-section flex-col">
        <p className="green offer-label">Oferta</p>
        <p className="navy-blue offer-title">Nasze spływy</p>
        <div className="offer-cards flex-row">
          {trips.map((trip, index) => (
            <OfferCard trip={trip} key={index}/>
          ))}
        </div>
      </section>
    </>
  );
};

export default OfferList;
