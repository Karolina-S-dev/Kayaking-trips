import experienceIcon from "../../assets/icons/experience-icon.png";
import safetyIcon from "../../assets/icons/safety-icon.png";
import transportIcon from "../../assets/icons/transport-icon.png";
import fireIcon from "../../assets/icons/fire-icon.png";
import viewsIcon from "../../assets/icons/views-icon.png";
import peopleIcon from "../../assets/icons/people-icon.png";
import canoeIcon from "../../assets/icons/canoe-icon.png";
import routesIcon from "../../assets/icons/routes-icon.png";
import googleIcon from "../../assets/icons/google-icon.png";

const worthData = [
  {
    id: 1,
    image: experienceIcon,
    title: "10 lat doświadczenia",
    desc: "Od ponad dekady organizujemy spływy, które pokochali nasi klienci",
  },
  {
    id: 2,
    title: "Bezpieczny sprzęt",
    desc: "Regularnie kontrolowane kajaki oraz pełne wyposażenie ratunkowe.",
    image: safetyIcon,
  },
  {
    id: 3,
    title: "Transport uczestników",
    desc: "Zapewniamy wygodny transport na miejsce startu i po zakończeniu spływu.",
    image: transportIcon,
  },
  {
    id: 4,
    title: "Organizacja ognisk",
    desc: "Zadbamy o ognisko, kiełbaski i świetną atmosferę po zakończonej wyprawie.",
    image: fireIcon,
  },
  {
    id: 5,
    title: "Malownicze trasy",
    desc: "Najpiękniejsze zakątki Doliny Nidy blisko natury i z dala od zgiełku.",
    image: viewsIcon,
  },
  {
    id: 6,
    title: "Dla każdego",
    desc: "Spływy dla rodzin z dziećmi, par, grup znajomych, firm i szkół.",
    image: peopleIcon,
  },
  {
    id: 7,
    title: "33 kajaki",
    desc: "Duża flota stabilnych i wygodnych kajaków 1- oraz 2-osobowych.",
    image: canoeIcon,
  },
  {
    id: 8,
    title: "13 tras w Dolinie Nidy",
    desc: "Różne długości i poziomy trudności — od krótkich tras rodzinnych po całodniowe wyprawy.",
    image: routesIcon,
  },
  {
    id: 9,
    title: "Ocena 4,9 w Google",
    desc: "Średnia ocen naszych klientów potwierdza wysoką jakość organizowanych spływów.",
    image: googleIcon,
  },
];

const Worth = () => {
  return (
    <>
      <section className="worth-section flex-col">
        <p className="green worth-label">Dlaczego warto wybrać nas?</p>
        <div className="worth-cards-row flex-row">
          {worthData.map((data) => (
            <div className="worth-card flex-col">
              <img src={data.image} alt="" />
              <p className="worth-card-title">{data.title}</p>
              <p className="worth-card-desc">{data.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Worth;
