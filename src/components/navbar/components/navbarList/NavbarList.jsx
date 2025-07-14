import styles from "./navbarList.module.css";
import { useState } from "react";
import DropdownItem from "../dropdownItem/DropdownItem";

import globe from "../../../../assets/img/globe.svg";
import apple from "../../../../assets/img/apple.svg";
import playStore from "../../../../assets/img/playStore.svg";
import plus from "../../../../assets/img/plus.svg";

// Gift Card Icons
import sellIcon from "../../../../assets/img/nav/giftCard/sell.svg";
import travelIcon from "../../../../assets/img/nav/giftCard/travel.svg";
import supermarketIcon from "../../../../assets/img/nav/giftCard/supermarket.svg";
import buyIcon from "../../../../assets/img/nav/giftCard/buy.svg";
import lifestyleIcon from "../../../../assets/img/nav/giftCard/lifestyle.svg";
import gameIcon from "../../../../assets/img/nav/giftCard/game.svg";
import rateIcon from "../../../../assets/img/nav/giftCard/rate.svg";
import musicIcon from "../../../../assets/img/nav/giftCard/music.svg";
import streamingIcon from "../../../../assets/img/nav/giftCard/streaming.svg";

// Service Icons
import gadget from "../../../../assets/img/nav/service/gadget.svg";
import card from "../../../../assets/img/nav/service/card.svg";
import bill from "../../../../assets/img/nav/service/bill.svg";
import bank from "../../../../assets/img/nav/service/bank.svg";

// Explore Icons
import developer from "../../../../assets/img/nav/explore/developer.svg";
import blog from "../../../../assets/img/nav/explore/blog.svg";
import partner from "../../../../assets/img/nav/explore/partner.svg";
import upskill from "../../../../assets/img/nav/explore/upskill.svg";
import giveback from "../../../../assets/img/nav/explore/giveback.svg";
import intouch from "../../../../assets/img/nav/explore/intouch.svg";

import Button from "../../../button/Button";

const NavbarList = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleSection = (id) => {
    setDropdownOpen((prev) => (prev === id ? null : id));
  };

  const accordionData = [
    {
      id: "giftCard",
      label: "Gift Card",
      items: [
        {
          title: "Sell Gift Cards",
          caption: "Exchange unused gift cards for cash at amazing rates.",
          icon: sellIcon,
        },
        {
          title: "Travel Gift Cards",
          caption: "Explore the world or creating unique experiences at home.",
          icon: travelIcon,
        },
        {
          title: "Supermarket Gift Cards",
          caption: "Buy anything from online supermarkets and stores.",
          icon: supermarketIcon,
        },
        {
          title: "Buy Gift Cards",
          caption: "Buy over 14,000+ local and international gift cards.",
          icon: buyIcon,
        },
        {
          title: "Lifestyle Gift Cards",
          caption: "Purchase items from brands around the world.",
          icon: lifestyleIcon,
        },
        {
          title: "Gaming Gift Cards",
          caption: "Access every possible game for your console.",
          icon: gameIcon,
        },
        {
          title: "Gift Card Rates",
          caption: "Discover the best rates for selling your gift card.",
          icon: rateIcon,
        },
        {
          title: "Music Gift Cards",
          caption: "Prepaid codes for any digital music platform.",
          icon: musicIcon,
        },
        {
          title: "Streaming Gift Cards",
          caption: "Easy access to your favourite movies and shows.",
          icon: streamingIcon,
        },
      ],
    },
    {
      id: "services",
      label: "Products",
      items: [
        {
          title: "Just Gadgets",
          caption: "Buy affordable gadgets from the comfort of your favourite app.",
          icon: gadget,
        },
        {
          title: "Virtual Dollar Card",
          caption: "Shop online, pay for services, or make international purchases.",
          icon: card,
        },
        {
          title: "Bill Payment",
          caption: "Organise and pay all your bills easily and seamlessly.",
          icon: bill,
        },
        {
          title: "Virtual Bank Account",
          caption: "Open a Naira bank account for easy transactions.",
          icon: bank,
        },
      ],
    },
    {
      id: "explore",
      label: "Explore",
      items: [
        {
          title: "Developer API",
          caption: "Integrate gift card services into your platform.",
          icon: developer,
        },
        {
          title: "Blog",
          caption: "Get the latest news, articles, and updates from Cardtonic.",
          icon: blog,
        },
        {
          title: "Become A Partner",
          caption: "Launch a gifting program for your customers.",
          icon: partner,
        },
        {
          title: "Upskill",
          caption: "We give away MacBooks to 15 tech enthusiasts.",
          icon: upskill,
        },
        {
          title: "#CTGivesBack",
          caption: "We support initiatives that deliver relief to communities.",
          icon: giveback,
        },
        {
          title: "Get In Touch",
          caption: "Reach out to us or follow us on social media.",
          icon: intouch,
        },
      ],
    },
  ];

  return (
    <div>
      <div className={styles.btnContainer}>
        {accordionData.map(({ id, label, items }) => (
          <div className={styles.accordionItem} key={id}>
            <Button
              size="nav"
              variant="navColour"
              onClick={() => toggleSection(id)}
            >
              {label}
              <img
                src={plus}
                alt=""
              />
            </Button>
            <div
              className={`${styles.accordionContent} ${
                dropdownOpen === id ? styles.show : ""
              }`}
            >
              {dropdownOpen === id &&
                items.map((item, index) => <DropdownItem key={index} {...item} />)}
            </div>
          </div>
        ))}

        <Button size="l" variant="black">
          <img src={apple} alt="" />
          Get on iPhone
        </Button>
        <Button size="l" variant="success">
          <img src={playStore} alt="" />
          Get on Android
        </Button>
        <Button size="l" variant="primary">
          <img src={globe} alt="" />
          Web Sign Up
        </Button>
      </div>
    </div>
  );
};

export default NavbarList;
