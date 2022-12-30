import "../../css/homePage.css";
import latteArt1 from "/latte-art.gif";
import latteArt2 from "/latte-art2.gif";
import React from "react";

export default function HomePage() {
  const headerPhoto = Math.random() > 0.5 ? latteArt1 : latteArt2;
  const welcomeText = React.useRef(null);

  const observer = new IntersectionObserver(
    function (entries, observer) {
      const [entry] = entries;
      if (entry.isIntersecting) {
        welcomeText.current.style.opacity = "1";
        welcomeText.current.style.transform = "translateY(0px)";
      }
    },
    { threshold: "1.0", rootMargin: "0px" }
  );

  React.useEffect(() => {
    observer.observe(welcomeText.current);
  }, []);

  return (
    <>
      <header className="header-homepage">
        <img className="header-pic" src={headerPhoto} alt="" />
        <h1 className="title">Easy Coffee</h1>
        <div className="triangle" id="left-triangle"></div>
        <div className="triangle" id="right-triangle"></div>
        <h2
          className="arrow-down"
          onClick={() => {
            location.href = "#welcome";
          }}
        >
          ↓
        </h2>
      </header>
      <main className="main">
        <div id="welcome" className="welcome-text" ref={welcomeText}>
          <h2>
            Welcome to <span>Coffee</span> made <span>Easy</span>
          </h2>
          <h3>With Griffin Overmyer</h3>
        </div>
      </main>
    </>
  );
}
