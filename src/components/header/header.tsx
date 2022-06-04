import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src="logo.png" alt="logo" />
      <img src="strong.png" alt="strong" />
      <div className={styles.line}></div>
      <p>Материалы для ландшафтного дизайна и озеленения</p>
      <div className={styles.label}>
        <img src="point.png" alt="point" />
        <div className={styles.description}>
          <p>Воронеж, Монтажный проезд, 7</p>
          <a href="#">Все филиалы</a>
        </div>
      </div>
	  <div className={styles.label}>
        <img src="call.png" alt="call" />
        <div className={styles.description}>
          <p>+7 (473) 240-29-84</p>
          <a href="#">Заказать звонок</a>
        </div>
      </div>
	  <div className={styles.social}>
        <img src="vk.png" alt="vk" />
        <img src="od.png" alt="od" />
        <img src="f.png" alt="f" />
        <img src="insta.png" alt="insta" />
	  </div>
	  <div className={styles.menu}>
        <img src="menu.png" alt="menu" />

	  </div>
    </div>
  );
};
export default Header;
