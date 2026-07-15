import familyKayaking from "../../assets/img/family-kayaking.png";
import oneDayKayaking from "../../assets/img/one-day-kayaking.png";
import longKayaking from "../../assets/img/long-kayaking.png";
import wislaKayaking from "../../assets/img/wisla-kayaking.png";

const TripsChoice = () => {
  return (
    <>
      <section className="trips-choice-section flex-col">
        <p className="trips-choice-label green">Wybierz rodzaj spływu</p>
        <p className="trips-choice-title dark-grey">
          Niezależnie od tego, czy szukasz krótkiej rodzinnej wycieczki, czy
          kilkudniowej przygody na Nidzie, znajdziesz trasę dopasowaną do
          swojego doświadczenia i czasu.
        </p>
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

        <div className="flex-row trips-choice-cards">
          <a
            href="/trasy-splywow/splywy-rodzinne"
            className="trips-choice-card"
          >
            <img src={familyKayaking} alt="Spływ rodzinny" />
            <div className="choice-card-text white">
              <p className="choice-card-title ">Rodzinny</p>
              <p className="choice-card-duration">2h - 4h</p>
            </div>{" "}
          </a>
          <a
            href="/trasy-splywow/splywy-jednodniowe"
            className="trips-choice-card"
          >
            <img src={oneDayKayaking} alt="Spływ jednodniowy" />
            <div className="choice-card-text white">
              <p className="choice-card-title">Jednodniowy</p>
              <p className="choice-card-duration">5 - 30km</p>
            </div>
          </a>
          <a
            href="/trasy-splywow/splywy-kilkudniowe"
            className="trips-choice-card"
          >
            <img src={longKayaking} alt="Spływ 2-3 dniowy" />
            <div className="choice-card-text white">
              <p className="choice-card-title">Kilkudniowy</p>
              <p className="choice-card-duration">2 - 3 dni</p>
            </div>
          </a>
          <a
            href="/trasy-splywow/splywy-na-zyczenie"
            className="trips-choice-card"
          >
            <img src={wislaKayaking} alt="Spływ tygodniowy" />
            <div className="choice-card-text white">
              <p className="choice-card-title">Na życzenie</p>
              <p className="choice-card-duration">do 7 dni</p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default TripsChoice;
