import familyKayaking from "../../assets/img/family-kayaking.png";
import oneDayKayaking from "../../assets/img/one-day-kayaking.png";
import longKayaking from "../../assets/img/long-kayaking.png";
import wislaKayaking from "../../assets/img/wisla-kayaking.png";

const tripcChoiceUtils = [
  {
    route: "/trasy-splywow/splywy-rodzinne",
    img: familyKayaking,
    alt: "Spływ rodzinny",
    title: "tripsHero.categories.family.type",
    duration: "tripsHero.categories.family.duration",
  },
  {
    route: "/trasy-splywow/splywy-jednodniowe",
    img: oneDayKayaking,
    alt: "Spływ jednodniowy",
    title: "tripsHero.categories.oneDay.type",
    duration: "tripsHero.categories.oneDay.duration",
  },
  {
    route: "/trasy-splywow/splywy-kilkudniowe",
    img: longKayaking,
    alt: "Spływ 2-3 dniowy",
    title: "tripsHero.categories.multiDay.type",
    duration: "tripsHero.categories.multiDay.duration",
  },
  {
    route: "/trasy-splywow/splywy-na-zyczenie",
    img: wislaKayaking,
    alt: "Spływ tygodniowy",
    title: "tripsHero.categories.custom.type",
    duration: "tripsHero.categories.custom.duration",
  },
];

export { tripcChoiceUtils };
