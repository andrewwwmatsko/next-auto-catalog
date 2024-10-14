"use client";
import css from "./AccordionItem.module.css";
import { FC, useState } from "react";

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
        <p>{isActive ? "-" : "+"}</p>
      </div>
      {isActive && <div className={css.accordionText}>{text}</div>}
    </>
  );
};
export default AccordionItem;
