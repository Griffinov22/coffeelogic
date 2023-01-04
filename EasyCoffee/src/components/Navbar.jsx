import React from "react";
import styles from "../css/nav.module.css";
import Pourover from "./pages/pourover";
import FrenchPress from "./pages/frenchPress";
import Espresso from "./pages/espresso";
import Tea from "./pages/tea";
import CoffeeTerms from "./pages/coffeeTerms";
import CoffeeDrinks from "./pages/coffeeDrinks";
import HomePage from "./pages/homePage";

export default function Navbar({ setWebpages }) {
  const nav = React.useRef(null);
  const navBtn = React.useRef(null);

  function closeOpenNavbar() {
    // window.scroll(0, 0);

    nav.current.style.marginLeft =
      nav.current.style.marginLeft === "-40vw" ? "0px" : "-40vw";

    navBtn.current.style.marginLeft =
      navBtn.current.style.marginLeft === "40vw" ? "0" : "40vw";
  }

  function goToPage(jsxEl) {
    closeOpenNavbar();
    window.scroll(0, 0);
    setWebpages(jsxEl);
  }

  return (
    <>
      <nav className={styles["nav"]} ref={nav} style={{ marginLeft: "-40vw" }}>
        <div className={styles["nav-menu"]}>
          <h2
            className={styles["nav-title"]}
            onClick={() => goToPage(<HomePage />)}
          >
            What's Brewin'?
          </h2>
          <ul className={styles["nav-lst"]}>
            <li
              className={styles["list-item"]}
              onClick={() => goToPage(<Pourover />)}
            >
              Pour Over Coffee
            </li>
            <li
              className={styles["list-item"]}
              onClick={() =>
                goToPage(<FrenchPress setWebpages={setWebpages} />)
              }
            >
              French Press
            </li>
            <li
              className={styles["list-item"]}
              onClick={() => goToPage(<Espresso />)}
            >
              Espresso
            </li>
            <li
              className={styles["list-item"]}
              onClick={() => goToPage(<Tea />)}
            >
              Tea
            </li>
            <li
              className={styles["list-item"]}
              onClick={() => goToPage(<CoffeeTerms />)}
            >
              Griffin's Crazy Coffee Terms
            </li>
            <li
              className={styles["list-item"]}
              onClick={() => goToPage(<CoffeeDrinks />)}
            >
              How did Griffin Make That Drink?
            </li>
          </ul>
        </div>
        <button
          ref={navBtn}
          className={styles["nav-btn"]}
          onClick={closeOpenNavbar}
          style={{ marginLeft: "0" }}
        >
          &gt;
        </button>
      </nav>
    </>
  );
}
