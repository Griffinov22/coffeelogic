import "../../css/pourover.css";

export default function Pourover() {
  return (
    <>
      <div className="header">
        <h1>Pour-Over Ratio</h1>
      </div>

      <div className="flex-coffee-boxes">
        <div className="flex-item" id="coffee-box">
          <h2 className="ratio-numbers">16 g</h2>
          <h3 className="ratio-title">Coffee</h3>
        </div>
        <p className="to">to</p>
        <div className="flex-item" id="water-box">
          <h2 className="ratio-numbers">350 g</h2>
          <h3 id="water-title" className="ratio-title">
            Water
          </h3>
        </div>
      </div>

      <main className="main">
        <form>
          <h3 className="cup-title">The cup I am using is:</h3>

          <input type="radio" name="mug-type" value="yeti" id="yeti" />
          <label for="yeti">Yeti</label>

          <input type="radio" name="mug-type" value="mug-r" id="mug-r" />
          <label for="mug-r">Mug (regular)</label>

          <input type="radio" name="mug-type" value="mug-sm" id="mug-sm" />
          <label for="mug-sm">Mug (small)</label>

          <input type="radio" name="mug-type" value="chemex" id="chemex" />
          <label for="chemex">Chemex</label>

          <h3 className="cup-title">Or:</h3>

          <p className="use-text">
            Click on the boxes to <b>write</b> the amount of coffee/water you
            want to use
          </p>
        </form>

        <div className="pourover-knowledge">
          <h2 className="pourover-title">Pour-Over Knowledge</h2>
          <p className="pourover-text">
            The pour-over is one of easiest and fastest ways to make coffee in
            the morning, but you might think that it is complex. If you do not
            follow the steps, you might find that your coffee is weak (over
            extracted) or bitter (over extracted).
          </p>
        </div>
      </main>
    </>
  );
}
