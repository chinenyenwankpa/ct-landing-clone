import styles from "./testimonial.module.css";
import Section from "../section/Section";
import Button from "../button/Button";

import cards from "../../../src/assets/img/cards.webp";
import sellCard from "../../../src/assets/img/sellCard.webp";
import image from "../../../src/assets/img/image.png";
import quote from "../../assets/img/quote.png";


const Testimonial = () => {
  return (
    <>
        <div className={styles.testimonialWrapper}>
          <Section>
            <h2 className={styles.heading}>
            Testimonials <br />& News
          </h2>
          </Section>
          
          <div className={styles.cardGrid}>
            {/* First Testimonial */}
            <div className={styles.card}>
              <img src={quote} alt="quotationmark" className={styles.quote} />
              <p className={styles.text}>
                The withdrawal was quicker than I expected, keep it up guys.
              </p>
              <div className={styles.footer}>
                <div className={styles.sourceContainer}>
                  <div className={styles.sourceName}>
                    <p className={styles.name}>Ifeanyi Joseph</p>
                    <p className={styles.source}>Play Store</p>
                  </div>
                  <div>
                    <img
                      src={cards}
                      alt="IfeanyiJoseph"
                      className={styles.avatar}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Second Testimonial */}
            <div className={styles.card}>
            <img src={quote} alt="quotationmark" className={styles.quote} />
              <p className={styles.text}>
                I was able to buy a Sephora gift card within a minute. Quite
                impressive.
              </p>
              <div className={styles.footer}>
                <div className={styles.sourceContainer}>
                  <div className={styles.sourceName}>
                    <p className={styles.name}>Babalola Muiz</p>
                    <p className={styles.source}>App Store</p>
                  </div>
                  <div>
                    <img
                      src={image}
                      alt="Babalola Muiz"
                      className={styles.avatar}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Third Testimonial */}
            <div className={styles.card}>
            <img src={quote} alt="quotationmark" className={styles.quote} />
              <p className={styles.text}>
                I highly rate this app. I recommended it to my brothers and
                friends, and they also love it.
              </p>
              <div className={styles.footer}>
                <div className={styles.sourceContainer}>
                  <div className={styles.sourceName}>
                    <div className={styles.name}>Nurudeen Abdulrazak</div>
                    <div className={styles.source}>Play Store</div>
                  </div>
                  <img
                    src={sellCard}
                    alt="Nurudeen Abdulrazak"
                    className={styles.avatar}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Testimonial;
