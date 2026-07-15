import { useState } from "react";
import TripsModal from "./TripsModal";

const TripCard = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="family-trips-card flex-col">
        <p className="family-trips-card-name">{item.name}</p>
        <p className="family-trips-card-distance">{item.distance}</p>
        <p className="family-trips-card-duration">{item.duration}</p>
        <p className="family-trips-card-number white">{item.number}</p>
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="family-trips-card-button white"
        >
          Szczegóły trasy
        </button>
        <TripsModal isModalOpen={isModalOpen} />
      </div>
    </>
  );
};

export default TripCard;
