const Comp = () => {
  return (
    
    <section className="footer-section">
      <div className="footer-col flex-col">
        <h2 className="footer-title">Gotowy na przygodę?</h2>
        <p className="footer-subtitle">
          Skontaktuj się z nami i zarezerwuj swój termin!
        </p>
        <div className="footer-contact-all flex-row">
          <div className="flex-col footer-contact-groups">
            <div className="flex-row footer-group">
              <ion-icon name="call-outline"></ion-icon>
              <p className="footer-data">xxxxxxxxx</p>
            </div>
          </div>
          <div className="flex-col footer-contact-groups">
            <div className="flex-row footer-group">
              <ion-icon name="mail-outline"></ion-icon>
              <p className="footer-data">xxxxxxxxx</p>
            </div>
            <div className="flex-row footer-group">
              <ion-icon name="location-outline"></ion-icon>
              <p className="footer-data">xxxxxxxxx</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comp;
