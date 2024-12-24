import styles from '../../styles/Home.module.css';

import santa from '../../assets/images/imgSanta.png';

const Banner = () => (
  <section className={styles.banner}>
    <div className={styles.leftSide}>
      <p className={styles.content}>
        NEW YEAR<br/>
        <span className={styles.discountSpan}>SALE</span>
      </p>
      <button className={styles.more}>See more</button>
    </div>

    <div className={styles.rightSide} style={{ backgroundImage: `url(${santa})`}}>
      <p className={styles.discount}>
        save up to <span className={styles.discountSpanTwo}>50%</span> off
      </p>
    </div>
  </section>
)

export default Banner;