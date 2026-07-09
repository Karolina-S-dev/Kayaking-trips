const TripsHero = () => {
  return (
    <>
      <section className="trips-hero-section flex-col">
        <p className="trips-hero-label white">Trasy spływów kajakowych</p>
        <p className="trips-hero-title white">
          Od rodzinnych tras po tygodniowe wyprawy
        </p>
        <svg
          width="90"
          height="12"
          viewBox="0 0 70 10"
          className="wave align-center "
        >
          <path
            d="M2 6 Q10 2 18 6 T34 6 T50 6 T66 6 T78 6"
            stroke="#F3C623"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </section>
    </>
  );
};

export default TripsHero;
