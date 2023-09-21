import { useSelector } from 'react-redux';

import { Cards } from '../../components';
import { selectFavoriteCats } from '../../store/features/favoriteSlice';

export const Favorites = () => {
  const favoriteCats = useSelector(selectFavoriteCats);
  return (
    <main>
      <Cards cardsData={favoriteCats} />
    </main>
  );
};
