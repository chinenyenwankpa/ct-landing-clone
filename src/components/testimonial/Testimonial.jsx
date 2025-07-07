import styles from "./testimonial.module.css";
import Section from "../section/Section";
import Button from "../button/Button";

import cards from "../../../src/assets/img/cards.webp";
import sellCard from "../../../src/assets/img/sellCard.webp";
import image from "../../../src/assets/img/image.png";
import quote from "../../assets/img/quote.png";

const testimonials = [
  {
    name: "Ifeanyi Joseph",
    platform: "Play Store",
    text: "The withdrawal was quicker than I expected, keep it up guys.",
    avatar: cards,
  },
  {
    name: "Babalola Muiz",
    platform: "App Store",
    text: "I was able to buy a Sephora gift card within a minute. Quite impressive.",
    avatar: image,
  },
  {
    name: "Nurudeen Abdulrazak",
    platform: "Play Store",
    text: "I highly rate this app. I recommended it to my brothers and friends, and they also love it.",
    avatar: sellCard,
  },
];



const Testimonial = () => {
  return (
    <div className={styles.testimonialWrapper}>
      <Section>
        <h2 className={styles.heading}>
          Testimonials <br /> & News
        </h2>
      </Section>

      <div className={styles.cardGrid}>
        {testimonials.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={quote} alt="quotationmark" className={styles.quote} />
            <p className={styles.text}>{item.text}</p>
            <div className={styles.footer}>
              <div className={styles.sourceContainer}>
                <div className={styles.sourceName}>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.source}>{item.platform}</p>
                </div>
                <img src={item.avatar} alt={item.name} className={styles.avatar} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Testimonial;
