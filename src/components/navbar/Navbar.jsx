import styles from "./navbar.module.css";

import { useState } from "react";

import Section from "../section/Section";
import Button from "../button/Button";
import GiftCardDropdown from "./components/giftCardDropdown/GiftCardDropdown";
import ServiceDropdown from "./components/serviceDropdown/ServiceDropdown";
import ExploreDropdown from "./components/exploreDropdown/ExploreDropdown";
import NavbarList from "./components/navbarList/navbarList";
import QrDropdown from "./components/qrDropdown/QrDropdown"

import logo from "../../assets/img/Logo.png";
import qrCodeIcon from "../../assets/img/qr-code-icon.svg";
import menubar from "../../assets/img/nav/menubar.svg";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [menubarOpen, setMenubarOpen] = useState(false)
  const [qrcodeOpen, setQrcodeOpen] = useState(false)

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
          </ul>

          <div className={styles.buttonContainer}>
            <button className={styles.qrButton}
            onClick={() => {
              setQrcodeOpen((prev) => !prev)
            }}
            >
              <img src={qrCodeIcon} alt="qr-code" />
            </button>
            <Button>Get Started</Button>
          </div>

          <button className={styles.menuButton}
          onClick={() => {
            setMenubarOpen((prev) => !prev)
          }}
          >
            <img src={menubar} alt="menubar" />
          </button>
        </div>
      </Section>
      {dropdownOpen === "giftCard" && <GiftCardDropdown />}
      {dropdownOpen === "services" && <ServiceDropdown />}
      {dropdownOpen === "explore" && <ExploreDropdown />}
      {menubarOpen && <NavbarList/>}
      {qrcodeOpen && <QrDropdown/>}
    </nav>
  );
};

export default Navbar;
