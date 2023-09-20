import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Card, Loader } from '../../components';
import { useAppDispatch } from '../../hooks/useAppDispath';
import { fetchCats, selectCats } from '../../store/features/catsSlice';

import styles from './Main.module.scss';

export const Main = () => {
  const dispatch = useAppDispatch();

  const cats = useSelector(selectCats);

  useEffect(() => {
    dispatch(fetchCats());
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.cards}>
        {cats.isLoaded ? (
          cats.results.map((cat) => <Card key={cat.id} cardData={cat} />)
        ) : (
          <Loader />
        )}
      </div>
      <Loader />
    </main>
  );
};
