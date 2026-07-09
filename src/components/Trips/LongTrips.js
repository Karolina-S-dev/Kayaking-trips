import longTrips from "../../assets/img/long-trips.jpeg";

const LongTrips = () => {
  return (
    <>
      <section className="long-trips-section flex-col">
        <p className="long-trips-label">Spływy rodzinne</p>
        <svg
          width="90"
          height="12"
          viewBox="0 0 70 10"
          className="wave align-center"
        >
          <path
            d="M2 6 Q10 2 18 6 T34 6 T50 6 T66 6 T78 6"
            stroke="#F3C623"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <div className="flex-row long-trips-map">
          <div className="long-map">
            <img src={longTrips} alt="Mapa spływów rodzinnych" />
          </div>
          <div className="long-trips-content">
            <p className="long-trips-content-title">
              🚣 Mniszek - Mokrsko (2 dni)
            </p>
            <p>
              Dwudniowa wyprawa kajakowa • Poziom trudności: trudny / średni
            </p>
            <p>
              To propozycja dla osób, które chcą przeżyć prawdziwą kajakową
              przygodę i poznać dwa zupełnie różne oblicza Nidy. Pierwszy dzień
              dostarcza emocji i wyzwań na dzikiej Białej Nidzie, natomiast
              drugi pozwala odpocząć podczas spokojnego spływu głównym nurtem
              Nidy.
            </p>
            <p>
              Dzień 1 - Dzika Biała Nida Spływ rozpoczyna się w Mniszku, w
              pobliżu zabytkowego młyna rzecznego. Już od pierwszych kilometrów
              rzeka zachwyca swoim naturalnym charakterem. Wąskie koryto o
              szerokości około 4 metrów, liczne zakręty, lasy oraz gęste zarośla
              sprawiają, że jest to jeden z najbardziej malowniczych odcinków w
              całym regionie. Na trasie czekają: * liczne zakola, * niewielkie
              bystrza i naturalne progi wodne, * powalone drzewa, * odcinki
              wymagające precyzyjnego manewrowania. Jednym z najbardziej
              charakterystycznych miejsc jest Młyn Wyspa, gdzie - w zależności
              od poziomu wody - przepłynięcie pod drewnianym mostkiem może
              wymagać większej ostrożności lub krótkiej przenoski.
            </p>
            <p>
              ⚠️ Biała Nida jest rzeką wymagającą, dlatego pierwszy dzień spływu
              polecamy osobom posiadającym podstawowe doświadczenie kajakowe.
            </p>
            <p>
              🏕️ Nocleg w sercu natury Największym atutem tej wyprawy jest
              możliwość noclegu w całkowicie naturalnym otoczeniu. Na odcinku
              Białej Nidy nie ma zorganizowanych pól namiotowych bezpośrednio
              nad rzeką, dlatego biwak odbywa się „na dziko”, zgodnie z
              obowiązującymi przepisami i z poszanowaniem przyrody. To wyjątkowa
              okazja, aby spędzić wieczór przy ognisku, wsłuchać się w odgłosy
              lasu i zobaczyć nocne niebo z dala od miejskich świateł. To
              właśnie ten element sprawia, że wielu uczestników uznaje tę trasę
              za najbardziej klimatyczną spośród wszystkich naszych wypraw.
            </p>
            <p>
              Dzień 2 - Spokojna Nida Po połączeniu Białej Nidy z Czarną Nidą
              wpływamy na główny nurt rzeki Nidy, często nazywany przez
              kajakarzy „kajakową autostradą”. To zdecydowanie spokojniejszy
              odcinek, który pozwala odpocząć po wymagającym pierwszym dniu.
              Szerokie koryto, łagodny nurt oraz malownicze krajobrazy
              sprawiają, że drugi etap wyprawy ma charakter relaksacyjny. ⚠️
              Jedynym miejscem wymagającym szczególnej ostrożności jest most
              kolejowy w miejscowości Brzezno. Zasady jego bezpiecznego
              pokonania są szczegółowo omawiane podczas instruktażu przed
              rozpoczęciem spływu. 🏰 Po drodze przepływamy również obok Zamku
              Rycerskiego w Sobkowie, gdzie istnieje możliwość krótkiego postoju
              i zwiedzenia tej wyjątkowej atrakcji. 🏁 Meta wyprawy znajduje się
              na naszej Przystani Kajakowej u Jakuba w Mokrsku. ⸻ Informacje o
              trasie 🌿 Czas trwania: 2 dni 💪 Poziom trudności: trudny (dzień
              1) / łatwy (dzień 2) 🏕️ Nocleg: biwak na dziko w otoczeniu natury
              👥 Polecana dla: osób szukających prawdziwej kajakowej wyprawy,
              miłośników biwakowania i dzikiej przyrody. Jeżeli marzysz o
              spływie z dala od tłumów, noclegu pod gwiazdami i odkrywaniu
              miejsc, do których można dotrzeć wyłącznie kajakiem - trasa
              Mniszek - Mokrsko będzie niezapomnianą przygodą.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LongTrips;
