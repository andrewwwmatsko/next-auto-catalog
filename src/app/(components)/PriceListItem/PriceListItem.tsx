import Image from "next/image.js";
import arrowIcon from "../../../(images)/icons/arrow-right.svg";

import css from "./PriceListItem.module.css";
import { FC } from "react";

type Props = {
  data: {
    title: string;
    price: string;
    firstPayment: string;
    uniqueDesign: string;
    history: string;
    indexing: string;
    lotRemoval: string;
  };
};

const PriceListItem: FC<Props> = ({
  data: {
    title,
    price,
    firstPayment,
    uniqueDesign,
    history,
    indexing,
    lotRemoval,
  },
}) => {
  return (
    <>
      <h3 className={css.subtitle}>{title}</h3>
      <p className={css.price}>{price}</p>
      <p className={css.priceDescription}>per month</p>

      <ul className={css.list}>
        <li className={css.listItem}>
          <p className={css.listItemText}>First Payment:</p>
          <span className={css.textSpan}>{firstPayment}</span>
        </li>

        <li className={css.listItem}>
          <p className={css.listItemText}>Unique Design:</p>
          <span className={css.textSpan}>{uniqueDesign}</span>
        </li>

        <li className={css.listItem}>
          <p className={css.listItemText}>History of Car Sales:</p>
          <span className={css.textSpan}>{history}</span>
        </li>

        <li className={css.listItem}>
          <p className={css.listItemText}>Google Indexing:</p>
          <span className={css.textSpan}>{indexing}</span>
        </li>

        <li className={css.listItem}>
          <p className={css.listItemText}>Lot Removal After Bidding:</p>
          <span className={css.textSpan}>{lotRemoval}</span>
        </li>
      </ul>

      <button type="button" className={css.btn}>
        ORDER PLAN
        <Image src={arrowIcon} alt="arrow" />
      </button>
    </>
  );
};

export default PriceListItem;
