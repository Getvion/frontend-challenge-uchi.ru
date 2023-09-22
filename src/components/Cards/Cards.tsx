import { ICatsState } from '../../@types/state';
import { Card } from '..';

import styles from './Cards.module.scss';

interface IProps {
  cardsData: ICatsState;
}

export const Cards = ({ cardsData }: IProps) => (
  <div className={styles.cards}>
    {cardsData.results.map((cat) => (
      <Card key={cat.id + cat.url} cardData={cat} />
    ))}
  </div>
);
