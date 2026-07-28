import { motion } from "motion/react";

const TripsHero = () => {
  return (
    <>
      <section className="trips-hero-section flex-col">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="trips-hero-label white">Trasy spływów kajakowych</p>
          <p className="trips-hero-title white">
            Od rodzinnych tras po tygodniowe wyprawy
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default TripsHero;
