import { NavLink } from "react-router-dom";
import styles from "../../styles/Sidebar.module.css";
import { useSelector } from "react-redux";

const Sidebar = () => {

  const { list } = useSelector(({ categories })=> categories);

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          {list.map(({ id, name })=> (
            <li className={styles.menuLink} key={id}>
              <NavLink to={`/categories/${id}`}>{name}</NavLink>
            </li>
          ))}

        </ul>
      </nav>

      <div className={styles.footer}>
        <a className={styles.link} target="_blank" href="/help">
          Help
        </a>

        <a
          className={styles.link}
          target="_blank"
          href="/terms"
          style={{ textDecoration: "underline" }}
        >
          Terms & Conditions
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
