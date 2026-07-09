import familyTrips from "../../assets/img/family-trips.png";

const FamilyTrips = () => {
  return (
    <>
      <section className="family-trips-section flex-col">
        <p className="family-trips-label">Spływy rodzinne</p>
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
        <div className="flex-row family-trips">
          <div className="trips-map">
            <img src={familyTrips} alt="Mapa spływów rodzinnych" />
          </div>
          <div className="trips-content">
            <p className="trips-content-title">🚣 Brzegi - Mokrsko (ok. 3 godz.)</p>
            <p>Idealna trasa dla początkujących i rodzin z dziećmi</p>
            <p>
              To zdecydowanie najczęściej wybierana trasa przez naszych
              klientów. Szerokie i spokojne koryto Nidy sprawia, że spływ jest
              łatwy, komfortowy i niezwykle przyjemny, dlatego często nazywany
              jest „kajakową autostradą”. Trasa jest szczególnie polecana osobom
              rozpoczynającym swoją przygodę z kajakarstwem oraz rodzinom z
              dziećmi.
            </p>
            <p>
              ⚠️ Ważna informacja: Na trasie znajduje się jedno miejsce
              wymagające szczególnej ostrożności - most kolejowy w miejscowości
              Brzezno. Przed rozpoczęciem spływu dokładnie omawiamy z
              uczestnikami sposób bezpiecznego pokonania tego odcinka.
            </p>
            <p>
              Po drodze przepływamy obok malowniczego Zamku Rycerskiego w
              Sobkowie, gdzie istnieje możliwość krótkiego postoju i zwiedzenia
              tej wyjątkowej atrakcji.
            </p>
            <p>
              🏁 Meta spływu znajduje się na naszej Przystani Kajakowej u Jakuba
              w Mokrsku, gdzie czeka na Was wygodny odbiór oraz transport.
            </p>
            <p>🌿 Poziom trudności: łatwy</p>
            <p> ⏱️ Czas spływu: ok. 3 godziny</p>
            <p>
              👨‍👩‍👧‍👦 Polecana dla: początkujących, rodzin z dziećmi oraz grup
              zorganizowanych.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FamilyTrips;
