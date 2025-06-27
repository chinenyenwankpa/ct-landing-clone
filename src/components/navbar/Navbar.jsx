import styles from "./navbar.module.css";

import Section from "../section/Section";
import Button from "../button/Button";

import logo from "../../assets/img/Logo.png";
import qrCodeIcon from "../../assets/img/qr-code-icon.svg";

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <Section>
        <div className={styles.navbar}>
          <img src={logo} alt="cardtonic logo" className={styles.logo} />
          <ul className={styles.navlist}>
            <li>
              <a href="#">Gift Card</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Just Gadgets</a>
            </li>
          </ul>

          <div className={styles.buttonContainer}>
            <button className={styles.qrButton}>
              <img src={qrCodeIcon} alt="qr-code" />
            </button>
            <Button>Get Started</Button>
          </div>
        </div>
      </Section>
    </nav>
  );
};

export default Navbar;
