const ScrollToTop = ({ headerRef }) => {
  const scrollToTop = () => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button className="scroll-to-top" onClick={scrollToTop}>
      <ion-icon name="arrow-up-outline"></ion-icon>
    </button>
  );
};

export default ScrollToTop;
