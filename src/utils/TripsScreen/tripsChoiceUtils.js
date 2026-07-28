import familyKayaking from "../../assets/img/family-kayaking.png";
import oneDayKayaking from "../../assets/img/one-day-kayaking.png";
import longKayaking from "../../assets/img/long-kayaking.png";
import wislaKayaking from "../../assets/img/wisla-kayaking.png";


const tripcChoiceUtils = [
  {
    route: "/trasy-splywow/splywy-rodzinne",
    img: familyKayaking,
    alt: "Spływ rodzinny",
    title: "Rodzinny",
    duration: "2h - 4h",
  },
  {
    route: "/trasy-splywow/splywy-jednodniowe",
    img: oneDayKayaking,
    alt: "Spływ jednodniowy",
    title: "Jednodniowy",
    duration: "4h - 8h",
  },
  {
    route: "/trasy-splywow/splywy-kilkudniowe",
    img: longKayaking,
    alt: "Spływ 2-3 dniowy",
    title: "Kilkudniowy",
    duration: "2 - 3 dni",
  },
  {
    route: "/trasy-splywow/splywy-na-zyczenie",
    img: wislaKayaking,
    alt: "Spływ tygodniowy",
    title: "Na życzenie",
    duration: "do 7 dni",
  },
];

export { tripcChoiceUtils };
