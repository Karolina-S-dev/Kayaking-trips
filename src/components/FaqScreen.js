import "../assets/css/faq.css";
import "../assets/css/queries.css";
import "../assets/css/queries-FaqScreen.css";
import { useEffect } from "react";
import { usePageContext } from "../context/pageContext";
import FaqList from "./FaqScreen/FaqList";
import FaqNotice from "./FaqScreen/FaqNotice";
import ScreenWrapper from "./ScreenWrapper";

const FaqScreen = () => {
  const { setActivePage } = usePageContext();

  useEffect(() => {
    setActivePage("/faq");
  }, [setActivePage]);

  return (
    <ScreenWrapper>
      <FaqList />
      <FaqNotice />
    </ScreenWrapper>
  );
};

export default FaqScreen;
