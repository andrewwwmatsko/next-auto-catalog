import Container from "../Container/Container.jsx";
import css from "./Faq.module.css";

export default function Faq() {
  return (
    <section className={css.section} id="faq">
      <Container>
        <h2 className={css.title}>FAQ</h2>
      </Container>
    </section>
  );
}
