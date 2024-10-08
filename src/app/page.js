import Faq from "./(components)/Faq/Faq.jsx";
import Header from "./(components)/Header/Header.jsx";
import Hero from "./(components)/Hero/Hero.jsx";
import HowItWorks from "./(components)/HowItWorks/HowItWorks.jsx";
import Prices from "./(components)/Prices/Prices.jsx";
import WhatIsFor from "./(components)/WhatIsFor/WhatIsFor.jsx";
import css from "./page.module.css";

export default function Home() {
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
}
