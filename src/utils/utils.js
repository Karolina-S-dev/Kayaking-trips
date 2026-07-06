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

//GOOGLEREVIEWS component pictures
import userPawel from ".././assets/img/GoogleReviews/userPaweł.png";
import userMagdalena from ".././assets/img/GoogleReviews/userMagdalena.png";
import userTomaszC from ".././assets/img/GoogleReviews/userTomaszC.png";
import userJuliannaB from ".././assets/img/GoogleReviews/userJuliannaB.png";
import userBasia from ".././assets/img/GoogleReviews/userBasia.png";
import userAgataO from ".././assets/img/GoogleReviews/userAgataO.png";
import userPawelL from ".././assets/img/GoogleReviews/userPawelL.png";
import userPiotrB from ".././assets/img/GoogleReviews/userPiotrB.png";
import userGrzegorzB from ".././assets/img/GoogleReviews/userGrzegorzB.png";

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

const faqContentData = [
  {
    id: 1,
    title: "Rezerwacja i płatność",
    icon: <ion-icon name="calendar-outline"></ion-icon>,
    questions: [
      {
        question: "Jak zarezerwować spływ?",
        answer:
          "Rezerwacji możesz dokonać telefonicznie, przez formularz kontaktowy na stronie lub w wiadomości e-mail. Odpowiemy jak najszybciej, aby potwierdzić szczegóły.",
      },
      {
        question: "Czy trzeba wpłacać zaliczkę?",
        answer: "",
      },
      {
        question: "Czy można zapłacić na miejscu?",
        answer: "",
      },
      {
        question: "Czy mogę zmienić termin rezerwacji?",
        answer: "",
      },
    ],
  },
  {
    id: 2,
    title: "Przebieg spływu",
    icon: <ion-icon name="git-merge-outline"></ion-icon>,
    questions: [
      {
        question: "Czy przed spływem odbywa się instruktaż?",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
    ],
  },
  {
    id: 3,
    title: "Dla kogo są spływy?",
    icon: <ion-icon name="people"></ion-icon>,
    questions: [
      {
        question: "Czy spływ jest odpowiedni dla dzieci?",
        answer: "",
      },
      {
        question: "Czy trzeba umieć pływać?",
        answer: "",
      },
      {
        question: "Czy osoby początkujące sobie poradzą?",
        answer: "",
      },
      {
        question: "Czy można zabrać psa na spływ?",
        answer: "",
      },
    ],
  },
  {
    id: 4,
    title: "Sprzęt i bezpieczeństwo",
    icon: <ion-icon name="shield-checkmark-outline"></ion-icon>,
    questions: [
      {
        question: "Czy otrzymamy kamizelki ratunkowe?",
        answer: "",
      },
      {
        question: "Co warto zabrać na spływ?",
        answer: "",
      },
      {
        question: "Gdzie przechowywać telefon i rzeczy osobiste?",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
    ],
  },
  {
    id: 5,
    title: "Pogoda i organizacja",
    icon: <ion-icon name="cloudy"></ion-icon>,
    questions: [
      {
        question: "Czy spływ odbywa się podczas deszczu?",
        answer: "",
      },
      {
        question: "Co w przypadku złej pogody?",
        answer: "",
      },
      {
        question: "Czy po spływie można zorganizować ognisko?",
        answer: "",
      },
      {
        question: "Jak wcześnie należy pojawić się na miejscu zbiórki?",
        answer: "",
      },
    ],
  },
];

const faqHomeData = [
  {
    question: faqContentData[0].questions[0].question,
    answer: faqContentData[0].questions[0].answer,
    icon: <ion-icon name="calendar-outline"></ion-icon>,
  },
  {
    question: faqContentData[0].questions[1].question,
    answer: faqContentData[0].questions[1].answer,
    icon: <ion-icon name="card-outline"></ion-icon>,
  },
  {
    question: faqContentData[2].questions[2].question,
    answer: faqContentData[2].questions[2].answer,
    icon: <ion-icon name="people-outline"></ion-icon>,
  },
  {
    question: faqContentData[1].questions[0].question,
    answer: faqContentData[1].questions[0].answer,
    icon: <ion-icon name="accessibility-outline"></ion-icon>,
  },
  {
    question: faqContentData[2].questions[0].question,
    answer: faqContentData[2].questions[0].answer,
    icon: <ion-icon name="happy-outline"></ion-icon>,
  },
];

const googleReviews = [
  {
    image: userPawel,
    userName: "Paweł",
    userReviews: "Lokalny przewodnik · 841 opinii",
    date: "czerwiec 2026",
    content:
      "Świetny kontakt, wszystko ustalone telefonicznie bez problemu. Zaznacze, że masza grupa to prawie 40 osób. Logistyka transportu, początek-koniec trasy bardzo sprawna. Bardzo duży plus za opracowane i przygotowane dyplomy dla dzieci. Ale nie ma się co dziwić, Pan Jakub jest uśmiechniętym, otwartym człowiekiem, wychodzącym z różnymi propozycjami i dodatkowymi atrakcjami. Życzymy dalszego zaplanowanego rozwoju, jednocześnie nie zmieniając spontaniczności i luźnej ale konkretnej komunikacji z klientem.",
  },
  {
    image: userJuliannaB,
    userName: "Julianna Bieniek",
    userReviews: "3 opinie",
    date: "lipiec 2025",
    content:
      "To był traf w dziesiątkę!!! Super cena, kajaki, widoki, rzeka… natomiast najbardziej urzekło nas ciepło bijące od Pana Jakuba!!! Dawno nie spotkałam człowieka od którego emanuje tyle dobroci!!! Wykrzykniki są konieczne, było NIESAMOWICIE!!! Dziękuję jeszcze raz",
  },
  {
    image: userBasia,
    userName: "Basia",
    userReviews: "Lokalny przewodnik · 112 opinii",
    date: "czerwiec 2026",
    content: "Super spływ i jego obsługa. Wszyscy zadowoleni.",
  },
  {
    image: userMagdalena,
    userName: "Magdalena Kobyłecka",
    userReviews: "3 opinie",
    date: "czerwiec 2023",
    content:
      "Serdecznie polecam spływ u tego Pana, trasa ustalona w zależności od umiejętności. Nasza Żerniki - Mokrsko na ok. 4 h, była w sam raz dla rodzin z dziećmi. Z postojem po drodze na plaży na ognisko i kielbaski zrobiło się 5 h.",
  },
  {
    image: userTomaszC,
    userName: "Tomasz Chrostek",
    userReviews: "Lokalny przewodnik · 397 opinii",
    date: "lipiec 2020",
    content:
      "Rewelacja. To jest pomysł na turystykę w tym pięknym rejonie. Obszar Natura 2000 przyciąga turystów. Można się na tym przykładzie nauczyć. Facet zaczynał z 4 kajakami, które kupił za grosze stare i zużyte. Dzisiaj ma ich 290 nowych i całą infrastrukturę rozwija w miarę możliwości. Organizacja bez zarzutów perfekcyjna. Spływ 1 kajaka 15 km to zaledwie 80 zł. Kraków 4x drożej. Po drodze zwiedzanie zamku rycerskiego - (mój konik) po 5zł. Powrót z przystani bezpłatny na parking. Nida najbardziej malownicza rzeka czysta i płytka (do 0,5m głębokości) nurt łagodny. Płyną kajakarze z dziećmi i psami. Polecam na gorące dni",
  },
  {
    image: userAgataO,
    userName: "Agata Olejarczyk",
    userReviews: "11 opinii",
    date: "lipiec 2022",
    content:
      "Polecam serdecznie. 🙂 Konkurencyjne ceny, możliwość wybrania sobie trasy jest zdecydowanym plusem!😊😊 Poza tym świetna obsługa - Pan pomaga w doborze trasy w zależności od zaawansowania kajakarzy ;) tłumaczy jak należy się zachować podczas pływania. Wrócę na pewno 🔥",
  },
  {
    image: userPawelL,
    userName: "Paweł Łacheta",
    userReviews: "Lokalny przewodnik · 81 opinii",
    date: "sierpień 2021",
    content:
      "Bardzo sprawna organizacja i bardzo dobry kontakt z Panem Jakubem. Kajaki w dobrym stanie, Nida - piękna rzeka. Ceny przystępne. Z czystym sumieniem polecam!",
  },
  {
    image: userPiotrB,
    userName: "Piotr Barczyk",
    userReviews: "Lokalny przewodnik · 36 opinii",
    date: "lipiec 2018",
    content:
      "Polecam gorąco. Indywidualne podejście do klienta. Wypożyczyłem jeden kajak na troszkę późniejsza godzinę a u konkurencji nie było to mozliwe.",
  },
  {
    image: userGrzegorzB,
    userName: "Grzegorz Bukowski",
    userReviews: "Lokalny przewodnik · 395 opinii",
    date: "czerwiec 2020",
    content:
      "Radzę skorzystać. Pięknie spędzony czas z rodziną. Cena nie wygórowane. Jeśli korzystasz z Internetu łatwo tam trafisz. Spływ super.",
  },
];

export {
  featuresData,
  trips,
  whyUsData,
  faqContentData,
  faqHomeData,
  googleReviews,
};
