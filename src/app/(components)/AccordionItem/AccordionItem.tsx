"use client";

import css from "./AccordionItem.module.css";
import { FC, useState } from "react";

import Image from "next/image";

import plusIcon from "../../../(images)/icons/plusIcon.svg";
import minusIcon from "../../../(images)/icons/minusIcon.svg";

type Props = {
  data: { title: string; text: string };
};

const AccordionItem: FC<Props> = ({ data: { title, text } }) => {
  const [isActive, setIsActive] = useState(false);

  const handleShowText = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <>
      <div className={css.accordionTitle} onClick={handleShowText}>
        <p>{title}</p>
        <p>
          {isActive ? (
            <Image src={minusIcon} alt="-" />
          ) : (
            <Image src={plusIcon} alt="+" />
          )}
        </p>
      </div>
      {isActive && <div className={css.accordionText}>{text}</div>}
    </>
  );
};
export default AccordionItem;
