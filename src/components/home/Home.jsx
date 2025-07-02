import styles from "./home.module.css";

import Navbar from "../navbar/Navbar";
import Section from "../section/Section";
import Testimonial from "../testimonial/Testimonial";
import Button from "../button/Button";

import cards from "../../assets/img/cards.webp";
import sellCard from "../../assets/img/sellCard.webp";
import arrowForward from "../../assets/img/arrow.svg";
import creditCards from "../../assets/img/creditCards.webp";
import image from "../../assets/img/image.png";
import arrowIcon from "../../assets/img/arrow-icon.svg";

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
        <h1 className="muted-heading">Gift Cards</h1>

        <div className="card-container">
          <div className="card">
            <div className={styles.column}>
              <h3>Sell Gift Cards </h3>
              <p>Instantly convert the gift cards you don't nee to cash. </p>
              <Button variant="textSecondary">
                <span>Explore sell </span>
                <img src={arrowForward} alt="arrow" />
              </Button>
            </div>
            <img src={sellCard}></img>
          </div>

          <div className="card">
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
            <img src={cards}></img>
          </div>
        </div>

        <h1 className="muted-heading">Services</h1>

        <div className="card-container">
          <div className="card2">
            <div className="column">
              <span
                style={{
                  color: "#002444",
                  fontSize: "40px",
                  fontWeight: "600",
                  backgroundColor: "#FFE7DF",
                  margin: "5px",
                }}
              >
                Virtual Dollar Cards{" "}
              </span>
              <span
                style={{
                  color: "#1B507E",
                  fontSize: "21px",
                  fontWeight: "400",
                  backgroundColor: "#FFE7DF",
                  margin: "5px",
                }}
              >
                Shop online, pay for services, and make international purchases.{" "}
              </span>
              <a href="" className="btn3">
                <span
                  style={{
                    color: "#7580EF",
                    fontSize: "21px",
                    fontWeight: "400",
                    backgroundColor: "#FFE7DF",
                    margin: "5px",
                  }}
                >
                  Explore dollars{" "}
                </span>
                <img src={arrowForward} alt="arrow" className="btn3" />
              </a>
            </div>
            <img src={creditCards}></img>
          </div>
          <div className="services-card-container">
            <div className="left">
              <h1
                style={{
                  color: "#FFFFFF",
                  fontSize: "40px",
                  fontWeight: "600",
                  margin: "5px",
                }}
              >
                Just Gadgets{" "}
              </h1>
              <div
                style={{
                  color: "#D1E0E4",
                  fontSize: "21px",
                  fontWeight: "400",
                  backgroundColor: "#002444",
                  margin: "5px",
                }}
              >
                Shop authentic and affordable gadgets in just a few clicks.{" "}
              </div>
              <a href="" className="btn3">
                <span
                  style={{
                    color: "#00CEDE",
                    fontSize: "21px",
                    fontWeight: "400",
                    margin: "5px",
                  }}
                >
                  Explore buy{" "}
                </span>
                <img src={arrowForward} alt="arrow" className="btn3" />
              </a>
              <img src={cards}></img>
            </div>

            <div className="right">
              <div
                style={{
                  color: "#002444",
                  fontSize: "40px",
                  fontWeight: "600",

                  margin: "5px",
                }}
              >
                Bill Payments{" "}
              </div>
              <div
                style={{
                  color: "#1B507E",
                  fontSize: "21px",
                  fontWeight: "400",
                  backgroundColor: "#E6DDFD",
                  margin: "5px",
                }}
              >
                Organise and pay all your bills easily and seamlessly{" "}
              </div>
              <a href="" className="btn3">
                <span
                  style={{
                    color: "#7580EF",
                    fontSize: "21px",
                    fontWeight: "400",
                    backgroundColor: "#E6DDFD",
                    margin: "5px",
                  }}
                >
                  Explore buy{" "}
                </span>
                <img src={arrowForward} alt="arrow" className="btn3" />
              </a>
              <img src={image}></img>
            </div>
          </div>
        </div>
      </Section>

      <Testimonial />
    </div>
  );
};

export default Home;
