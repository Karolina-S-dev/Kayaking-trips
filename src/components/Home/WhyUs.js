import experienceIcon2 from "../../assets/icons/experience-icon2.png";
import googleIcon2 from "../../assets/icons/google-icon2.png";
import canoeIcon3 from "../../assets/icons/canoe-icon3.png";
import routesIcon2 from "../../assets/icons/routes-icon2.png";
import canoe1person from "../../assets/icons/canoe1person.png";
import canoe2people from "../../assets/icons/canoe2people.png";

const whyUsData = [
  {
    id: 1,
    image: experienceIcon2,
    title: "10 +",
    desc: "lat doświadczenia",
  },
  {
    id: 2,
    title: "4.9",
    desc: "średnia opinii Google",
    image: googleIcon2,
  },
  {
    id: 3,
    title: "33",
    desc: "nowoczesne kajaki",
    image: canoeIcon3,
  },
  {
    id: 4,
    title: "14",
    desc: "pieknych tras",
    image: routesIcon2,
  },
];

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
                <p className="why-card-desc">KAJAK DWUOSOBOWY</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
