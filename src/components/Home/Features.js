import { motion } from "motion/react";
import { featuresData } from "../../utils/HomeScreen/featuresUtils";

const Features = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5 }}
        className="features-cards flex-row"
      >
        {featuresData.map((item) => (
          <div key={item.id} className="features-card flex-col">
            <img src={item.image} alt="Ikony" loading="lazy" />
            <p className="features-card-title">{item.title}</p>
            <p className="features-card-subtitle">{item.desc}</p>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Features;
