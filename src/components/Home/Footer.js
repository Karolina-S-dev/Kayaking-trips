const Footer = () => {
  return (
    <>
      <section className="footer-section flex-row white">
        <div className="footer-col flex-col">
          <h2 className="footer-title">Gotowy na przygodę?</h2>
          <p className="footer-subtitle">
            Skontaktuj się z nami i zarezerwuj swój termin!
          </p>

          <div className="flex-row footer-contact-groups">
            <div className="flex-row footer-group">
              <ion-icon name="call-outline"></ion-icon>
              <div className="flex-col ">
                <a href="tel:+48794003304" className="footer-data">
                  +48 794 003 304
                </a>
                <a href="tel:+48696466406" className="footer-data">
                  +48 696 466 406
                </a>
              </div>
            </div>
            <div className="flex-row footer-group">
              <ion-icon name="document-text-outline"></ion-icon>
              <p className="footer-data">NIP: 9590694562</p>
            </div>
          </div>
          <div className="flex-row footer-contact-groups">
            <div className="flex-row footer-group">
              <ion-icon name="mail-outline"></ion-icon>
              <p className="footer-data">xxxxxxxxx</p>
            </div>
            <div className="flex-row footer-group">
              <ion-icon name="location-outline"></ion-icon>
              <address>
                <p className="footer-data">Sokołów Dolny 1A</p>
                <p className="footer-data"> 28-305 Sokołów Dolny</p>
              </address>
            </div>
          </div>
        </div>
        <div className="socials-div">
          <a href="https://www.instagram.com/kajakiemponidzie?igsh=MWVhZ2kxeGtlenhqeQ%3D%3D&utm_source=qr">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="https://www.google.com/search?sca_esv=46d04319012e7670&sxsrf=APpeQnt4b3M96xJKXw5UozQVdnC50c8-BQ:1782891064360&q=Sp%C5%82ywy+Kajakowe+U+Jakuba&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_--Lsz_jjCVg37EW0EpLobtl9ozdgUswU0tR1PKkwJaCryt2wsEpc4WFTRMdntQmaQduCW8%3D&uds=AJ5uw188wWN8SkrC9q-xYaK174H7EFpZ1dKmTKKHpzui8RH8_9__Sk0KvOFaARCydofmlqIL2dBEBq8zo_7nV0fnn3ndCUeV9xlA0ymizh9EqK2txI9dHX2Q7HUPVz81asm5hPFyovJ3&sa=X&ved=2ahUKEwjFyMHk-rCVAxWBa_EDHXItA1oQ3PALegQIGRAE&biw=1920&bih=911&dpr=1">
            <ion-icon name="logo-google"></ion-icon>
          </a>
          <a href="https://www.facebook.com/kajakiujakuba/?ref=settings">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </div>
      </section>

      <section className="footer-bottom">
        <p>
          2026 © Spływy Kajakowe u Jakuba Wszystkie prawa zastrzeżone
          <span> | </span>
          <a href="/privacy-policy">Polityka prywatności</a>
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
