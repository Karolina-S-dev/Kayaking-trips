const OfferCard = ({trip}) => {
  return (
    <>
    <div key={trip.id} className="offer-card flex-col">
      <div className="offer-card-img">
        <img src={trip.image} alt="Kajakowe zdjęcie" />
        {trip.additionalInfo ? (
          <div className="additional-info white flex-row">
            <ion-icon name="star"></ion-icon>
            <p>{trip.additionalInfo}</p>
          </div>
        ) : null}
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
          <a href={trip.link} className="card-button white">
            {trip.ctaText}
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default OfferCard;
