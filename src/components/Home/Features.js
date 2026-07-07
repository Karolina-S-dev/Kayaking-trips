import { featuresData } from "../../utils/featuresUtils";


const Features = () => {
  return (
    <>
      <div className="features-cards flex-row">
        {featuresData.map((item) => (
          <div key={item.id} className="features-card flex-col">
            <img src={item.image} alt="Ikony" />
            <p className="features-card-title">{item.title}</p>
            <p className="features-card-subtitle">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
