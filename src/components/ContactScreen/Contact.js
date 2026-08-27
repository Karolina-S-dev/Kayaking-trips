import ContactForm from "./ContactForm";
import Location from "./Location";
import Reservation from "./Reservation";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="contact-section"
      >
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

          <ContactForm />
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
