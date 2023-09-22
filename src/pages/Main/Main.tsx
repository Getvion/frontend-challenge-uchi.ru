import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from 'react-redux';

import { Cards, Loader } from '../../components';
import { useAppDispatch } from '../../hooks/useAppDispath';
import { fetchCats, selectCats } from '../../store/features/catsSlice';

export const Main = () => {
  const dispatch = useAppDispatch();

  const cats = useSelector(selectCats);

  let catPageNubmer = 1;
  useEffect(() => {
    dispatch(fetchCats(catPageNubmer));
  }, []);

  const fetchMoreCats = () => {
    catPageNubmer += 1;
    dispatch(fetchCats(catPageNubmer));
  };

  return (
    <main>
      <InfiniteScroll
        dataLength={cats.results.length}
        next={fetchMoreCats}
        hasMore // Replace with a condition based on your data source
        loader={<Loader />}
        endMessage={<p>No more data to load.</p>}
      >
        <Cards cardsData={cats} />
      </InfiniteScroll>
    </main>
  );
};
