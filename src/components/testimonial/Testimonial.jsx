import styles from "./testimonial.module.css";
import Section from "../section/Section";

import cards from "../../../src/assets/img/cards.webp";
import sellCard from "../../../src/assets/img/sellCard.webp";
import image from "../../../src/assets/img/image.png";
import quote from "../../assets/img/quote.png";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Ifeanyi Joseph",
      store: "Play Store",
      avatar: cards,
      remark: "The withdrawal was quicker than I expected, keep it up guys.",
    },
    {
      name: "Babalola Muiz",
      store: "App Store",
      avatar: image,
      remark:
        "I was able to buy a Sephora gift card within a minute. Quite impressive.",
    },
    {
      name: "Nurudeen Abdulrazak",
      store: "Play Store",
      avatar: sellCard,
      remark:
        "I highly rate this app. I recommended it to my brothers and friends, and they also love it.",
    },
  ];

  return (
    <div className={styles.testimonialWrapper}>
      <Section>
        <h2 className={styles.heading}>
          Testimonials <br />& News
        </h2>
      </Section>

      <div className={styles.cardGrid}>
        {testimonials.map((testimonial) => {
          return (
            <div className={styles.card}>
              <img src={quote} alt="quotationmark" className={styles.quote} />
              <p className={styles.text}>{testimonial.remark}</p>
              <div className={styles.footer}>
                <div className={styles.sourceContainer}>
                  <div className={styles.sourceName}>
                    <p className={styles.name}>{testimonial.name}</p>
                    <p className={styles.source}>{testimonial.store}</p>
                  </div>
                  <div>
                    <img
                      src={testimonial.avatar}
                      alt="IfeanyiJoseph"
                      className={styles.avatar}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default Testimonial;
