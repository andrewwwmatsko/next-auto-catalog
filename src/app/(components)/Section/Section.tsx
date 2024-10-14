import { FC } from "react";
import css from "./Section.module.css";

type Props = {
  children: React.ReactNode;
};

const Section: FC<Props> = ({ children }) => {
  return <section className={css.section}>{children}</section>;
};

export default Section;
