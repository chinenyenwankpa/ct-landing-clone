import { useState } from "react";
import "./App.css";

const App = () => {
  return (
    <>
      <nav>
        <div className="header">
          <img src="Logo.png" alt="cardtonic logo"></img>
          <div>
            <a>Gift Card</a>
            <a>Product</a>
            <a>Explore</a>
            <a>Just Gadget</a>
          </div>

          <div>
            <a href="" className="qr-btn">
              <img
                src="icons8-qr-code 1.png"
                alt="qr-code"
                className="qr-btn"
              />
            </a>
            <a href="" className="btn">
              get started
            </a>
          </div>
        </div>
      </nav>

      <div className="section-2">
        <div>
          Try our Gift Card Developer API
          <a href="" className="btn1"></a>
        </div>
        <div className="big-text">
          Explore virtual cards, gift cards <br />
          and digital payment solutions
        </div>
        <div>
          Cardtonic is the best platform to get virtual dollar cards, <br />{" "}
          trade gift cards, pay bills and buy gadgets.
        </div>
        <a href="" className="btn2">
          Get started
        </a>
      </div>

      <div>
        <video src="seyi.mp4"> </video>
      </div>
      <div className="text1">Gift Cards</div>

      <div className="card-container">
        <div className="card">
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
            <img src="arrow-forward-outline.png" alt="arrow" className="btn3" />
          </a>
          <img src="sell-card.webp"></img>
        </div>

        <div className="card">
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
            <img src="arrow-forward-outline.png" alt="arrow" className="btn3" />
          </a>
          <img src="cards.webp"></img>
        </div>
      </div>

      <div className="text1">Services</div>

      <div className="card-container">
        <div className="card2">
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
            <img src="arrow-forward-outline.png" alt="arrow" className="btn3" />
          </a>
          <img src="credit-cards.webp"></img>
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
            <img src="arrow-forward-outline.png" alt="arrow" className="btn3" />
          </a>
          <img src="cards.webp"></img>
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
            <img src="arrow-forward-outline.png" alt="arrow" className="btn3" />
          </a>
          <img src="image.png"></img>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default App;
