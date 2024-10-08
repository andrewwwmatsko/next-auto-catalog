import AccordionItem from "../AccordionItem/AccordionItem.jsx";
import Container from "../Container/Container.jsx";

import accordionData from "./accordionData.js";

import css from "./Faq.module.css";

export default function Faq() {
  return (
    <section className={css.section} id="faq">
      <Container>
        <h2 className={css.title}>FAQ</h2>

        <ol className={css.accordion}>
          {accordionData.map((card, i) => {
            return (
              <li key={i} className={css.accordionItem}>
                <AccordionItem data={card} />
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
