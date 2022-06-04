import styles from "./section1.module.scss";

const Section1 = () => {
  return (
    <div className={styles.section1}>
      <img className={styles.stone} src="stone.png" alt="stone" />
      <div className={styles.desc}>
        <h1>Самый большой склад камня в Черноземье</h1>
        <button className={styles.btn}>Узнать подробнее</button>
      </div>
	  <div className={styles.label}>
		  <span>10 000 м3</span>
		  <p>в наличии</p>
	  </div>
    </div>
  );
};
export default Section1;
