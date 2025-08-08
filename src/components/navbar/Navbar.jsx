import styles from "./navbar.module.css";

import { useState } from "react";

import Section from "../section/Section";
import Button from "../button/Button";
import GiftCardDropdown from "./components/giftCardDropdown/GiftCardDropdown";
import ServiceDropdown from "./components/serviceDropdown/ServiceDropdown";
import ExploreDropdown from "./components/exploreDropdown/ExploreDropdown";
import QrDropdown from "./components/qrDropdown/QrDropdown";
import MobileMenu from "./components/mobileDropdown/MobileMenu";

import logo from "../../assets/img/Logo.png";
import qrCodeIcon from "../../assets/img/qr-code-icon.svg";
import menubar from "../../assets/img/nav/menubar.svg";
import Faq from "./components/faq/Faq";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [qrcodeOpen, setQrcodeOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);


  return (
    <nav className={styles.navbarContainer}>
      <Section>
        <div className={styles.navbar}>
          <img src={logo} alt="cardtonic logo" className={styles.logo} />
          <ul className={styles.navlist}>
            <li
              onClick={() => {
                setDropdownOpen((prev) =>
                  prev === "giftCard" ? null : "giftCard"
                );
              }}
            >
              <a href="#">Gift Card</a>
            </li>
            <li
              onClick={() => {
                setDropdownOpen((prev) =>
                  prev === "services" ? null : "services"
                );
              }}
            >
              <a href="#">Services</a>
            </li>
            <li
              onClick={() => {
                setDropdownOpen((prev) =>
                  prev === "explore" ? null : "explore"
                );
              }}
            >
              <a href="#">Explore</a>
            </li>
            <li
              onClick={() => {
                setFaqOpen((prev) => !prev);
              }}
            >
              <a href="#">FAQ</a>
            </li>
          </ul>

          <div className={styles.buttonContainer}>
            <button
              className={styles.qrButton}
              onClick={() => {
                setQrcodeOpen((prev) => !prev);
              }}
            >
              <img src={qrCodeIcon} alt="qr-code" />
            </button>
            <Button>Get Started</Button>
          </div>

          <button
            className={styles.menuButton}
            onClick={() => {
              setMobileMenuOpen((prev) => !prev);
            }}
          >
            <img src={menubar} alt="menubar" />
          </button>
        </div>
      </Section>
      
      {dropdownOpen === "giftCard" && <GiftCardDropdown />}
      {dropdownOpen === "services" && <ServiceDropdown />}
      {dropdownOpen === "explore" && <ExploreDropdown />}
      {mobileMenuOpen && <MobileMenu />}
      {qrcodeOpen && <QrDropdown />}
      {faqOpen && <Faq/>}
    </nav>
  );
};

export default Navbar;
