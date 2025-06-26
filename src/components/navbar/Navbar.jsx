import Section from "../section/Section";
import styles from "./navbar.module.css";

import logo from "../../assets/img/Logo.png";
import qrCodeIcon from "../../assets/img/qr-code-icon.svg";

const Navbar = () => {
  return (
    <nav>
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

          <div>
            <a href="" className="qr-btn">
              <img src={qrCodeIcon} alt="qr-code" className="qr-btn" />
            </a>
            <a href="" className="btn">
              get started
            </a>
          </div>
        </div>
      </Section>
    </nav>
  );
};

export default Navbar;
