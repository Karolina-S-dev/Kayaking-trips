const faqContentData = [
  {
    id: 1,
    title: "Rezerwacja i płatność",
    icon: <ion-icon name="calendar-outline"></ion-icon>,
    questions: [
      {
        question: "Jak zarezerwować spływ?",
        answer:
          "Rezerwacji możesz dokonać telefonicznie, przez formularz kontaktowy na stronie lub w wiadomości e-mail. Odpowiemy jak najszybciej, aby potwierdzić dostępność terminu i ustalić szczegóły spływu.",
      },
      {
        question: "Czy trzeba wpłacać zaliczkę?",
        answer:
          "W przypadku większych grup lub rezerwacji dokonywanych z dużym wyprzedzeniem możemy poprosić o wpłatę zaliczki. Szczegółowe informacje dotyczące płatności przekazujemy podczas potwierdzania rezerwacji.",
      },
      {
        question: "Czy można zapłacić na miejscu?",
        answer:
          "Tak, płatności można dokonać na miejscu przed rozpoczęciem spływu. Dostępne formy płatności najlepiej potwierdzić podczas rezerwacji.",
      },
      {
        question: "Czy mogę zmienić termin rezerwacji?",
        answer:
          "Tak, zmiana terminu jest możliwa w zależności od dostępności kajaków. Prosimy o jak najszybszy kontakt, abyśmy mogli zaproponować inny dogodny termin.",
      },
      {
        question: "Co jest zawarte w cenie?",
        answer:
          "Cena obejmuje wynajem kajaka, wiosła, kamizelki asekuracyjne oraz transport uczestników i sprzętu zgodnie z organizacją wybranej trasy.",
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
        answer:
          "Tak, przed rozpoczęciem spływu przeprowadzamy krótki instruktaż dotyczący techniki wiosłowania, zachowania na wodzie oraz podstawowych zasad bezpieczeństwa.",
      },
      {
        question: "Dla ilu osób minimum spływ się odbędzie?",
        answer:
          "Minimalna liczba uczestników zależy od wybranej trasy oraz terminu. W przypadku mniejszych grup prosimy o kontakt, aby sprawdzić możliwość dołączenia do innego spływu.",
      },
      {
        question: "Dla ilu osób maksymalnie może odbyć się spływ?",
        answer:
          "Liczebność grupy zależy od dostępności sprzętu. Organizujemy zarówno kameralne spływy rodzinne, jak i wyjazdy dla większych grup, firm oraz szkół.",
      },
      {
        question: "Jak wygląda transport na miejsce rozpoczęcia spływu?",
        answer:
          "Szczegóły transportu zależą od wybranej trasy. Najczęściej spotykamy się na przystani, skąd uczestnicy są przewożeni na miejsce startu, a spływ kończy się przy naszej bazie.",
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
        answer:
          "Tak, wybrane trasy są odpowiednie dla rodzin z dziećmi. Przy rezerwacji warto podać wiek dzieci, abyśmy mogli zaproponować bezpieczną i komfortową trasę.",
      },
      {
        question: "Czy trzeba umieć pływać?",
        answer:
          "Umiejętność pływania nie jest obowiązkowa, jednak każdy uczestnik musi przez cały spływ korzystać z odpowiednio dopasowanej kamizelki asekuracyjnej.",
      },
      {
        question: "Czy osoby początkujące sobie poradzą?",
        answer:
          "Oczywiście. Wiele naszych tras ma spokojny nurt i jest odpowiednich dla osób, które po raz pierwszy wsiadają do kajaka. Przed startem przeprowadzamy również krótki instruktaż.",
      },
      {
        question: "Czy można zabrać psa na spływ?",
        answer:
          "Tak, na większość tras można zabrać psa, o ile zwierzę dobrze czuje się w kajaku i nie zagraża bezpieczeństwu uczestników. Prosimy poinformować nas o tym podczas rezerwacji.",
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
        answer:
          "Tak, każdy uczestnik otrzymuje odpowiednio dopasowaną kamizelkę asekuracyjną. Korzystanie z niej podczas całego spływu jest obowiązkowe.",
      },
      {
        question: "Co warto zabrać na spływ?",
        answer:
          "Warto zabrać wygodne ubranie, nakrycie głowy, krem z filtrem, wodę, lekką przekąskę oraz obuwie, które może się zamoczyć. Przy chłodniejszej pogodzie przyda się również dodatkowa bluza lub kurtka.",
      },
      {
        question: "Gdzie przechowywać telefon i rzeczy osobiste?",
        answer:
          "Telefon, dokumenty i inne wartościowe przedmioty najlepiej umieścić w szczelnym worku lub etui wodoodpornym. Warto zabrać tylko najpotrzebniejsze rzeczy.",
      },
      {
        question: "Co zrobić w przypadku wywrotki?",
        answer:
          "Przede wszystkim należy zachować spokój, trzymać się kajaka i stosować do zasad przekazanych podczas instruktażu. Na spokojnych trasach kajak zazwyczaj można bezpiecznie odholować do brzegu.",
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
        answer:
          "Lekki deszcz nie zawsze oznacza konieczność odwołania spływu. Decyzję podejmujemy na podstawie aktualnych warunków pogodowych i poziomu bezpieczeństwa na trasie.",
      },
      {
        question: "Co w przypadku złej pogody?",
        answer:
          "W przypadku burzy, silnego wiatru lub innych niebezpiecznych warunków spływ może zostać przełożony na inny termin. Bezpieczeństwo uczestników jest dla nas najważniejsze.",
      },
      {
        question: "Czy po spływie można zorganizować ognisko?",
        answer:
          "Tak, istnieje możliwość zorganizowania ogniska po spływie. Szczegóły, dostępność miejsca oraz ewentualne dodatkowe koszty należy ustalić podczas rezerwacji.",
      },
      {
        question: "Jak wcześnie należy pojawić się na miejscu zbiórki?",
        answer:
          "Prosimy o przybycie około 15 - 20 minut przed ustaloną godziną. Pozwoli to spokojnie dopełnić formalności, dobrać sprzęt i przeprowadzić instruktaż.",
      },
    ],
  },
];

export { faqContentData };
