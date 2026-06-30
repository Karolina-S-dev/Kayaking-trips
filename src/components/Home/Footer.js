const Footer = () => {
  return (
    <>
      <section className="footer-section flex-row">
        <div className="footer-col flex-col">
          <h2 className="footer-title">Gotowy na przygodę?</h2>
          <p className="footer-subtitle">
            Skontaktuj się z nami i zarezerwuj swój termin!
          </p>
          <div className="footer-contact-all flex-row">
            <div className="flex-col footer-contact-groups">
              <div className="flex-row footer-group">
                <ion-icon name="call-outline"></ion-icon>

                <a href="tel:+48794003304" className="footer-data">
                  +48 794 003 304
                </a>
                <br />
                <a href="tel:+48696466406" className="footer-data">
                  +48 696 466 406
                </a>
              </div>
              <div className="flex-row footer-group">
                <ion-icon name="document-text-outline"></ion-icon>
                <p className="footer-data">NIP: 9590694562</p>
              </div>
            </div>
            <div className="flex-col footer-contact-groups">
              <div className="flex-row footer-group">
                <ion-icon name="mail-outline"></ion-icon>
                <p className="footer-data">xxxxxxxxx</p>
              </div>
              <div className="flex-row footer-group">
                <ion-icon name="location-outline"></ion-icon>
                <address>
                  <p className="footer-data">
                    Sokołów Dolny 1A, <br />
                    28-305 Sokołów Dolny
                  </p>
                </address>
              </div>
            </div>
          </div>
        </div>
       
      </section>

      <section className="footer-bottom">
        <p>
          2026 © Wszystkie prawa zastrzeżone
          <span> | </span>
          <a href="privacy-policy.html">Polityka prywatności</a>
          <span> | </span>Projekt i wykonanie:&nbsp;
          <a href="https://www.linkedin.com/in/karolina-s-123bb238b/">
            Karolina Szary
          </a>
        </p>
      </section>
    </>
  );
};

export default Footer;
