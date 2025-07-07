import styles from "./news.module.css";

import Section from "../section/Section";

import naijaLoaded from "../../assets/img/naijaLoaded.png";
import pulseLogo from "../../assets/img/pulseLogo.png";
import punchLogo from "../../assets/img/punchLogo.png";
import vanguardLogo from "../../assets/img/vanguardLogo.png";
import techPoint from "../../assets/img/techPoint.png";

const News = () => {
  return (
    <Section>
      <div className={styles.newsWrapper}>
        <img src={punchLogo} />
        <img src={naijaLoaded} />
        <img src={pulseLogo} />
        <img src={vanguardLogo} />
        <img src={techPoint} />
      </div>
    </Section>
  );
};

export default News;
