//OFFER component pictures
import familyKayaking from "../../assets/img/family-kayaking.png";
import oneDayKayaking from "../../assets/img/one-day-kayaking.png";
import longKayaking from "../../assets/img/long-kayaking.png";
import wislaKayaking from "../../assets/img/wisla-kayaking.png";

const offerTrips = [
  {
    id: 1,
    image: familyKayaking,
    title: "offer.family.title",
    duration: "offer.family.duration",
    longness: "5km",
    desc: "offer.family.description",
    feature: "offer.family.featureOne",
    feature2: "offer.family.featureTwo",
    feature3: "offer.family.featureThree",
    ctaText: "offer.family.button",
    link: "/trasy-splywow/splywy-rodzinne",
  },
  {
    id: 2,
    image: oneDayKayaking,
    title: "offer.oneDay.title",
    duration: "offer.oneDay.duration",
    longness: "11-30km",
    desc: "offer.oneDay.description",
    feature: "offer.oneDay.featureOne",
    feature2: "offer.oneDay.featureTwo",
    feature3: "offer.oneDay.featureThree",
    ctaText: "offer.oneDay.button",
    additionalInfo: "offer.oneDay.badge",
    link: "/trasy-splywow/splywy-jednodniowe",
  },
  {
    id: 3,
    image: longKayaking,
    title: "offer.multiDay.title",
    duration: "offer.multiDay.duration",
    longness: "29-43km",
    desc: "offer.multiDay.description",
    feature: "offer.multiDay.featureOne",
    feature2: "offer.multiDay.featureTwo",
    feature3: "offer.multiDay.featureThree",
    ctaText: "offer.multiDay.button",
    link: "/trasy-splywow/splywy-kilkudniowe",
  },
  {
    id: 4,
    image: wislaKayaking,
    title: "offer.custom.title",
    duration: "offer.custom.duration",
    desc: "offer.custom.description",
    feature: "offer.custom.featureOne",
    feature2: "offer.custom.featureTwo",
    feature3: "offer.custom.featureThree",
    ctaText: "offer.custom.button",
    link: "/trasy-splywow/splywy-na-zyczenie",
  },
];

export { offerTrips };
