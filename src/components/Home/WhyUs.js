import { whyUsData } from "../../utils/Home/whyUsUtils";
import canoe1person from "../../assets/icons/canoe1person.png";
import canoe2people from "../../assets/icons/canoe2people.png";

const WhyUs = () => {
  return (
    <>
      <section className="why-us-section">
        <div className="flex-row why-us-row">
          <div className="flex-col why-us-cards">
            <p className="green why-us-label">
              Dlaczego warto wybrać nasze spływy?
            </p>
            <div className="why-us-cards-row flex-row">
              {whyUsData.map((data) => (
                <div key={data.id} className="why-card flex-col">
                  <img src={data.image} alt="Ikony" />
                  <p className="why-card-title navy-blue ">{data.title}</p>
                  <p className="why-card-desc">{data.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-col pricelist">
            <p className="green why-us-label">Cennik</p>
            <div className="pricelist-content flex-row">
              <div className="flex-col pricelist-card">
                <img src={canoe2people} alt="Ikona kajak dwuosobowy" />
                <p className="why-card-title navy-blue ">120 zł</p>
                <p className="why-card-desc">KAJAK DWUOSOBOWY</p>
              </div>
              <div className="flex-col pricelist-card">
                <img src={canoe1person} alt="Ikona kajak jednoosobowy" />
                <p className="why-card-title navy-blue ">80 zł</p>
                <p className="why-card-desc">KAJAK JEDNOOSOBOWY</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
