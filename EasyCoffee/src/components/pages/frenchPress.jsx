import s from "../../css/frenchPress.module.css";
import spoon from "/spoon.png";
import frenchPress from "/french-press.png";
import waterKettle from "/water-kettle.png";
import coffeeBeans from "/coffee-beans.png";

export default function FrenchPress() {
  return (
    <>
      <header>
        <h1 className={s.title}>French Press</h1>
        <div className={s.flex}>
          <h2 className={s["flex-header"]}>What You'll need:</h2>
          <div class={s["flex-item"]}>
            <h2>French Press</h2>
            <p>Container Device</p>
            <img src={frenchPress} alt="french press" />
          </div>
          <div class={s["flex-item"]}>
            <h2>Coffee</h2>
            <p>Dark Roast</p>
            <img src={coffeeBeans} alt="coffee" />
          </div>
          <div class={s["flex-item"]}>
            <h2>Stirring Device</h2>
            <p>Spoon</p>
            <img src={spoon} alt="stirring device. preferrably a spoon" />
          </div>
          <div class={s["flex-item"]}>
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
            While this is true, shoot for a size of chunky sea salt.
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
            <span className={s["jump-to-section"]}>'pour over'</span> section to
            calculate how much coffee you will need.
          </p>
        </section>
        <section className={s.section}>
          <h2 className={s["section-header"]}>
            How it's Done
            <hr className={s.underline} />
          </h2>
          <p className={s.paragraph}>Hello there this is text</p>
        </section>
      </main>
    </>
  );
}
