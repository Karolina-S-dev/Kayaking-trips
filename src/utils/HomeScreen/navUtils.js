const navUtils = [
  {
    text: "Strona główna",
    route: "/",
    type: "common",
    icon: <ion-icon name="home-outline"></ion-icon>,
  },
  {
    text: "Trasy spływów",
    route: "/trasy-splywow",
    type: "common",
    icon: <ion-icon name="git-branch-outline"></ion-icon>,
  },
  {
    text: "Galeria",
    route: "/galeria",
    type: "common",
    icon: <ion-icon name="image-outline"></ion-icon>,
  },
  {
    text: "FAQ",
    route: "/faq",
    type: "common",
    icon: <ion-icon name="help-circle-outline"></ion-icon>,
  },

  { text: "Kontakt", route: "/kontakt", type: "contact", isMobile: false },
  {
    text: "PL",
    route: "",
    type: "languagePl",
    icon: <ion-icon name="globe-outline"></ion-icon>,
  },
  {
    text: "ENG",
    route: "",
    type: "languageEng",
    icon: <ion-icon name="globe-outline"></ion-icon>,
  },
];

export { navUtils };
