import styles from "./testimonial.module.css";
import Section from "../section/Section";
import Button from "../button/Button";

import cards from "../../../src/assets/img/cards.webp";
import sellCard from "../../../src/assets/img/sellCard.webp";
import image from "../../../src/assets/img/image.png";
import naijaLoaded from "../../assets/img/naijaLoaded.png";
import pulseLogo from "../../assets/img/pulseLogo.png";
import punchLogo from "../../assets/img/techPoint.png";
import vanguardLogo from "../../assets/img/vanguardLogo.png";
import techPoint from "../../assets/img/techPoint.png";
import dormyAcc from "../../assets/img/dormyAcc.png";
import apple from "../../assets/img/apple.svg";
import playStore from "../../assets/img/playStore.svg";

const Testimonial = () => {
  return (
    <>
      <Section>
        <div className={styles.testimonialWrapper}>
          <h2 className="muted-heading">
            Testimonials <br />& News
          </h2>
          <div className={styles.cardGrid}>
            {/* First Testimonial */}
            <div className={styles.card}>
              <p className={styles.quoteMark}>“</p>
              <p className={styles.text}>
                The withdrawal was quicker than I expected, keep it up guys.
              </p>
              <div className={styles.footer}>
                <img
                  src={cards}
                  alt="IfeanyiJoseph"
                  className={styles.avatar}
                />
                <div>
                  <div className={styles.name}>Ifeanyi Joseph</div>
                  <div className={styles.source}>Play Store</div>
                </div>
              </div>
            </div>

            {/* Second Testimonial */}
            <div className={styles.card}>
              <p className={styles.quoteMark}>“</p>
              <p className={styles.text}>
                I was able to buy a Sephora gift card within a minute. Quite
                impressive.
              </p>
              <div className={styles.footer}>
                <img
                  src={image}
                  alt="Babalola Muiz"
                  className={styles.avatar}
                />
                <div>
                  <div className={styles.name}>Babalola Muiz</div>
                  <div className={styles.source}>App Store</div>
                </div>
              </div>
            </div>

            {/* Third Testimonial */}
            <div className={styles.card}>
              <p className={styles.quoteMark}>“</p>
              <p className={styles.text}>
                I highly rate this app. I recommended it to my brothers and
                friends, and they also love it.
              </p>
              <div className={styles.footer}>
                <img
                  src={sellCard}
                  alt="Nurudeen Abdulrazak"
                  className={styles.avatar}
                />
                <div>
                  <div className={styles.name}>Nurudeen Abdulrazak</div>
                  <div className={styles.source}>Play Store</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.newsWrapper}>
          <img src={punchLogo} alt="" className={styles.news} />
          <img src={naijaLoaded} alt="" className={styles.news} />
          <img src={pulseLogo} alt="" className={styles.news} />
          <img src={vanguardLogo} alt="" className={styles.news} />
          <img src={techPoint} alt="" className={styles.news} />
        </div>
      </Section>

      <div className={styles.downloadContainer}>
        <img src={dormyAcc} alt="dormyaccpic" className={styles.dormyAcc} />
        <div className={styles.download}>
          <h2>Download the App</h2>
          <p>
            Experience the best of cardtonic on your phone or tablet. Available
            for iOS and android operating system.
          </p>
          <Button size="lg" variant="black">
            <img src={apple} alt="" />
            Get on iphone
          </Button>
          <Button size="lg" variant="success">
            <img src={playStore} alt="" />
            Get on Android
          </Button>
        </div>
      </div>

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
    </>
  );
};

export default Testimonial;
