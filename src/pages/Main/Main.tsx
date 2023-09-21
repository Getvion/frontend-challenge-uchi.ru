import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Cards, Loader } from '../../components';
import { useAppDispatch } from '../../hooks/useAppDispath';
import { fetchCats, selectCats } from '../../store/features/catsSlice';

export const Main = () => {
  const dispatch = useAppDispatch();

  const cats = useSelector(selectCats);

  useEffect(() => {
    dispatch(fetchCats());
  }, []);

  return (
    <main>
      <Cards cardsData={cats} />
      <Loader />
    </main>
  );
};
