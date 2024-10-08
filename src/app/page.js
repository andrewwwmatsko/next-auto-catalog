import Header from "./(components)/Header/Header.jsx";
import Hero from "./(components)/Hero/Hero.jsx";
import HowItWorks from "./(components)/HowItWorks/HowItWorks.jsx";
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
      </main>
      <footer className={css.footer}></footer>
    </div>
  );
}
