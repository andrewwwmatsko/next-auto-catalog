"use client";
import css from "./AccordionItem.module.css";
import { useState } from "react";

export default function AccordionItem({ data: { title, text } }) {
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
}
