const ReservationCard = ({ index, item }) => {
  return (
    <>
      <div key={index} className="reservation-card flex-col">
        <p className="reservation-number">{item.number}</p>
        <p className="reservation-title">{item.title}</p>
        <p className="reservation-desc">{item.desc}</p>
      </div>
    </>
  );
};

export default ReservationCard;
