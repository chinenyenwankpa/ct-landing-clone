import styles from "./footer.module.css";

import Section from "../section/Section";
const footerLinks = [
  {
    title: "Cardtonic",
    items: [
      "Virtual dollar cards",
      "Buy gift cards",
      "Sell gift cards",
      "Just Gadget",
      "Bill payment",
      "Bank Account",
    ],
  },
  {
    title: "Available Gift Cards",
    items: [
      "travel gift card",
      "lifestyle gift card",
      "Music Gift Cards",
      "Supermarket Gift Cards",
      "Gaming Gift Cards",
      "Streaming Gift Cards",
    ],
  },
  {
    title: "Resources",
    items: ["Blog", "Rewards", "Gift Card Rates", "Developer API"],
  },
  {
    title: "Company",
    items: [
      "Partners",
      "#CTGivesBack",
      "Virtual Dollar Card Report",
      "Upskill",
      "Privacy Policy",
      "Terms of Use",
    ],
  },
  {
    title: "Connect",
    items: [
      "Get In Touch",
      "support@cardtonic.com",
      "+234 (0) 1 343 0626",
      "+234 (0) 706 050 2770",
    ],
  },
];

const Footer = () => {
  return (
    <Section>
      <div className={styles.footer}>
        {footerLinks.map((section, index) => (
          <div key={index} className={styles.innerfooter}>
            <h2>{section.title}</h2>
            {section.items.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
};




export default Footer;
