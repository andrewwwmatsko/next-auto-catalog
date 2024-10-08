import Image from "next/image.js";

import Container from "../Container/Container.jsx";

import trafficIcon from "../../../(images)/icons/whatIsFor-traffic-icon.svg";
import customerIcon from "../../../(images)/icons/whatIsFor-customers-icon.svg";
import trustIcon from "../../../(images)/icons/whatIsFor-trust-icon.svg";

import css from "./WhatIsFor.module.css";

export default function WhatIsFor() {
  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.title}>WHAT IS IT FOR</h2>

        <ul className={css.list}>
          <li className={css.listItem}>
            <Image
              className={css.icon}
              src={trafficIcon}
              alt="Increasing Traffic to Your Site icon"
            />
            <h3 className={css.subtitle}>Increasing Traffic to Your Site</h3>
            <p className={css.description}>
              The catalog will be available for the Google search engine.
            </p>
          </li>

          <li className={css.listItem}>
            <Image
              className={css.icon}
              src={customerIcon}
              alt="Increasing Traffic to Your Site icon"
            />
            <h3 className={css.subtitle}>Increase in Potential Customers</h3>
            <p className={css.description}>
              People will apply directly from the catalog.
            </p>
          </li>

          <li className={css.listItem}>
            <Image
              className={css.icon}
              src={trustIcon}
              alt="Increasing Traffic to Your Site icon"
            />
            <h3 className={css.subtitle}>Increasing Trust in Your Company</h3>
            <p className={css.description}>
              After all, only the big ones companies have car catalogs.
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
}
