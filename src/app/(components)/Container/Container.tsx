import React from "react";
import css from "./Container.module.css";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;
