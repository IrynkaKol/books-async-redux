import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        className={styles.link}
       
      >
        Главная
      </NavLink>

      {/* <NavLink
        to="/authors"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Авторы
      </NavLink> */}

      <NavLink
        to="/books"
        className={styles.link}
        
      >
        Книги
      </NavLink>
    </nav>
  );
}
