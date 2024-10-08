import Container from "../Container/Container.jsx";
import PriceListItem from "../PriceListItem/PriceListItem.jsx";
import css from "./Prices.module.css";

import priceCards from "./cardDetails.js";

export default function Prices() {
  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.title}>SERVICE PRICES</h2>

        <ul className={css.list}>
          {priceCards.map((card, i) => {
            return (
              <li key={i} className={css.listItem}>
                <PriceListItem data={card} />
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
