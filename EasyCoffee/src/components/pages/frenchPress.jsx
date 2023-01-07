import s from "../../css/frenchPress.module.css";
import Pourover from "./pourover";
import spoon from "/spoon.png";
import frenchPress from "/french-press.png";
import waterKettle from "/water-kettle.png";
import coffeeBeans from "/coffee-beans.png";

export default function FrenchPress({ setWebpages }) {
  function straightToPage(page) {
    window.scroll(0, 0);
    setWebpages(page);
  }

  return (
    <>
      <header>
        <h1 className={s.title}>French Press</h1>
        <div className={s.flex}>
          <h2 className={s["flex-header"]}>What You'll need:</h2>
          <div className={s["flex-item"]}>
            <h2>French Press</h2>
            <p>Container Device</p>
            <img src={frenchPress} alt="french press" />
          </div>
          <div className={s["flex-item"]}>
            <h2>Coffee</h2>
            <p>Dark Roast</p>
            <img src={coffeeBeans} alt="coffee" />
          </div>
          <div className={s["flex-item"]}>
            <h2>Stirring Device</h2>
            <p>Spoon</p>
            <img src={spoon} alt="stirring device. preferrably a spoon" />
          </div>
          <div className={s["flex-item"]}>
            <h2>Hot Water</h2>
            <p>Kettle</p>
            <img src={waterKettle} alt="hot water" />
          </div>
        </div>
      </header>
      <main>
        <section className={s.section}>
          <h2 className={s["section-header"]}>
            Grind Size
            <hr className={s.underline} />
          </h2>
          <p className={s.paragraph}>
            When grinding French Press grounds you should know that out of all
            the devices used to make coffee, this is the device that uses the
            most course grind. According to caffeeStreets,{" "}
            <a
              href="https://caffestreets.com/french-press-grind/"
              className={s.link}
            >
              "...the rule is simple: the more coarse your grounds are, the
              better."
            </a>{" "}
            While this is true, shoot for a size of chunky sea salt. On the
            Baratza Encore, I would shoot for a grind range of{" "}
            <span>24-30</span>.
          </p>
        </section>
        <section className={s.section}>
          <h2 className={s["section-header"]}>
            Ratio
            <hr className={s.underline + " " + s["underline-left"]} />
          </h2>
          <p className={s.paragraph}>
            Ratios for this method are typically 1:12 or 1 part coffee to 12
            parts water. I do not think this ratio produces a well-rounded cup
            in my oppinion. <span>I prefer you use a 1:16.</span> Visit the{" "}
            <span
              className={s["jump-to-section"]}
              onClick={() => {
                straightToPage(<Pourover />);
              }}
            >
              'pour over'
            </span>{" "}
            section to calculate how much coffee you will need.
          </p>
        </section>
        <section className={s.section}>
          <h2 className={s["section-header"]}>
            How it's Done
            <hr className={s.underline} />
          </h2>
          <p className={s.paragraph}>
            I am going to assume you already have your ratio and ground coffee
            (if not read the section before this). For best results you should
            preheat the french press. This is usually done with hot water, but
            using steaming hot tap water is just as good for getting the carafe
            hot. There are two recipes I think produce good cups of coffee. I
            will start with the first:
          </p>
          <ol className={s["order-list"]}>
            <li>Add ground coffee to French Press.</li>
            <li>
              Heat water to 195-200, or if you do not have a thermometer, bring
              water to boil then set for 30 seconds to cool down.
            </li>
            <li>Add full water weight and stir with a spoon.</li>
            <li>Wait 4 minutes, plunge, and enjoy.</li>
          </ol>
          <p className={s.paragraph}>
            While I enjoy this recipe because it is simple, It does not steep
            very long to get the thicker result that is usually in a cup from a
            french press. This recipe still is super useful because you can make
            a large amount of coffee in a small amount of time. This is great
            for parties and/or small groups of friends. The next recipe I am
            sharing with you is my preferred method:
          </p>
          <ol className={s["order-list"]}>
            <li>Add ground coffee to French Press.</li>
            <li>
              Heat water to 195-200, or if you do not have a thermometer, bring
              water to boil then set for 30 seconds to cool.
            </li>
            <li>
              Start your timer and pour your weight in coffee times 2 to start a
              bloom (if your coffee is fresh, it should expand like a volcano!).
              Let the coffee degass for 45 seconds.
            </li>
            <li>
              Next, add the remaining water to reach the full weight. Wait till
              your timer reaches 6 minutes then stir the top layer of grounds
              floating.
            </li>
            <li>
              Wait 6 more minutes (timer should be at 12 minutes), then stir,
              plunge, and enjoy.
            </li>
          </ol>
        </section>
      </main>
    </>
  );
}
