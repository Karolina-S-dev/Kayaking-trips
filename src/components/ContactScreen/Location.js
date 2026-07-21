import googleLogo from "../../assets/icons/google-icon-logo-svgrepo-com.svg";

const Location = () => {
  return (
    <>
      <div className="location-section flex-col">
        <div>
          <p className="contact-label green">Gdzie się spotykamy?</p>
          <svg width="65" height="10" viewBox="0 0 70 10" className="wave ">
            <path
              d="M2 6 Q10 2 18 6 T34 6 T50 6 T66 6 T78 6"
              stroke="#F3C623"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <p className="contact-description ">
            Przed rozpoczęciem spływu wyślemy Ci dokładną lokalizację miejsca
            zbiórki oraz wszystkie niezbędne informacje dotyczące dojazdu.
          </p>
        </div>
        <a
          className="flex-row location-button box-shadow "
          href="https://www.google.com/maps/place/Sp%C5%82ywy+Kajakowe+U+Jakuba/@50.7370146,20.4238117,600m/data=!3m1!1e3!4m6!3m5!1s0x471784df4d101169:0x252be3853d3792ad!8m2!3d50.7376329!4d20.4264899!16s%2Fg%2F11f4vpslc5?hl=pl&entry=ttu&g_ep=EgoyMDI2MDcwNS4wIKXMDSoASAFQAw%3D%3D"
        >
          <img src={googleLogo} alt="Google Logo" className="google-logo" />
          Jak do nas trafić?
          <ion-icon name="arrow-up-right-box-outline"></ion-icon>
        </a>
      </div>
    </>
  );
};

export default Location;
