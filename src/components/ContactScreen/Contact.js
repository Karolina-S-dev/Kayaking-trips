import Location from "./Location";
import Reservation from "./Reservation";

const Contact = () => {
  return (
    <>
      <main className="contact-section">
        <div className="flex-row contact-main-row">
          {/* ----- LEFT-COLUMN ----- */}
          <div className="flex-col contact-text-column">
            <p className="contact-title navy-blue">Skontaktuj się z nami</p>
            <svg width="90" height="12" viewBox="0 0 70 10" className="wave ">
              <path
                d="M2 6 Q10 2 18 6 T34 6 T50 6 T66 6 T78 6"
                stroke="#F0D11F"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <p className="contact-description dark-grey">
              Masz pytania lub chcesz zarezerwować spływ? Jesteśmy do Twojej
              dyspozycji - chętnie doradzimy najlepszą trasę na Nidzie.
            </p>
            <div className="flex-row contact-buttons">
              <a
                href="tel:+48794003304"
                className="contact-button flex-row box-shadow navy-blue"
              >
                <ion-icon name="call"></ion-icon>
                <p> Zadzwoń: 794 003 304</p>
              </a>
              <a
                href="tel:+48696466406"
                className="contact-button flex-row box-shadow navy-blue"
              >
                <ion-icon name="call"></ion-icon>
                <p>Zadzwoń: 696 466 406</p>
              </a>
            </div>
            <Reservation />
            <Location />
          </div>

          {/* ------ FORM ------ */}
          <form className="form-contact-us-main flex-col box-shadow">
            <div className="form-header flex-col">
              <ion-icon name="paper-plane-outline"></ion-icon>
              <p className="form-title">Napisz do nas</p>
              <p className="form-subtitle">
                Odpowiemy najszybciej jak to możliwe.
              </p>
            </div>
            <div className="flex-row form-ion-row">
              <ion-icon name="person-outline"></ion-icon>
              <div className="form-group">
                <label htmlFor="name">Imię i nazwisko</label>
                <input
                  type="text"
                  placeholder="Wpisz swoje imię i nazwisko"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                />
              </div>
            </div>
            <div className="flex-row form-ion-row ">
              <ion-icon name="mail-outline"></ion-icon>
              <div className="form-group">
                <label htmlFor="email">Adres e-mail</label>
                <input
                  type="email"
                  placeholder="Wpisz swój adres e-mail"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                />
              </div>
            </div>
            <div className="flex-row form-ion-row ">
              <ion-icon name="call-outline"></ion-icon>
              <div className="form-group">
                <label htmlFor="phone">Numer telefonu</label>
                <input
                  type="tel"
                  placeholder="Wpisz swój numer telefonu"
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  required
                />
              </div>
            </div>
            <div className="flex-row form-ion-row">
              <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
              <div className="form-group">
                <label htmlFor="message">Wiadomość</label>
                <textarea
                  id="message"
                  placeholder="Napisz, w czym możemy Ci pomóc ..."
                  name="message"
                  required
                ></textarea>
              </div>
            </div>
            <div className="form-checkbox flex-row">
              <input type="checkbox" id="privacy" name="privacy" required />
              <label htmlFor="privacy">
                Zapoznałem(-am) się z &nbsp;
                <a href="/polityka-prywatnosci">Polityką Prywatności</a>
                &nbsp; i wyrażam zgodę na przetwarzanie moich danych osobowych w
                celu udzielenia odpowiedzi na przesłane zapytanie.
              </label>
            </div>
            <button className="form-button" type="submit">
              <ion-icon name="paper-plane-outline"></ion-icon>
              Wyślij wiadomość
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Contact;
