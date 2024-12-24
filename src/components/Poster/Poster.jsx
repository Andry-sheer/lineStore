
import styles from '../../styles/Home.module.css';

import PC from '../../assets/images/nvidia.png'

const Poster = () => (
  <section className={styles.home}>
    <div className={styles.title}>BIG SALE 70%</div>
    <div className={styles.product}>
      <div className={styles.text}>
        <div className={styles.subTitle}>the bestseller of 2024</div>
        <h1 className={styles.head}>LEARN TECH. with NVIDIA 1060 6G</h1>
        <button className={styles.button}>Buy one click!</button>
      </div>
        <div className={styles.image}>
          <img src={PC} alt="img PC" />
        </div>
    </div>
  </section>
);

export default Poster;