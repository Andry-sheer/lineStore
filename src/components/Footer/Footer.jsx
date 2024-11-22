
import { Link } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

import styles from "../../styles/Footer.module.css";

import Logo from '../../assets/icons/LOGO.svg'
import { LiaFacebook } from "react-icons/lia";
import { IoLogoInstagram } from "react-icons/io";
import { SlSocialYoutube} from "react-icons/sl";



const Footer = () => (
      <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={Logo} alt="JS logo" />
        </Link>
      </div>

        <div className={styles.rights}>
          Developed by {" "} <a href="https://github.com/Andry-sheer" target="_blank" rel="noreferrer">
            Andrew
          </a>
        </div>

        <div className={styles.socials}>
        <a className={styles.socialLink} href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <SlSocialYoutube className={styles.socialSvg} />
        </a>

        <a className={styles.socialLink} href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <LiaFacebook className={styles.socialSvg} />
        </a>

        <a className={styles.socialLink} href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <IoLogoInstagram className={styles.socialSvg} />
        </a>
        </div>
    </section>
  );

export default Footer;
