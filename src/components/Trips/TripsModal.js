const TripsModal = ({ isModalOpen, setIsModalOpen, item }) => {
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen ? (
        <div className="modal-overlay">
          <div className="trips-modal">
            <div onClick={handleCloseModal}>
              <ion-icon name="close-outline"></ion-icon>
            </div>
            <div>
              <div className="flex-row modal-badge">
                {item.icon}
                <p>{item.type}</p>
              </div>
              <p className="modal-title">{item.name}</p>
              <p className="modal-recommended">
                Polecana dla: {item.recommendedFor}
              </p>

              <div className="flex-row modal-details">
                <div className="flex-row modal-detail">
                  <ion-icon name="location-outline"></ion-icon>
                  <div className="flex-col">
                    <p className="modal-detail-title">Długość trasy</p>
                    <p className="modal-detail-text">{item.distance}</p>
                  </div>
                </div>
                <div className="flex-row modal-detail">
                  <ion-icon name="time-outline"></ion-icon>
                  <div className="flex-col">
                    <p className="modal-detail-title">Czas spływu </p>
                    <p className="modal-detail-text">{item.duration}</p>
                  </div>
                </div>
                <div className="flex-row modal-detail">
                  <ion-icon name="leaf-outline"></ion-icon>
                  <div className="flex-col">
                    <p className="modal-detail-title">Poziom trudności </p>
                    <p className="modal-detail-text">{item.degree}</p>
                  </div>
                </div>
              </div>

              <p className="modal-desc"> {item.description}</p>

              <div className="modal-warning flex-row">
                <ion-icon name="warning"></ion-icon>
                <div className="flex-col">
                  <p className="modal-card-title"> {item.warningTitle}</p>
                  <p className="modal-card-text"> {item.warning}</p>
                </div>
              </div>

              <div className="modal-attraction flex-row">
               <ion-icon name="compass-outline"></ion-icon>

                <div className="flex-col">
                  <p className="modal-card-title"> {item.attractionTitle}</p>
                  <p className="modal-card-text"> {item.attraction}</p>
                </div>
              </div>

              <div className="modal-finish flex-row">
                <ion-icon name="flag-outline"></ion-icon>
                <div className="flex-col">
                  <p className="modal-card-title"> {item.finishTitle}</p>
                  <p className="modal-card-text"> {item.finish}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TripsModal;
