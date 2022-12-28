import React from "react";
import "../css/nav.css";
import Pourover from "./pages/pourover";
import FrenchPress from "./pages/frenchPress";
import Espresso from "./pages/espresso";
import Tea from "./pages/tea";
import CoffeeTerms from "./pages/coffeeTerms";
import CoffeeDrinks from "./pages/coffeeDrinks";

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

  return (
    <>
      <nav className="nav" ref={nav} style={{ marginLeft: "-40vw" }}>
        <div className="nav-menu">
          <h2 className="nav-title">What's Brewin'?</h2>
          <ul className="nav-lst">
            <li
              className="list-item"
              onClick={() => {
                closeOpenNavbar();
                setWebpages(<Pourover />);
              }}
            >
              Pour Over Coffee
            </li>
            <li
              className="list-item"
              onClick={() => {
                closeOpenNavbar();
                setWebpages(<FrenchPress />);
              }}
            >
              French Press
            </li>
            <li
              className="list-item"
              onClick={() => {
                closeOpenNavbar();
                setWebpages(<Espresso />);
              }}
            >
              Espresso
            </li>
            <li
              className="list-item"
              onClick={() => {
                closeOpenNavbar();
                setWebpages(<Tea />);
              }}
            >
              Tea
            </li>
            <li
              className="list-item"
              onClick={() => {
                closeOpenNavbar();
                setWebpages(<CoffeeTerms />);
              }}
            >
              Griffin's Crazy Coffee Terms
            </li>
            <li
              className="list-item"
              onClick={() => {
                closeOpenNavbar();
                setWebpages(<CoffeeDrinks />);
              }}
            >
              How did Griffin Make That Drink?
            </li>
          </ul>
        </div>
        <button
          ref={navBtn}
          className={`nav-btn`}
          onClick={closeOpenNavbar}
          style={{ marginLeft: "0" }}
        >
          &gt;
        </button>
      </nav>
    </>
  );
}
