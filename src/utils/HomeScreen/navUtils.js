const navUtils = [
  {
    text: "Strona główna",
    route: "/",
    type: "common",
    isMobile: false,
    icon: <ion-icon name="home-outline"></ion-icon>,
  },
  {
    text: "Trasy spływów",
    route: "/trasy-splywow",
    type: "common",
    isMobile: false,
    icon: <ion-icon name="git-branch-outline"></ion-icon>,
  },
  {
    text: "Galeria",
    route: "/galeria",
    type: "common",
    isMobile: false,
    icon: <ion-icon name="image-outline"></ion-icon>,
  },
  {
    text: "FAQ",
    route: "/faq",
    type: "common",
    isMobile: false,
    icon: <ion-icon name="help-circle-outline"></ion-icon>,
  },
  {
    text: "PL | ENG",
    route: "",
    type: "common",
    isMobile: false,
    icon: <ion-icon name="globe-outline"></ion-icon>,
  },
  { text: "Kontakt", route: "/kontakt", type: "contact", isMobile: false },
];

export { navUtils };
