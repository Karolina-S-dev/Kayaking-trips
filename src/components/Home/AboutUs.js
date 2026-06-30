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
          <p className="about-us-description">
            Jesteśmy miłośnikami kajaków i przyrody. Od lat organizujemy spływy,
            które łączą aktywny wypoczynek z bliskością natury. Dbamy o
            bezpieczeństwo, komfort i dobrą atmosferę.
          </p>
        </div>

        <div className="about-us-photo-col">
          <img src={riverSunset} alt="" />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
