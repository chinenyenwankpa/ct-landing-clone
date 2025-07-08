import styles from "./navbar.module.css";

import { useState } from "react";
import Section from "../section/Section";
import Button from "../button/Button";
import GiftCardDropdown from "./components/giftCardDropdown/GiftCardDropdown";
import ServiceDropdown from "./components/serviceDropdown/ServiceDropdown";

import logo from "../../assets/img/Logo.png";
import qrCodeIcon from "../../assets/img/qr-code-icon.svg";
import ExploreDropdown from "./components/exploreDropdown/ExploreDropdown";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

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
            {/* <li>
              <a href="#">Just Gadgets</a>
            </li> */}
          </ul>

          <div className={styles.buttonContainer}>
            <button className={styles.qrButton}>
              <img src={qrCodeIcon} alt="qr-code" />
            </button>
            <Button>Get Started</Button>
          </div>
        </div>
      </Section>
      {dropdownOpen === "giftCard" && <GiftCardDropdown />}
      {dropdownOpen === "services" && <ServiceDropdown />}
      {dropdownOpen === "explore" && <ExploreDropdown />}
    </nav>
  );
};

export default Navbar;
