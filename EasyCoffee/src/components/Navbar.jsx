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
    nav.current.classList.toggle("left");
    // css 'left' position will not override for buttons?????
    navBtn.current.style.left =
      navBtn.current.style.left == "-25px" ? "calc(40vw - 25px)" : "-25px";
  }

  return (
    <>
      <nav className="nav left" ref={nav}>
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
      </nav>
      <button
        ref={navBtn}
        className={`nav-btn`}
        onClick={closeOpenNavbar}
        style={{ left: "-25px" }}
      >
        &gt;
      </button>
    </>
  );
}
