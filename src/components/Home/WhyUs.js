import { whyUsData } from "../../utils/HomeScreen/whyUsUtils";
import canoe1person from "../../assets/icons/canoe1person.png";
import canoe2people from "../../assets/icons/canoe2people.png";
import { motion } from "motion/react";

const WhyUs = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: "easeOut"  }}
        className="why-us-section"
      >
        <div className="flex-row why-us-row">
          <div className="flex-col why-us-cards">
            <p className="green why-us-label">
              Dlaczego warto wybrać nasze spływy?
            </p>
            <div className="why-us-cards-row flex-row">
              {whyUsData.map((data) => (
                <div key={data.id} className="why-card flex-col">
                  <img src={data.image} alt="Ikony" loading="lazy" />
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
                <img
                  src={canoe2people}
                  alt="Ikona kajak dwuosobowy"
                  loading="lazy"
                />
                <p className="why-card-title navy-blue ">120 zł</p>
                <p className="why-card-desc">KAJAK DWUOSOBOWY</p>
              </div>
              <div className="flex-col pricelist-card">
                <img
                  src={canoe1person}
                  alt="Ikona kajak jednoosobowy"
                  loading="lazy"
                />
                <p className="why-card-title navy-blue ">80 zł</p>
                <p className="why-card-desc">KAJAK JEDNOOSOBOWY</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default WhyUs;
