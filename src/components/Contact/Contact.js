import "../../assets/css/contact.css";

import Location from "./Location";

const Contact = () => {
  return (
    <>
      <main className="contact-section">
        <div className="flex-row contact-main-row">
          <div className="flex-col contact-text-column">
            <p className="contact-label green">KONTAKT</p>
            <p className="contact-title navy-blue">Skontaktuj się z nami</p>
            <p className="contact-description dark-grey">
              Masz pytania lub chcesz zarezerwować spływ? Jesteśmy do Twojej
              dyspozycji - chętnie doradzimy najlepszą trasę na Nidzie.
            </p>
            <div className="flex-row contact-buttons">
              <a
                href="tel:+48794003304"
                className="contact-button white flex-row"
              >
                <ion-icon name="call-outline"></ion-icon>ZADZWOŃ : 794 003 304
              </a>
              <a
                href="tel:+48696466406"
                className="contact-button white flex-row"
              >
                <ion-icon name="call-outline"></ion-icon>ZADZWOŃ : 696 466 406
              </a>
            </div>
            <div className="contact-photo-column flex-row">
              <Location />
            </div>
          </div>
          <form className="form-contact-us-main flex-col">
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
                <label htmlFor="message">Wiadomość*</label>
                <textarea
                  id="message"
                  placeholder="Napisz, w czym możemy Ci pomóc ..."
                  name="message"
                  required
                ></textarea>
              </div>
            </div>
            <label className="file-upload">
              <ion-icon name="attach-outline"></ion-icon>
              <div className="flex-col">
                Wybierz plik (opcjonalnie)
                <span>PDF, DOC, DOCX, JPG, PNG, maks. 10 MB</span>
                <input
                  type="file"
                  name="file"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
              </div>
            </label>
            <div className="form-checkbox flex-row">
              <input type="checkbox" id="privacy" name="privacy" required />
              <label htmlFor="privacy">
                Zapoznałem(-am) się z &nbsp;
                <a href="/privacy-policy">Polityką Prywatności</a>
                &nbsp; i wyrażam zgodę na przetwarzanie moich danych osobowych w
                celu udzielenia odpowiedzi na przesłane zapytanie.
              </label>
            </div>
            <div className="form-button">
              <button className="btn-submit" type="submit">
                <ion-icon name="paper-plane-outline"></ion-icon>
                Wyślij wiadomość
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Contact;
