import { useSelector } from 'react-redux';

import { Cards } from '../../components';
import { selectFavoriteCats } from '../../store/slice/favoriteSlice';

export const Favorites = () => {
  const favoriteCats = useSelector(selectFavoriteCats);
  return (
    <main>
      <Cards cardsData={favoriteCats} />
    </main>
  );
};
