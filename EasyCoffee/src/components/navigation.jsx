import React from "react";
import "../css/navigation.css";

export default function Navigation(props) {
  const [isOpen, setIsOpen] = React.useState(true);

  function closeNav() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="nav">
        <h2 className="nav-title">What are We Brewin'?</h2>
        <ul className="nav-ul">
          <li className="nav-item">Pour Over (V60,Chemex)</li>
          <li className="nav-item">French Press</li>
          <li className="nav-item">Espresso</li>
          <li className="nav-item">Cold Brew</li>
          <li className="nav-item">Tea</li>
          <li className="nav-item">How did Griffin Create that?</li>
          <li className="nav-item">Griffin's Obnoxious Coffee Lingo</li>
          <li>heelo</li>
        </ul>
      </nav>
      <button className="nav-btn" onClick={closeNav}>
        &gt;
      </button>
    </>
  );
}
