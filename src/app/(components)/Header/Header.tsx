import Link from "next/link.js";
import Image from "next/image.js";

import { MdEmail } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import Container from "../Container/Container.tsx";

import mainIcon from "../../../(images)/carLinkImage.png";

import css from "./Header.module.css";

const Header = () => {
  return (
    <>
      <Container>
        <div className={css.containerWrapper}>
          <Link className={css.mainLink} href="/">
            <Image src={mainIcon} alt="CarLink" width="220" height="45" />
          </Link>

          <nav className={css.nav}>
            <ul className={css.menuList}>
              <li className={css.menuItem}>
                <a className={css.menuLink} href="#howItWorks">
                  HOW IT WORKS
                </a>
              </li>
              <li className={css.menuItem}>
                <a className={css.menuLink} href="#whatIsFor">
                  WHAT IS IT FOR
                </a>
              </li>
              <li className={css.menuItem}>
                <a className={css.menuLink} href="#prices">
                  PRICES
                </a>
              </li>
              <li className={css.menuItem}>
                <a className={css.menuLink} href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <div className={css.btnWrapper}>
            <button type="button" className={css.contactUsBtn}>
              <MdEmail size={15} color="white" />
              Contact us
            </button>

            <button className={css.selectLanguage} type="button">
              EN
              <MdOutlineKeyboardArrowDown size={10} />
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
