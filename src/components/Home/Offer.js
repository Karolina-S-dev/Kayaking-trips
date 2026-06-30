import familyKayaking from "../../assets/img/family-kayaking.png";
import oneDayKayaking from "../../assets/img/one-day-kayaking.png";
import longKayaking from "../../assets/img/long-kayaking.png";
import wislaKayaking from "../../assets/img/wisla-kayaking.png";

const trips = [
  {
    id: 1,
    image: familyKayaking,
    title: "Spływ rodzinny",
    duration: "Około 2h",
    longness: "5km",
    desc: "Idealny dla dzieci i osób, które pierwszy raz płyną kajakiem",
    feature: "Spokojny odcinek Nidy",
    feature2: "Bezpieczna trasa",
    feature3: "Dla całych rodzin",
    ctaText: "Zobacz trasę",
  },
  {
    id: 2,
    image: oneDayKayaking,
    title: "Spływy jednodniowe",
    duration: "1 dzień",
    longness: "11-30km",
    desc: "Najpopularniejsza opcja dla rodzin, grup znajomych i firm",
    feature: "9 tras do wyboru",
    feature2: "Transport i sprzęt w cenie",
    feature3: "Piękne widoki",
    ctaText: "Zobacz trasy",
    additionalInfo: "Najbardziej popularne",
  },
  {
    id: 3,
    image: longKayaking,
    title: "Spływy kilkudniowe",
    duration: "2 - 3 dni",
    longness: "29-43km",
    desc: "Pełna przygoda dla osób chcących spędzić więcej czasu na wodzie.",
    feature: "3 trasy do wyboru",
    feature2: "Kompleksowa organizacja",
    feature3: "Piękne widoki",
    ctaText: "Zobacz trasy",
  },
  {
    id: 4,
    image: wislaKayaking,
    title: "Spływ na życzenie",
    duration: "7 dni",
    desc: "Organizujemy również dłuższe wyprawy kajakowe - spływ do rzeki Wisły.",
    feature: "Trasa wielodniowa",
    feature2: "Możliwość spływu Wisłą",
    feature3: "Piękne widoki",
    ctaText: "Zobacz trasy",
  },
];

const Offer = () => {
  return (
    <>
      <section className="offer-section flex-col">
        <p className="green offer-label">Oferta</p>
        <p className="navy-blue offer-title">Nasze spływy</p>
        <div className="offer-cards flex-row">
          {trips.map((trip, index) => (
            <div className="offer-card flex-col">
              <div className="offer-card-img">
                <img src={trip.image} alt="Kajakowe zdjęcie" />

                {trip.additionalInfo ? (
                  <div className="additional-info white flex-row">
                    <ion-icon name="star-outline"></ion-icon>
                    <p>{trip.additionalInfo}</p>
                  </div>
                ) : null}
              </div>
              <div className="offer-card-content flex-col">
                <p className="offer-card-title navy-blue">{trip.title}</p>
                <div className="content-and-icon flex-row">
                  <ion-icon name="time"></ion-icon>
                  <p className="offer-card-duration navy-blue">
                    {trip.duration}
                  </p>
                </div>

                <div className="content-and-icon flex-row">
                  <ion-icon name="checkmark-circle-outline"></ion-icon>
                  <p className="navy-blue offer-card-desc">{trip.desc}</p>
                </div>
                <div className="content-and-icon flex-row">
                  <ion-icon name="checkmark-circle-outline"></ion-icon>
                  <p className="navy-blue offer-card-feature">{trip.feature}</p>
                </div>
                <div className="content-and-icon flex-row">
                  <ion-icon name="checkmark-circle-outline"></ion-icon>
                  <p className="navy-blue offer-card-feature">
                    {trip.feature2}
                  </p>
                </div>
                <div className="content-and-icon flex-row">
                  <ion-icon name="checkmark-circle-outline"></ion-icon>
                  <p className="navy-blue offer-card-feature">
                    {trip.feature3}
                  </p>
                </div>

                <div className="flex-row card-footer">
                  <p className="navy-blue offer-card-longness">
                    {trip.longness}
                  </p>
                  <a href="/trips" className="card-button white">
                    {trip.ctaText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Offer;
