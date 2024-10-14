import Container from "../Container/Container.tsx";
import PriceListItem from "../PriceListItem/PriceListItem.tsx";
import css from "./Prices.module.css";

import priceCards from "./cardDetails.ts";

const Prices = () => {
  return (
    <section className={css.section} id="prices">
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
};

export default Prices;
