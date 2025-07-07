import styles from "./giftCardDropdown.module.css";

import DropdownItem from "../dropdownItem/DropdownItem";

//icons
import buyIcon from "../../../../assets/img/nav/giftCard/buy.svg";
import gameIcon from "../../../../assets/img/nav/giftCard/game.svg";
import lifestyleIcon from "../../../../assets/img/nav/giftCard/lifestyle.svg";
import musicIcon from "../../../../assets/img/nav/giftCard/music.svg";
import rateIcon from "../../../../assets/img/nav/giftCard/rate.svg";
import sellIcon from "../../../../assets/img/nav/giftCard/sell.svg";
import streamingIcon from "../../../../assets/img/nav/giftCard/streaming.svg";
import supermarketIcon from "../../../../assets/img/nav/giftCard/supermarket.svg";
import travelIcon from "../../../../assets/img/nav/giftCard/travel.svg";

const GiftCardDropdown = () => {
  const dropdownItems = [
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
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {dropdownItems.map((item) => (
          <DropdownItem {...item} />
        ))}
      </div>
    </div>
  );
};

export default GiftCardDropdown;
