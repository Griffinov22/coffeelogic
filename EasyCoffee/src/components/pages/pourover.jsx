import "../../css/pourover.css";
import React, { useState, useRef } from "react";
import pourOverPic from "/pourover-grind.jpg";

export default function Pourover() {
  //these will become numbers, but need to open strings to show placeholders
  const [labels, setLabels] = useState({
    coffeeLabel: "",
    waterLabel: "",
    mugType: "",
  });

  function userChange(e) {
    const { name, value } = e.target;
    name === "coffeeLabel"
      ? setLabels({ mugType: "", coffeeLabel: value, waterLabel: value * 16 })
      : setLabels({ mugType: "", waterLabel: value, coffeeLabel: value / 16 });
  }

  function changeRadio(e) {
    const { name, value } = e.target;
    //coffee ratio yeti(21g to 350g), mug-r(18g to 270g), mug-sm(15g to 225g), chemex(60g to 1000g)
    let coffeeMass, waterMass;
    switch (value) {
      case "yeti":
        coffeeMass = 21;
        waterMass = 350;
        break;
      case "mug-r":
        coffeeMass = 18;
        waterMass = 270;
        break;
      case "mug-sm":
        coffeeMass = 15;
        waterMass = 225;
        break;
      case "chemex":
        coffeeMass = 60;
        waterMass = 1000;
    }

    setLabels({
      coffeeLabel: coffeeMass,
      waterLabel: waterMass,
      [name]: value,
    });
  }

  return (
    <div className="pourover-container">
      <div className="header">
        <h1>Pour-Over Ratio</h1>
      </div>

      <div className="flex-coffee-boxes">
        <div className="flex-item" id="coffee-box">
          <input
            type="number"
            className="ratio-numbers"
            placeholder="18"
            name="coffeeLabel"
            value={labels.coffeeLabel}
            onChange={userChange}
          />
          <p className="grams-label">g</p>
          <h3 className="ratio-title" id="coffee-title">
            Coffee
          </h3>
        </div>
        <p className="to">to</p>
        <div className="flex-item" id="water-box">
          <input
            type="number"
            className="ratio-numbers"
            placeholder="350"
            name="waterLabel"
            value={labels.waterLabel}
            onChange={userChange}
          />
          <p className="grams-label">g</p>

          <h3 id="water-title" className="ratio-title">
            Water
          </h3>
        </div>
      </div>

      <main className="main">
        <form className="form">
          <h3 className="cup-title" id="cups">
            The cup I am using is:
            <hr className="cup-underline" />
          </h3>

          <div className="input-container">
            <label htmlFor="yeti" className="label-item">
              <input
                className="input-item"
                type="radio"
                name="mugType"
                value="yeti"
                id="yeti"
                checked={labels.mugType === "yeti"}
                onChange={changeRadio}
              />
              Yeti
            </label>

            <label htmlFor="mug-r" className="label-item">
              <input
                className="input-item"
                type="radio"
                name="mugType"
                value="mug-r"
                id="mug-r"
                checked={labels.mugType === "mug-r"}
                onChange={changeRadio}
              />
              Mug (regular)
            </label>

            <label htmlFor="mug-sm" className="label-item">
              <input
                className="input-item"
                type="radio"
                name="mugType"
                value="mug-sm"
                id="mug-sm"
                checked={labels.mugType === "mug-sm"}
                onChange={changeRadio}
              />
              Mug (small)
            </label>

            <label htmlFor="chemex" className="label-item">
              <input
                className="input-item"
                type="radio"
                name="mugType"
                value="chemex"
                id="chemex"
                checked={labels.mugType === "chemex"}
                onChange={changeRadio}
              />
              Chemex
            </label>
          </div>

          <h3 className="cup-title" id="or-title">
            Or:
            <hr className="cup-underline" id="or-underline-change" />
          </h3>

          <p className="use-text">
            Click on the boxes to <span>write</span> the amount of coffee/water
            you want to use
          </p>
        </form>

        <h3 className="cup-title" id="pourover-title">
          Pour-over Knowledge
          <hr className="cup-underline" />
        </h3>
        <p className="use-text">
          The pour-over is one of easiest and fastest ways to make coffee in the
          morning, but you might think that it is complex. If you do not follow
          the steps, you might find that your coffee is
          <span> weak</span> (over extracted) or <span>bitter</span> (over
          extracted), but once you get it down once or twice. It's easy and
          replicable.
        </p>

        <h3 className="cup-title" id="grind-size">
          Grind Size
          <hr className="cup-underline" />
        </h3>
        <p className="use-text">
          Your grind size is one of the most important factors of making a great
          pour-over you should be aiming for a
          <img
            src={pourOverPic}
            className="pour-over-pic"
            alt="pour-over grind size photo"
          />
          <span> medium-fine grind size</span>. To check your grind size is the
          right, grind some beans and run them through your fingers. You should
          still be able to distinguish which the individual 'chunks' unlike
          espresso grind.
        </p>
      </main>
    </div>
  );
}
