import styles from "./qrDropdown.module.css"

import qrCode from "../../../../assets/img/qrCode.svg"
import apple from "../../../../assets/img/apple.svg"
import playStore from "../../../../assets/img/playStore.svg"

const QrDropdown = () => {
    return(
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <img src={qrCode} alt="" />
            <div className={styles.outerContainer}>
                <img src={apple} alt="" className={styles.innerCircle}/>
                <img src={playStore} alt="" className={styles.innerCircle}/>
            </div>
        </div>  
        </div>
        
    )
}

export default QrDropdown