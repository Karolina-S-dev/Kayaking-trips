import { useState } from "react";
import TripsModal from "./TripsModal";

const TripCard = ({ item, multiDayTrips }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="family-trips-card flex-row ">
        <div className="family-trips-card-number flex-row">
          <p>{item.number}</p>
        </div>
        <div className="flex-col family-trips-card-main-col flex-col">
          <p className="family-trips-card-name">{item.name}</p>
          <div className="flex-row family-card-specifics">
            <div className="flex-row family-trips-card-info background-grey">
              <ion-icon name="location-outline"></ion-icon>
              <p>{item.distance}</p>
            </div>
            <div className="flex-row family-trips-card-info background-blue">
              <ion-icon name="time-outline"></ion-icon>
              <p>{item.duration}</p>
            </div>
            <div
              className={`flex-row family-trips-card-info ${item.backgroundColor}`}
            >
              <ion-icon name="leaf-outline"></ion-icon>
              <p>{item.degree}</p>
            </div>
          </div>
        </div>

        {item.button ? (
          <button
            onClick={() => {
              setIsModalOpen(true);
            }}
            className="family-trips-card-button flex-row mid-grey"
          >
            Zobacz szczegóły
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        ) : (
          <button className="family-trips-button-disabled flex-row mid-grey">
            Skontaktuj się z nami, aby poznać szczegóły wyprawy.
          </button>
        )}
      </div>

      <TripsModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        item={item}
        multiDayTrips={multiDayTrips}
      />
    </>
  );
};

export default TripCard;
