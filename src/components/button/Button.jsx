import styles from "./button.module.css";

const Button = ({ children }) => {
  return (
    <button className={styles.btn} type="button">
      {children}
    </button>
  );
};

export default Button;
