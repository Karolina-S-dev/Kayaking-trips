import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";

const TripsModal = ({ isModalOpen, setIsModalOpen, item, multiDayTrips }) => {
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return createPortal(
    <>
      <AnimatePresence>
        {isModalOpen && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`trips-modal ${multiDayTrips ? "multiday-trips-modal" : ""}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex-row">
                <div className="flex-row modal-badge">
                  {item.icon}
                  <p>{item.type}</p>
                </div>
                <ion-icon
                  onClick={handleCloseModal}
                  name="close-outline"
                ></ion-icon>
              </div>

              <div>
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

                {/* multiday */}

                {item.dayOneTitle ? (
                  <>
                    <p className="multiday-title">{item.dayOneTitle}</p>
                    <p className="multiday-desc">{item.dayOne}</p>
                  </>
                ) : null}

                {item.overnightTitle ? (
                  <>
                    <p className="multiday-title">{item.overnightTitle}</p>
                    <p className="multiday-desc">{item.overnight}</p>
                  </>
                ) : null}

                {item.dayTwoTitle ? (
                  <>
                    <p className="multiday-title">{item.dayTwoTitle}</p>
                    <p className="multiday-desc">{item.dayTwo}</p>
                  </>
                ) : null}

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
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>,
    document.body,
  );
};

export default TripsModal;
