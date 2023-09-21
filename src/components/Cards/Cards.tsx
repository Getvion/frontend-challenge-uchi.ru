import { ICatsState } from '../../@types/state';
// eslint-disable-next-line import/no-cycle
import { Card, Loader } from '..';

import styles from './Cards.module.scss';

interface IProps {
  cardsData: ICatsState;
}

export const Cards = ({ cardsData }: IProps) => (
  <div className={styles.cards}>
    {cardsData.isLoaded ? (
      cardsData.results.map((cat) => <Card key={cat.id} cardData={cat} />)
    ) : (
      <Loader />
    )}
  </div>
);
