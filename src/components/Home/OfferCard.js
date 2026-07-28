import { Link } from "react-router-dom";
import { motion } from "motion/react";

const OfferCard = ({ trip }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 1, ease: "easeOut" }}
        key={trip.id}
        className="offer-card flex-col"
      >
        <div className="offer-card-img">
          <img src={trip.image} alt="Kajakowe zdjęcie" loading="lazy" />
          {trip.additionalInfo && (
            <div className="additional-info white flex-row">
              <ion-icon name="star"></ion-icon>
              <p>{trip.additionalInfo}</p>
            </div>
          )}
        </div>
        <div className="offer-card-content flex-col">
          <p className="offer-card-title navy-blue">{trip.title}</p>
          <div className="content-and-icon flex-row">
            <ion-icon name="time"></ion-icon>
            <p className="offer-card-duration navy-blue">{trip.duration}</p>
          </div>
          <div className="content-and-icon flex-row">
            <ion-icon name="checkmark-circle-outline"></ion-icon>
            <p className="dark-grey offer-card-desc">{trip.desc}</p>
          </div>
          <div className="content-and-icon flex-row">
            <ion-icon name="checkmark-circle-outline"></ion-icon>
            <p className="dark-grey offer-card-feature">{trip.feature}</p>
          </div>
          <div className="content-and-icon flex-row">
            <ion-icon name="checkmark-circle-outline"></ion-icon>
            <p className="dark-grey offer-card-feature">{trip.feature2}</p>
          </div>
          <div className="content-and-icon flex-row">
            <ion-icon name="checkmark-circle-outline"></ion-icon>
            <p className="dark-grey offer-card-feature">{trip.feature3}</p>
          </div>
          <div className="flex-row card-footer">
            <p className="navy-blue offer-card-longness">{trip.longness}</p>
            <Link to={trip.link} className="card-button white">
              {trip.ctaText}
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default OfferCard;
