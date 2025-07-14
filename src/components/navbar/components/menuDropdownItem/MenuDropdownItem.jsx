import styles from "./menuDropdownItem.module.css"

const MenuDropdownItem = ({ icon, title, caption }) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={icon} alt={title} />
      </div>
      <div className={styles.labelContainer}>
        <h4>{title}</h4>
        <p>{caption}</p>
      </div>
    </div>
  );
};

export default MenuDropdownItem