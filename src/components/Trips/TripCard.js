import { useState } from "react";
import TripsModal from "./TripsModal";

const TripCard = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="family-trips-card flex-row">
        <div className="family-trips-card-number flex-row">
          <p>{item.number}</p>
        </div>
        <div className="flex-col family-trips-card-main-col flex-col">
          <p className="family-trips-card-name">{item.name}</p>
          <div className="flex-row">
            <div className="flex-row family-trips-card-info mid-grey">
              <ion-icon name="location-outline"></ion-icon>
              <p className="family-trips-card-distance">{item.distance}</p>
            </div>
            <div className="flex-row family-trips-card-info">
              <ion-icon name="time-outline"></ion-icon>
              <p className="family-trips-card-duration">{item.duration}</p>
            </div>
            <div className="flex-row family-trips-card-info">
              <ion-icon name="leaf-outline"></ion-icon>
              <p className="family-trips-card-degree">{item.degree}</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="family-trips-card-button flex-row mid-grey"
        >
          Zobacz szczegóły
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>

        <TripsModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} item={item}/>
      </div>
    </>
  );
};

export default TripCard;
