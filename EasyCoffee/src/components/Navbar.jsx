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

  function closeOpenNavbar(e) {
    nav.current.classList.toggle("left");
    // css 'left' position will not override for buttons?????
    e.target.style.left =
      e.target.style.left == "-25px" ? "calc(40vw - 25px)" : "-25px";
  }

  return (
    <>
      <nav className="nav left" ref={nav}>
        <h2 className="nav-title">What's Brewin'?</h2>
        <ul className="nav-lst">
          <li className="list-item" onClick={() => setWebpages(<Pourover />)}>
            Pour Over Coffee
          </li>
          <li
            className="list-item"
            onClick={() => setWebpages(<FrenchPress />)}
          >
            French Press
          </li>
          <li className="list-item" onClick={() => setWebpages(<Espresso />)}>
            Espresso
          </li>
          <li className="list-item" onClick={() => setWebpages(<Tea />)}>
            Tea
          </li>
          <li
            className="list-item"
            onClick={() => setWebpages(<CoffeeTerms />)}
          >
            Griffin's Crazy Coffee Terms
          </li>
          <li
            className="list-item"
            onClick={() => setWebpages(<CoffeeDrinks />)}
          >
            How did Griffin Make That Drink?
          </li>
        </ul>
      </nav>
      <button
        className={`nav-btn`}
        onClick={closeOpenNavbar}
        style={{ left: "-25px" }}
      >
        &gt;
      </button>
    </>
  );
}
