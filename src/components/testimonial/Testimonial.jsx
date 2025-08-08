import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';

import styles from "./testimonial.module.css";
import Section from "../section/Section";

import cards from "../../../src/assets/img/cards.webp";
import sellCard from "../../../src/assets/img/sellCard.webp";
import phoneImage from "../../../src/assets/img/phoneImage.png";
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
      avatar: phoneImage,
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
    {
      name: "Ifeanyi Joseph",
      store: "Play Store",
      avatar: cards,
      remark: "The withdrawal was quicker than I expected, keep it up guys.",
    },
    {
      name: "Babalola Muiz",
      store: "App Store",
      avatar: phoneImage,
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

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation = {true}
        pagination={{ clickable: true }}
        loop ={true}
        Autoplay = {{ delay: 2000,
          disableOnInteraction: false,
        }}
        className={styles.swiper}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.name} className={styles.swiperSlide}>
            <div className={styles.card}>
              <img src={quote} alt="quotation mark" className={styles.quote} />
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
                      alt={testimonial.name}
                      className={styles.avatar}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
