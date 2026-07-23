import { reservation } from "../../utils/ContactScreen/contactUtils";
import ReservationCard from "./ReservationCard";
import spotkanieKajakowe from "../../assets/img/canoe-meeting.png";

const Reservation = () => {
  return (
    <>
      <section className="reservation-section">
        <p className="contact-reservation-label green">
          Jak wygląda rezerwacja?
        </p>
        <svg width="65" height="10" viewBox="0 0 70 10" className="wave ">
          <path
            d="M2 6 Q10 2 18 6 T34 6 T50 6 T66 6 T78 6"
            stroke="#F0D11F"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <div className="reservation-image">
          <img
            src={spotkanieKajakowe}
            alt="Spotkanie przy kajakach"
          />
        </div>
        <div className="reservation-cards flex-row">
          {reservation.map((item, index) => (
            <ReservationCard item={item} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Reservation;
