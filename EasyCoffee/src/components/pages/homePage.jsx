import styles from "../../css/homePage.module.css";
import latteArt1 from "/latte-art.gif";
import latteArt2 from "/latte-art2.gif";
import squareClock from "/square-clock.png";
import loopyPerson from "/loopy-person.png";
import React from "react";

export default function HomePage() {
  const headerPhoto = Math.random() > 0.5 ? latteArt1 : latteArt2;
  const welcomeText = React.useRef(null);
  const main = React.useRef(null);
  const time = new Date();
  const hours = time.getHours() === 12 ? "12" : time.getHours() % 12;
  const minutes =
    time.getMinutes() < 10
      ? String(time.getMinutes()).padStart(1, "0")
      : time.getMinutes();
  const shouldDrinkCoffee = new Date().getHours() < 16;

  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0px)";
        }
      });
    },
    { threshold: "1.0", rootMargin: "0px" }
  );

  React.useEffect(() => {
    // observer.observe(welcomeText.current);
    for (let i = 0; i < main.current.children.length; i++) {
      observer.observe(main.current.children[i]);
    }
  }, []);

  return (
    <>
      <header className={styles["header-homepage"]}>
        <img className={styles["header-pic"]} src={headerPhoto} alt="" />
        <h1 className={styles["title"]}>Easy Coffee</h1>
        <div className={styles["triangle"]} id={styles["left-triangle"]}></div>
        <div className={styles["triangle"]} id={styles["right-triangle"]}></div>
        <h2
          className={styles["arrow-down"]}
          onClick={() => {
            location.href = "#welcome";
          }}
        >
          ↓
        </h2>
      </header>
      <main className={styles["main-homepage"]} ref={main}>
        <section
          id="welcome"
          className={styles["fader"] + " " + styles["home-section"]}
          ref={welcomeText}
        >
          <h2 className={styles["header-text"]}>
            Welcome to <span>Coffee</span> made <span>Easy</span>
          </h2>
          <h3 className={styles["header-sub"]}>With Griffin Overmyer</h3>
        </section>

        <section className={styles["fader"] + " " + styles["home-section"]}>
          <h2 className={styles["sub-header"]}>
            Is coffee a good idea Right now?
          </h2>
          <div className={styles["flex-box"]}>
            <img
              className={styles["flex-img"]}
              src={squareClock}
              alt="clock image"
            />
            <p className={styles["sub-text"]}>
              According to your time,
              <span style={{ color: shouldDrinkCoffee ? "#d9b382" : "red" }}>
                {" " + hours + ":" + minutes}
              </span>
              , you {shouldDrinkCoffee ? "can" : "shouldn't"} drink coffee right
              now.
            </p>
          </div>
          {!shouldDrinkCoffee && (
            <div className={styles["flex-box"]} style={{ marginTop: "1rem" }}>
              <p className={styles["sub-text"]}>
                Doctors do not recommend drinking coffee past 4pm because it
                might inhibit sleep.
              </p>
              <img
                className={styles["flex-img"]}
                src={loopyPerson}
                alt="loopy person"
              />
            </div>
          )}
        </section>

        <section className={styles["fader"] + " " + styles["home-section"]}>
          <h2 className={styles["sub-header"]}>Is Coffee good for you?</h2>
          <p className={styles["sub-text"]}>
            Coffee is great for the body and mind when taken in moderation.
            Coffee can provide:
          </p>
          <ul className={styles["provide-ul"]}>
            <li>Energy</li>
            <li>A mood boost</li>
            <li>A source of antioxidants</li>
            <li>A lower risk of total mortality</li>
          </ul>
          <p
            className={styles["sub-text"]}
            style={{ marginTop: "1rem", textAlign: "right" }}
          >
            More info{" "}
            <a
              className={styles["ancor"]}
              href="https://www.heart.org/en/news/2018/09/28/is-coffee-good-for-you-or-not"
            >
              here...
            </a>
          </p>
        </section>
        <footer className={styles["footer"]}>
          &copy; Griffin Overmyer 2022-23
        </footer>
      </main>
    </>
  );
}
