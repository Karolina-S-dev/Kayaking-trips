import kajakNaRzece from "../../assets/img/kajak-na-rzece.png";

const Location = () => {
  return (
    <>
      <div className="location-section flex-col">
        <div>
          <p className="contact-label green">Gdzie się spotykamy?</p>
          <p className="contact-description ">
            Przed rozpoczęciem spływu wyślemy Ci dokładną lokalizację miejsca
            zbiórki oraz wszystkie niezbędne informacje dotyczące dojazdu.
          </p>
          <a
            href="https://www.google.com/maps/place/Sp%C5%82ywy+Kajakowe+U+Jakuba/@50.7378218,20.4225926,15.75z/data=!4m15!1m8!3m7!1s0x471784df4d101169:0x252be3853d3792ad!2sSp%C5%82ywy+Kajakowe+U+Jakuba!8m2!3d50.7376329!4d20.4264899!10e1!16s%2Fg%2F11f4vpslc5!3m5!1s0x471784df4d101169:0x252be3853d3792ad!8m2!3d50.7376329!4d20.4264899!16s%2Fg%2F11f4vpslc5!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDYyOC4wIKXMDSoASAFQAw%3D%3D"
            className="btn-map"
          >
            Zobacz na mapie
          </a>
        </div>
        <div className="flex-row gap ">
          <img src={kajakNaRzece} alt="Kajak na spokojnej rzece" />
          <div className="map-div">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5050.349353710163!2d20.42072785889013!3d50.73524902359604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471784df4d101169%3A0x252be3853d3792ad!2sSp%C5%82ywy%20Kajakowe%20U%20Jakuba!5e0!3m2!1spl!2spl!4v1782903205786!5m2!1spl!2spl"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="google-map"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
