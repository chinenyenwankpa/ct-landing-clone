import styles from "./button.module.css";

const Button = ({ children, size = "default", variant = "primary", onClick}) => {
  const sizeMap = {
    default: "defaultBtn",
    lg: "lgBtn",
    l: "lBtn",
    nav: "navBtn",
  };

  const variantMap = {
    primary: "primaryBtn",
    black: "blackBtn",
    success: "successBtn",
    textSecondary: "textSecondaryBtn",
    textColoured : "textColourBtn",
    navColour: "navColourBtn"
  };

  return (
    <button
      className={`${styles.btn} ${styles[sizeMap[size]]} ${
        styles[variantMap[variant]]
      }`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
