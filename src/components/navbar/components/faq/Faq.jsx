import styles from "./faq.module.css"

import DropdownItem from "../dropdownItem/DropdownItem";

import { useState } from "react";

import plus from "../../../../assets/img/plus.svg";
import minus from "../../../../assets/img/minus.svg";

const Faq = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleSection = (id) => {
    setDropdownOpen((prev) => (prev === id ? null : id));
  };

  const accordionData = [
    {
      id: 1,
      label: "Is Cardtonic legit?",
      items: [
        {
          caption: "Yes, Cardtonic is widely regarded as a legitimate platform for trading gift cards in Nigeria. It has been operating since 2016 and has a large user base, verified business registration, and numerous positive reviews on platforms like Trustpilot and Google Play Store.",
        },
      ],
    },
    {
      id: 2,
      label: "How do I sell a gift card on Cardtonic?",
      items: [
        {
          caption: "You can sell a gift card on Cardtonic by:Downloading the Cardtonic app (Android or iOS). Creating an account. Selecting the type of gift card you want to sell. Uploading the card image/code and entering the amount. Receiving a naira equivalent once the transaction is verified (usually within minutes).",
        },
      ],
    },
    {
      id: 3,
      label: "What gift cards does Cardtonic accept?",
      items: [
        {
          caption: "Cardtonic accepts a wide range of gift cards, including: iTunes/Apple,Amazon,Google Play,Steam,Sephora,eBay,Walmart, Visa/Mastercard gift cards, And many more. The list is regularly updated based on market demand.",
        },
      ],
    },
    {
      id: 4,
      label: "How much is a $100 gift card on Cardtonic?",
      items: [
        {
          caption: "The rate for a $100 gift card varies based on the card type and current market value. For example: A $100 Amazon gift card might go for ₦65,000–₦75,000. A $100 Steam card might fetch ₦60,000–₦70,000. You can check live rates on the Cardtonic app or website.",
        },
      ],
    },
    {
      id: 5,
      label: "How long does it take to get paid on Cardtonic?",
      items: [
        {
          caption: "Payments are usually processed within 5–10 minutes after the card is verified. In some cases, it might take longer if the card requires additional validation. Cardtonic pays directly to your Nigerian bank account or wallet.",
        },
      ],
    },
  ];

  return (
    <div>
      <div className={styles.heading}>
        <h1>Frequently Asked Questions</h1>

      </div>

      <div className={styles.container}>
      {accordionData.map(({ id, label, items }) => (
        <div className={styles.accordionItem} key={id}>
          <button onClick={() => toggleSection(id)}>
            {label}
            <img src={dropdownOpen === id ? minus : plus} alt="" />
          </button>

          {dropdownOpen === id && (
            <div className={styles.navListWrapper}>
              {items.map((item, index) => (
                <DropdownItem key={index} {...item} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default Faq;
