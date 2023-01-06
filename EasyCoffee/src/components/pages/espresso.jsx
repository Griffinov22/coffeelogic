import s from "../../css/espresso.module.css";
import cup2 from "/cup2.png";
import coffeeBeans from "/coffee-beans.png";
import espMach1 from "/espresso-machine.png";
import kitScale from "/kitchen-scale.png";

export default function Espresso() {
  return (
    <>
      <header>
        <h1 className={s.title}>Espresso</h1>
        <h3 className={s["sub-title"]}>Name of the game...</h3>
        <div className={s.flex}>
          <h2 className={s["flex-header"]}>What You'll need:</h2>
          <li className={s["flex-item"]}>
            <h2>Espresso machine</h2>
            <p>any machine</p>
            <img
              src={espMach1}
              alt="espresso machine"
              className={s["img-top-margin"]}
            />
          </li>
          <li className={s["flex-item"]}>
            <h2>Coffee</h2>
            <p>ground fine</p>
            <img src={coffeeBeans} alt="fresh coffee beans" />
          </li>
          <li className={s["flex-item"]}>
            <h2>cup</h2>
            <p>based on beverage</p>
            <img src={cup2} alt="cup" className={s["img-top-margin"]} />
          </li>
          <li className={s["flex-item"]}>
            <h2>Weight scale</h2>
            <p>optional but useful</p>
            <img
              src={kitScale}
              alt="kitchen scale"
              className={s["img-top-margin"]}
            />
          </li>
        </div>
      </header>
      <main>
        <section>
          <h2 className={s["section-header"]}>
            Grind Size
            <hr className={s.underline} />
          </h2>

          <p className={s.paragraph}>Para para paragraph</p>
        </section>
        <section>
          <h2 className={s["section-header"]}>
            Ratio
            <hr className={s.underline} />
          </h2>

          <p className={s.paragraph}>Para para paragraph</p>
        </section>
        <section>
          <h2 className={s["section-header"]}>
            How it's Done
            <hr className={s.underline} />
          </h2>

          <p className={s.paragraph}>Para para paragraph</p>
        </section>
      </main>
    </>
  );
}
