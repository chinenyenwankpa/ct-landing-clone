import styles from "./qrDropdown.module.css"

import qrcode from "../../../../assets/img/qr-code-icon.svg"
import apple from "../../../../assets/img/apple.svg"
import playStore from "../../../../assets/img/playStore.svg"

const QrDropdown = () => {
    return(
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <img src={qrcode} alt="" />
            <div>
                <img src={apple} alt="" />
                <img src={playStore} alt="" />
            </div>
        </div>  
        </div>
        
    )
}

export default QrDropdown