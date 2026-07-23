import riverSunset from "../../assets/img/river-sunset.png";

const AboutUs = () => {
  return (
    <>
      <section className="about-us-section flex-row">
        <div className="about-us-text-col">
          <p className="green about-us-label">O nas</p>
          <p className="navy-blue about-us-title">
            Pasja do natury <br />i aktywnego wypoczynku
          </p>
           <svg
          width="85"
          height="12"
          viewBox="0 0 70 10"
          className="wave"
        >
          <path
            d="M2 6 Q10 2 18 6 T34 6 T50 6 T66 6 T78 6"
            stroke="#F0D11F"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
          <p className="about-us-description dark-grey">
            Jesteśmy miłośnikami kajaków i przyrody. Od lat organizujemy spływy,
            które łączą aktywny wypoczynek z bliskością natury. Dbamy o
            bezpieczeństwo, komfort i dobrą atmosferę.
          </p>
        </div>

        <div className="about-us-photo-col">
          <img src={riverSunset} alt="Zachód słońca nad rzeką" />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
