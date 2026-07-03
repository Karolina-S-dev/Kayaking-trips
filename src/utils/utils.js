// FEATURES component pictures
import viewsIcon2 from ".././assets/icons/views-icon2.png";
import transportIcon2 from ".././assets/icons/transport-icon2.png";
import canoeIcon2 from ".././assets/icons/canoe-icon2.png";
import peopleIcon2 from ".././assets/icons/people-icon2.png";
import fireIcon2 from ".././assets/icons/fire-icon2.png";

//OFFER component pictures
import familyKayaking from ".././assets/img/family-kayaking.png";
import oneDayKayaking from ".././assets/img/one-day-kayaking.png";
import longKayaking from ".././assets/img/long-kayaking.png";
import wislaKayaking from ".././assets/img/wisla-kayaking.png";

//WHYUS component pictures
import experienceIcon2 from ".././assets/icons/experience-icon2.png";
import googleIcon2 from ".././assets/icons/google-icon2.png";
import canoeIcon3 from ".././assets/icons/canoe-icon3.png";
import routesIcon2 from ".././assets/icons/routes-icon2.png";

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

const trips = [
  {
    id: 1,
    image: familyKayaking,
    title: "Spływ rodzinny",
    duration: "Około 2h",
    longness: "5km",
    desc: "Idealny dla dzieci i osób, które pierwszy raz płyną kajakiem",
    feature: "Spokojny odcinek Nidy",
    feature2: "Bezpieczna trasa",
    feature3: "Dla całych rodzin",
    ctaText: "Zobacz trasę",
  },
  {
    id: 2,
    image: oneDayKayaking,
    title: "Spływy jednodniowe",
    duration: "1 dzień",
    longness: "11-30km",
    desc: "Najpopularniejsza opcja dla rodzin, grup znajomych i firm",
    feature: "9 tras do wyboru",
    feature2: "Transport i sprzęt w cenie",
    feature3: "Piękne widoki",
    ctaText: "Zobacz trasy",
    additionalInfo: "Najbardziej popularne",
  },
  {
    id: 3,
    image: longKayaking,
    title: "Spływy kilkudniowe",
    duration: "2 - 3 dni",
    longness: "29-43km",
    desc: "Pełna przygoda dla osób chcących spędzić więcej czasu na wodzie.",
    feature: "4 trasy do wyboru",
    feature2: "Kompleksowa organizacja",
    feature3: "Piękne widoki",
    ctaText: "Zobacz trasy",
  },
  {
    id: 4,
    image: wislaKayaking,
    title: "Spływ na życzenie",
    duration: "7 dni",
    desc: "Organizujemy również dłuższe wyprawy kajakowe - spływ do rzeki Wisły.",
    feature: "Trasa wielodniowa",
    feature2: "Możliwość spływu Wisłą",
    feature3: "Piękne widoki",
    ctaText: "Zobacz trasy",
  },
];

const whyUsData = [
  {
    id: 1,
    image: experienceIcon2,
    title: "10 +",
    desc: "lat doświadczenia",
  },
  {
    id: 2,
    title: "4.9",
    desc: "średnia opinii Google",
    image: googleIcon2,
  },
  {
    id: 3,
    title: "33",
    desc: "nowoczesne kajaki",
    image: canoeIcon3,
  },
  {
    id: 4,
    title: "14",
    desc: "pięknych tras",
    image: routesIcon2,
  },
];

export { featuresData, trips, whyUsData };
