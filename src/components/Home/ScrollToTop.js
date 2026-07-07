const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="scroll-to-top" onClick={() => scrollToTop()}>
      <ion-icon name="arrow-up-outline"></ion-icon>
    </button>
  );
};

export default ScrollToTop;
