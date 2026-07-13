import "../assets/css/faq.css";
import "../assets/css/queries.css";
import "../assets/css/queries-FaqScreen.css";
import { useEffect } from "react";
import { usePageContext } from "../context/pageContext";
import FaqList from "./Faq/FaqList";
import FaqNotice from "./Faq/FaqNotice";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import ScrollToTop from "./Home/ScrollToTop";

const FaqScreen = () => {
  const { setActivePage } = usePageContext();

  useEffect(() => {
    setActivePage("/faq");
  }, [setActivePage]);

  return (
    <>
      <Header />
      <FaqList />
      <FaqNotice />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default FaqScreen;
