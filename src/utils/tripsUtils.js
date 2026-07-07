//OFFER component pictures
import familyKayaking from ".././assets/img/family-kayaking.png";
import oneDayKayaking from ".././assets/img/one-day-kayaking.png";
import longKayaking from ".././assets/img/long-kayaking.png";
import wislaKayaking from ".././assets/img/wisla-kayaking.png";

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

export { trips };
