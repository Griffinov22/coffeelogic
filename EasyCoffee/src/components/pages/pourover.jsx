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

      <main className="main-pourover">
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

        <h3 className="cup-title">
          Pour-over Procedure
          <hr className="cup-underline" />
        </h3>
        <p className="use-text">
          We are going to do this in X simple steps. Let's begin:
        </p>
        <ol className="pour-list">
          <li>
            Take your filter and fold it along the seam. Open the paper and
            place the filter inside the brewing device.
          </li>
          <li>
            Pour hot water over the filter to stick the filter to the sides of
            the brewing device. Pro tip:
            <span>
              Use hot water from the sink to get the paper stuck to the sides of
              the device
            </span>
            . This way you save hot water for your actual brew.
          </li>
          <li>
            Great now add your grinded coffee following the 'Grind Size' section
            above, and prepare your water to approximately 198° If you want to
            get more from your brew:
            <ul className="temps-list">
              <li>
                Dark Roast: <span>195-200</span>
              </li>
              <li>
                Medium Roast: <span>201-205</span>
              </li>
              <li>
                Blonde Roast: <span>206-212</span>
              </li>
            </ul>
          </li>
          <li>
            This brew cycle is supposed to be easy and replicable
            <span> for smaller batches of coffee (&gt;=400) </span>. Take your
            final weight in water and split it into 5 pours. For example: If you
            were going to brew a yeti (21g to 350g) of coffee, you would have 5
            pours of 70g each.
          </li>
          <li>
            Your first pour is called your bloom phase. When your ready, start
            your timer and pour your first section. Your goal should be to
            completely saturate the grounds. Next, pick up your brew device and
            swirl it to incorporate your brew. Let the bloom sit until your
            timer hits 45s.
          </li>
          <li>
            Your next step is to pour your second section of water in the device
            by 1min on your timer. Start from the outside of coffee and pour in
            a circular direction. You should finish your pour in the middle.
            Wait 10s (you should be at 1:10).
          </li>
          <li>
            Your last three pours are <span>all the same</span>. Pour in the
            same circular motion, but pour <span>for 10s</span>, then,{" "}
            <span>wait </span>
            for <span>ten seconds</span>. You should shoot for all your coffee
            to dispense in ~2:45-3:00
          </li>
        </ol>
        <p className="use-text">
          A simple timeline for your brew should look like this:
        </p>
        <ul className="temps-list">
          <li>Blume Phase: (0-45s)</li>
          <li>Second Pour: (45-1:10)</li>
          <li>Third Pour: (1:10-1:30)</li>
          <li>Fourth Pour: (1:30-1:50)</li>
          <li>Fifth Pour: (1:50-2:10)</li>
        </ul>
      </main>
    </div>
  );
}
