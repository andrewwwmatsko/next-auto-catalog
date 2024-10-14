import { RiArrowDropRightLine } from "react-icons/ri";

import Container from "../Container/Container.tsx";

import css from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.wrapper}>
          <h1 className={css.title}>Ready Catalog of Cars for Your Website</h1>
          <p className={css.description}>from Auto Auctions Copart and IAAI</p>
          <button type="button" className={css.demoBtn}>
            DEMO VERSION <RiArrowDropRightLine size={11} />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
