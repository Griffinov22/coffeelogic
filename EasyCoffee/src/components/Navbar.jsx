import React from "react";
import "../css/nav.css";

export default function Navbar() {
  const [navOpen, setNavOpen] = React.useState(false);
  console.log(navOpen);

  const btnStyle = {
    left: "-26px",
  };

  return (
    <>
      <nav className={`nav ${navOpen ? "left" : ""}`}>
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
        style={navOpen ? btnStyle : {}}
        onClick={() => setNavOpen(!navOpen)}
      >
        &gt;
      </button>
    </>
  );
}
