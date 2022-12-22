import React from "react";
import "../css/nav.css";

export default function Navbar() {
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
          <li className="list-item">Pour Over Coffee</li>
          <li className="list-item">French Press</li>
          <li className="list-item">Espresso</li>
          <li className="list-item">Tea</li>
          <li className="list-item">Griffin's Crazy Coffee Terms</li>
          <li className="list-item">How did Griffin Make That Drink?</li>
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
