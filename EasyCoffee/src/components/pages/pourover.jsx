import "../../css/pourover.css";

export default function Pourover() {
  return (
    <div className="pourover-container">
      <div className="header">
        <h1>Pour-Over Ratio</h1>
      </div>

      <div className="flex-coffee-boxes">
        <div className="flex-item" id="coffee-box">
          <input type="number" className="ratio-numbers" placeholder="18" />
          <p className="grams-label">g</p>
          <h3 className="ratio-title">Coffee</h3>
        </div>
        <p className="to">to</p>
        <div className="flex-item" id="water-box">
          <input type="number" className="ratio-numbers" placeholder="350" />
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
                name="mug-type"
                value="yeti"
                id="yeti"
              />
              Yeti
            </label>

            <label htmlFor="mug-r" className="label-item">
              <input
                className="input-item"
                type="radio"
                name="mug-type"
                value="mug-r"
                id="mug-r"
              />
              Mug (regular)
            </label>

            <label htmlFor="mug-sm" className="label-item">
              <input
                className="input-item"
                type="radio"
                name="mug-type"
                value="mug-sm"
                id="mug-sm"
              />
              Mug (small)
            </label>

            <label htmlFor="chemex" className="label-item">
              <input
                className="input-item"
                type="radio"
                name="mug-type"
                value="chemex"
                id="chemex"
              />
              Chemex
            </label>
          </div>

          <h3 className="cup-title" id="or-title">
            Or:
            <hr className="or-underline" />
          </h3>

          <p className="use-text">
            Click on the boxes to <span>write</span> the amount of coffee/water
            you want to use
          </p>
        </form>

        <div className="pourover-knowledge">
          <h3 className="cup-title" id="pourover-title">
            Pour-over Knowledge
            <hr className="cup-underline" />
          </h3>
          <p className="pourover-text">
            The pour-over is one of easiest and fastest ways to make coffee in
            the morning, but you might think that it is complex. If you do not
            follow the steps, you might find that your coffee is
            <span>weak</span> (over extracted) or <span>bitter</span> (over
            extracted), but once you get it down once or twice. It's easy and
            replicable.
          </p>
        </div>
      </main>
    </div>
  );
}
