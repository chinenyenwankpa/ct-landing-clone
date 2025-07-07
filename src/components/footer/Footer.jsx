import styles from "./footer.module.css";

import Section from "../section/Section";

const Footer = () => {
  return (
    <Section>
      <div className={styles.footer}>
        <div className={styles.innerfooter}>
          <h2>Cardtonic</h2>
          <p>Virtual dollar cards</p>
          <p>Buy gift cards</p>
          <p>Sell gift cards</p>
          <p>Just Gadget</p>
          <p>Bill payment</p>
          <p>Bank Account</p>
        </div>

        <div className={styles.innerfooter}>
          <h2>Available Gift Cards</h2>
          <p>travel gift card</p>
          <p>lifestyle gift card</p>
          <p>Music Gift Cards</p>
          <p>Supermarket Gift Cards</p>
          <p>Gaming Gift Cards</p>
          <p>Streaming Gift Cards</p>
        </div>

        <div className={styles.innerfooter}>
          <h2>Resources</h2>
          <p>Blog</p>
          <p>Rewards</p>
          <p>Gift Card Rates</p>
          <p>Developer API</p>
        </div>

        <div className={styles.innerfooter}>
          <h2>Company</h2>
          <p>Partners</p>
          <p>#CTGivesBack</p>
          <p>Virtual Dollar Card Report</p>
          <p>Upskill</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>

        <div className={styles.innerfooter}>
          <h2>Connect</h2>
          <p>Get In Touch</p>
          <p>support@cardtonic.com</p>
          <p>+234 (0) 1 343 0626</p>
          <p>+234 (0) 706 050 2770</p>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
