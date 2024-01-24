import "./GoTopButton.css";
const GoTopButton = () => {

    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    

  return (
    <>
      <div className="wrapper" onClick={scrollToTop}>
        <input type="checkbox" />
        <div className="fab">&uarr;</div>
      </div>
    </>
  );
};

export default GoTopButton;
