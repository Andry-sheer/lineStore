import { Link } from 'react-router-dom';

import styles from '../../styles/Header.module.css'

import { ROUTES } from '../../utils/routes';

import Logo from '../../assets/icons/LOGO.svg'
import avatar from '../../assets/icons/avatar.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={Logo} alt="JS logo" />
        </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.user}>
          <div className={styles.avatar} style={{ backgroundImage: `url(${avatar})` }} />
          <div className={styles.username}>Guest</div>
        </div>
        </div>

        <form className={styles.form}>
        <div className={styles.icon}>
            <svg className='icon'>
              <use href={`${process.env.PUBLIC_URL}/sprite.svg#Search`} />
            </svg>
          </div>

          <div className={styles.input}>
            <input
              type="search" 
              name='search' 
              placeholder='search...' 
              autoComplete='off' 
              onChange={()=> {}} 
              value="" />
          </div>

          {false && <div className={styles.box}></div>}
        </form>

        <div className={styles.account}>
          <Link to={ROUTES.HOME} className={styles.favorites}>
            <svg className={styles['icon-fav']}>
              <use href={`${process.env.PUBLIC_URL}/sprite.svg#Favorite`} />
            </svg>
          </Link>

          <Link to={ROUTES.CART} className={styles.cart}>
            <svg className={styles['icon-cart']}>
              <use href={`${process.env.PUBLIC_URL}/sprite.svg#Cart`} />
            </svg>
            <span className={styles.count}>2</span>
          </Link>
        </div>

    </div>
  )
}

export default Header;