import styles from "./button.module.css";

const Button = ({ children, size = "default", variant = "primary" }) => {
  const sizeMap = {
    default: "defaultBtn",
    lg: "lgBtn",
  };

  const variantMap = {
    primary: "primaryBtn",
    black: "blackBtn",
    success: "successBtn",
    textSecondary: "textSecondaryBtn",
    textColoured : "textColourBtn",
  };

  return (
    <button
      className={`${styles.btn} ${styles[sizeMap[size]]} ${
        styles[variantMap[variant]]
      }`}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
