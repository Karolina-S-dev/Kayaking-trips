import FaqList from "./Faq/FaqList";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import ScrollToTop from "./Home/ScrollToTop";

const FaqScreen = () => {
  return (
    <>
      <Header />
      <FaqList />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default FaqScreen;
