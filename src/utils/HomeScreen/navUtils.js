const navUtils = [
  {
    text: "navbar.home",
    route: "/",
    type: "common",
    icon: <ion-icon name="home-outline"></ion-icon>,
  },
  {
    text: "navbar.routes",
    route: "/trasy-splywow",
    type: "common",
    icon: <ion-icon name="git-branch-outline"></ion-icon>,
  },
  {
    text: "navbar.gallery",
    route: "/galeria",
    type: "common",
    icon: <ion-icon name="image-outline"></ion-icon>,
  },
  {
    text: "navbar.faq",
    route: "/faq",
    type: "common",
    icon: <ion-icon name="help-circle-outline"></ion-icon>,
  },

  {
    text: "navbar.contact",
    route: "/kontakt",
    type: "contact",
    isMobile: false,
  },
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
