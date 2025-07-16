import styles from "./home.module.css";

import Navbar from "../navbar/Navbar";
import Section from "../section/Section";
import Testimonial from "../testimonial/Testimonial";
import Button from "../button/Button";
import Footer from "../footer/Footer";
import News from "../news/News";

import cards from "../../assets/img/cards.webp";
import sellCard from "../../assets/img/sellCard.webp";
import arrowForward from "../../assets/img/arrow.svg";
import creditCards from "../../assets/img/creditCards.webp";
import image from "../../assets/img/image.png";
import arrowIcon from "../../assets/img/arrow-icon.svg";
import dormyAcc from "../../assets/img/dormyAcc.png";
import apple from "../../assets/img/apple.svg";
import playStore from "../../assets/img/playStore.svg";
import vector from "../../assets/img/vector.svg"

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className={styles.hero}>
        <Section>
          <div className={styles.heroSection}>
            <button className={styles.apiButton}>
              <p>Try our Gift Card Developer API</p>
              <span className={styles.iconWrapper}>
                <img src={arrowIcon} alt="arrow icon" />
              </span>
            </button>
            <h1 className={styles.mainHeading}>
              Explore virtual cards, gift cards and{" "}
              <span style={{ color: "#7580EF" }}>
                {" "}
                digital payment solutions
              </span>
            </h1>
            <p className={styles.mainText}>
              Trade gift cards, pay bills, purchase gadgets, and access dollar
              cards.
            </p>
            <Button size="lg">Get started</Button>
          </div>
        </Section>
      </div>

      <Section>
        <div className={styles.videoWrapper}>
          <video src="seyi.mp4" className={styles.video} />
        </div>
      </Section>

      <Section className={styles.giftCard}>
        <h1 className={styles.mutedheading}>Gift Cards</h1>

        <div className="card-container">
          <div className={styles.card}>
            <div className={styles.column}>
              <h3>Sell Gift Cards </h3>
              <p>Instantly convert the gift cards you don't nee to cash. </p>
              <Button variant="textSecondary">
                <span>Explore sell </span>
                <img src={arrowForward} alt="arrow" />
              </Button>
            </div>
            <img src={sellCard} className={styles.sellCard}></img>
          </div>

          <div className={styles.card}>
            <div className={styles.column}>
              <h3>Buy Gift Cards </h3>
              <p>
                Over 14,000 local and international gift cards are available for
                purchase{" "}
              </p>
              <Button variant="textSecondary">
                <span>Explore buy </span>
                <img src={arrowForward} alt="arrow" />
              </Button>
            </div>
            <img src={cards} className={styles.cards}></img>
          </div>
        </div>

        <h1 className={styles.mutedheading}>Services</h1>

        <div className="card-container">
          <div className={styles.card2}>
            <div className={styles.column}>
              <h3>Virtual Dollar Cards</h3>
              <p>
                Shop online, pay for services, and make international purchases.{" "}
              </p>
              <Button variant="textSecondary">
                <span>Explore dollars</span>
                <img src={arrowForward} alt="arrow" />
              </Button>
            </div>
            <img src={creditCards} className={styles.creditCards}></img>
          </div>

          <div className={styles.servicesCardContainer}>
            <div className={styles.left}>
              <div className={styles.column}>
                <h3>Just Gadgets</h3>
                <p className={`{styles.whiteP}`}>
                  Shop authentic and affordable gadgets in just a few clicks.
                </p>
                <Button variant="textColoured">
                  <span>Explore buy</span>
                  <img src={vector} alt="arrow" />
                </Button>
              </div>
              <div>
                <img src={cards} className={styles.leftImg}></img>
              </div>
            </div>

            <div className={styles.right}>
              <div className={styles.column}>
                <h3>Bill Payments</h3>
                <p>Organise and pay all your bills easily and seamlessly </p>
                <Button variant="textSecondary">
                  <span>Explore buy</span>
                  <img src={arrowForward} alt="arrow" />
                </Button>
              </div>
              <div>
                <img src={image} className={styles.leftImg}></img>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Testimonial />

      <News/>

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

      <Footer/>
    </div>
  );
};

export default Home;
