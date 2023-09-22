import styles from './Loader.module.scss';

export const Loader = () => (
  <div className={styles.loader}>
    <div className={styles.lds_facebook}>
      <div />
      <div />
      <div />
    </div>
    <p> загружаем еще котиков </p>
  </div>
);
