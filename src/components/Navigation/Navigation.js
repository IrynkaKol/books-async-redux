import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  
  let activeClassName = styles.activLink

  return (
    <nav>
      <NavLink
        to="/"
        
        className={({ isActive }) =>
        isActive ? activeClassName : undefined
      }
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
        className={({ isActive }) =>
        isActive ? activeClassName : undefined
      }
      >
        Книги
      </NavLink>
    </nav>
  );
}
