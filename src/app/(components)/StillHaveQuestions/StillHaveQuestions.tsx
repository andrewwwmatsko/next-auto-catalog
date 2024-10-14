import Image from "next/image";

import Section from "../Section/Section";

import macBookImage from "../../../(images)/MacBook.png";

import css from "./StillHaveQuestions.module.css";
import StillHaveQuestionsForm from "../StillHaveQuestionsForm/StillHaveQuestionsForm";

const StillHaveQuestions = () => {
  return (
    <Section>
      <h2 className={css.title}>STILL HAVE QUESTIONS?</h2>

      <div className={css.wrapper}>
        <Image className={css.image} src={macBookImage} alt="MacBook pro" />

        <div className={css.wrapperInfo}>
          <h3 className={css.wrapperTitle}>
            Fill out the application and we will contact you within 6 hours
          </h3>
          <StillHaveQuestionsForm />
        </div>
      </div>
    </Section>
  );
};

export default StillHaveQuestions;
