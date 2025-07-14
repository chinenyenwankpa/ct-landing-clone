import styles from "./menubarDropdown.module.css";

const Menubar = () => {
  return (
    <div className={styles.container}>
        <NavList></NavList>
    </div>
  );
};

export default Menubar;