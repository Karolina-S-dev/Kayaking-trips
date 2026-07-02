import viewsIcon2 from "../../assets/icons/views-icon2.png";
import transportIcon2 from "../../assets/icons/transport-icon2.png";
import canoeIcon2 from "../../assets/icons/canoe-icon2.png";
import peopleIcon2 from "../../assets/icons/people-icon2.png";
import fireIcon2 from "../../assets/icons/fire-icon2.png";

const Features = () => {
  const featuresData = [
    {
      id: 1,
      title: "Bezpieczny sprzęt",
      desc: "Regularnie kontrolowane kajaki oraz pełne wyposażenie ratunkowe.",
      image: canoeIcon2,
    },
    {
      id: 2,
      title: "Malownicze trasy",
      desc: "Najpiękniejsze zakątki Doliny Nidy blisko natury i z dala od zgiełku.",
      image: viewsIcon2,
    },
    {
      id: 3,
      title: "Transport uczestników",
      desc: "Zapewniamy wygodny transport na miejsce startu i po zakończeniu spływu.",
      image: transportIcon2,
    },
    {
      id: 4,
      title: "Dla każdego",
      desc: "Spływy dla rodzin z dziećmi, par, grup znajomych, firm i szkół.",
      image: peopleIcon2,
    },
    {
      id: 5,
      title: "Organizacja ognisk",
      desc: "Zadbamy o ognisko, kiełbaski i świetną atmosferę po zakończonej wyprawie.",
      image: fireIcon2,
    },
  ];
  return (
    <>
      <div className="features-cards flex-row">
        {featuresData.map((item) => (
          <div key={item.id} className="features-card flex-col">
            <img src={item.image} alt="Ikony" />
            <p className="features-card-title">{item.title}</p>
            <p className="features-card-subtitle">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
