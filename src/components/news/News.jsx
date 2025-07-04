import styles from "./news.module.css";

import Section from "../section/Section";

import naijaLoaded from "../../assets/img/naijaLoaded.png";
import pulseLogo from "../../assets/img/pulseLogo.png";
import punchLogo from "../../assets/img/techPoint.png";
import vanguardLogo from "../../assets/img/vanguardLogo.png";
import techPoint from "../../assets/img/techPoint.png";

const News = () => {
    return (
        <>
        <Section>
                <div className={styles.newsWrapper}>
                  <img src={punchLogo} alt="" className= {styles.punch} />
                  <img src={naijaLoaded} alt="" className= {styles.naija} />
                  <img src={pulseLogo} alt="" className= {styles.pulse} />
                  <img src={vanguardLogo} alt="" className= {styles.vangua} />
                  <img src={techPoint} alt="" className= {styles.tech}/>
                </div>
              </Section>
        </>
    )
}

export default News;