import FaqList from "./Faq/FaqList";
import FaqNotice from "./Faq/FaqNotice";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import ScrollToTop from "./Home/ScrollToTop";

const FaqScreen = () => {
  return (
    <>
      <Header />
      <section className="faq-section">
      <FaqList />
      <FaqNotice/>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default FaqScreen;
