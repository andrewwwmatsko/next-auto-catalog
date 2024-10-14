import submitIcon from "../../../(images)/icons/howItWorksSubmit-icon.svg";
import designIcon from "../../../(images)/icons/howItWorksDesign-icon.svg";
import catalogIcon from "../../../(images)/icons/howItWorksCatalog-icon.svg";

import css from "./HowItWorks.module.css";
import Image from "next/image.js";

const HowItWorks = () => {
  return (
    <section className={css.section} id="howItWorks">
      <div className={css.container}>
        <h2 className={css.mainTitle}>HOW IT WORKS</h2>

        <ul className={css.list}>
          <li className={css.listItem}>
            <Image src={submitIcon} alt="Submit icon" className={css.icon} />
            <h3 className={css.listItemTitle}>Submit an Application →</h3>
            <p className={css.description}>
              We will contact you and tell you all the details, as well as
              answer all your questions.
            </p>
          </li>
          <li className={css.listItem}>
            <Image src={designIcon} alt="Design icon" className={css.icon} />
            <h3 className={css.listItemTitle}>Design Adaptation</h3>
            <p className={css.description}>
              We adjusts the color of the catalog to your website design, or
              makes a unique design for you.
            </p>
          </li>
          <li className={css.listItem}>
            <Image src={catalogIcon} alt="Catalog icon" className={css.icon} />
            <h3 className={css.listItemTitle}>Catalog Integration</h3>
            <p className={css.description}>
              The catalog appears on the subdomain of your site and can accept
              applications customers.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HowItWorks;
