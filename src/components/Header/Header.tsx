import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <NavLink className={styles.nav__link} to='/frontend-challenge-uchi.ru/'>
        Все котики
      </NavLink>
      <NavLink className={styles.nav__link} to='/frontend-challenge-uchi.ru/favorite'>
        Любимые котики
      </NavLink>
    </nav>
  </header>
);
