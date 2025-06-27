import styles from "./home.module.css";

import Navbar from "../navbar/Navbar";
import Section from "../section/Section";

import cards from "../../../src/assets/img/cards.webp";
import sellCard from "../../../src/assets/img/sellCard.webp";
import arrowForward from "../../../src/assets/img/arrowForward.png";
import creditCards from "../../../src/assets/img/creditCards.webp";
import image from "../../../src/assets/img/image.png";
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
            <a href="" className="btn2">
              Get started
            </a>
          </div>
        </Section>
      </div>

      <div>
        <video src="seyi.mp4"> </video>
      </div>
      <div className="text1">Gift Cards</div>

      <div className="card-container">
        <div className="card">
          <div className="column">
            <span
              style={{
                color: "#002444",
                fontSize: "40px",
                fontWeight: "600",
                backgroundColor: "#E5F9FB",
                margin: "5px",
              }}
            >
              Sell Gift Cards{" "}
            </span>
            <span
              style={{
                color: "#1B507E",
                fontSize: "21px",
                fontWeight: "400",
                backgroundColor: "#E5F9FB",
                margin: "5px",
              }}
            >
              Instantly convert the gift cards you don't nee to cash.{" "}
            </span>
            <a href="" className="btn3">
              <span
                style={{
                  color: "#7580EF",
                  fontSize: "21px",
                  fontWeight: "400",
                  backgroundColor: "#E5F9FB",
                  margin: "5px",
                }}
              >
                Explore sell{" "}
              </span>
              <img src={arrowForward} alt="arrow" className="btn3" />
            </a>
          </div>
          <img src={sellCard}></img>
        </div>

        <div className="card">
          <div className="column">
            <span
              style={{
                color: "#002444",
                fontSize: "40px",
                fontWeight: "600",
                backgroundColor: "#E5F9FB",
                margin: "5px",
              }}
            >
              Buy Gift Cards{" "}
            </span>
            <span
              style={{
                color: "#1B507E",
                fontSize: "21px",
                fontWeight: "400",
                backgroundColor: "#E5F9FB",
                margin: "5px",
              }}
            >
              Over 14,000 local and international gift cards are available for
              purchase{" "}
            </span>
            <a href="" className="btn3">
              <span
                style={{
                  color: "#7580EF",
                  fontSize: "21px",
                  fontWeight: "400",
                  backgroundColor: "#E5F9FB",
                  margin: "5px",
                }}
              >
                Explore buy{" "}
              </span>
              <img src={arrowForward} alt="arrow" className="btn3" />
            </a>
          </div>
          <img src={cards}></img>
        </div>
      </div>

      <div className="text1">Services</div>

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
            <div
              style={{
                color: "#FFFFFF",
                fontSize: "40px",
                fontWeight: "600",
                backgroundColor: "#002444",
                margin: "5px",
              }}
            >
              Just Gadgets{" "}
            </div>
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
                  backgroundColor: "#002444",
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
                backgroundColor: "#E6DDFD",
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
    </div>
  );
};

export default Home;
