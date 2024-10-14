import { FC } from "react";
import Faq from "./(components)/Faq/Faq.tsx";
import Header from "./(components)/Header/Header.tsx";
import Hero from "./(components)/Hero/Hero.tsx";
import HowItWorks from "./(components)/HowItWorks/HowItWorks.tsx";
import Prices from "./(components)/Prices/Prices.tsx";
import WhatIsFor from "./(components)/WhatIsFor/WhatIsFor.tsx";
import css from "./page.module.css";

const Home: FC = () => {
  return (
    <div className={css.page}>
      <header className={css.header}>
        <Header />
      </header>
      <main className={css.main}>
        <Hero />
        <HowItWorks />
        <WhatIsFor />
        <Prices />
        <Faq />
      </main>
      <footer className={css.footer}></footer>
    </div>
  );
};

export default Home;
