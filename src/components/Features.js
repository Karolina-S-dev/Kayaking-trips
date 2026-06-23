import kayakIcon from "../assets/icons/kayak-icon.png";
import peopleIcon from "../assets/icons/people-icon.png";
import transportIcon from "../assets/icons/transport-icon.png";
import viewsIcon from "../assets/icons/views-icon.png";

const Features = () => {
  return (
    <section className="features-section flex-row">
      <div className="features-card flex-col">
        <img src={kayakIcon} alt="" />
        <h4>Bezpieczny sprzęt</h4>
        <p>Nowoczesne kajaki i kamizelki asekuracyjne</p>
      </div>
      <div className="features-card flex-col">
        <img src={viewsIcon} alt="" />
        <h4>Malownicze trasy</h4>
        <p>Najpiękniejsze zakątki doliny Nidy</p>
      </div>
      <div className="features-card flex-col">
        <img src={transportIcon} alt="" />
        <h4>Transport</h4>
        <p>Zapewniamy transport uczestników i sprzętu</p>
      </div>
      <div className="features-card flex-col">
        <img src={peopleIcon} alt="" />
        <h4>Dla każdego</h4>
        <p>Rodziny, grupy, firmy i szkoły</p>
      </div>
    </section>
  );
};

export default Features;
