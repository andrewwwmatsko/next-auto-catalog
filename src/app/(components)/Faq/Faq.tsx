import AccordionItem from "../AccordionItem/AccordionItem.tsx";
import Container from "../Container/Container.tsx";

import accordionData from "./accordionData.ts";

import css from "./Faq.module.css";

const Faq = () => {
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
};

export default Faq;
