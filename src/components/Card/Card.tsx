import { useState } from 'react';

import { ICatObj } from '../../@types/state';

import styles from './Card.module.scss';

interface IProps {
  cardData: ICatObj;
}

type CardStates = 'idle' | 'hover' | 'click-heart' | 'hover-heart';

export const Card = ({ cardData }: IProps) => {
  const { url } = cardData;

  const [cardState, setCardState] = useState<CardStates>('idle');

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setCardState('hover')}
      onMouseLeave={() => setCardState('idle')}
    >
      <span className={styles.bg} />
      <img className={styles.image} src={url} alt='cat' />
      <button
        className={styles.heart}
        onMouseEnter={() => setCardState('hover-heart')}
        onClick={() => setCardState('click-heart')}
      >
        {cardState === 'hover' && (
          <svg width='48' height='48' viewBox='0 0 48 48' fill='none'>
            <g>
              <path
                d='M33 6C29.52 6 26.18 7.62 24 10.18C21.82 7.62 18.48 6 15 6C8.84 6 4 10.84 4 17C4 24.56 10.8 30.72 21.1 40.08L24 42.7L26.9 40.06C37.2 30.72 44 24.56 44 17C44 10.84 39.16 6 33 6ZM24.2 37.1L24 37.3L23.8 37.1C14.28 28.48 8 22.78 8 17C8 13 11 10 15 10C18.08 10 21.08 11.98 22.14 14.72H25.88C26.92 11.98 29.92 10 33 10C37 10 40 13 40 17C40 22.78 33.72 28.48 24.2 37.1Z'
                fill='#F24E1E'
              />
            </g>
            <defs>
              <clipPath>
                <rect width='48' height='48' fill='white' />
              </clipPath>
            </defs>
          </svg>
        )}
        {cardState === 'hover-heart' && (
          <svg width='48' height='48' viewBox='0 0 48 48' fill='none'>
            <g>
              <path
                d='M24 42.7L21.1 40.06C10.8 30.72 4 24.56 4 17C4 10.84 8.84 6 15 6C18.48 6 21.82 7.62 24 10.18C26.18 7.62 29.52 6 33 6C39.16 6 44 10.84 44 17C44 24.56 37.2 30.72 26.9 40.08L24 42.7Z'
                fill='#F24E1E'
              />
            </g>
            <defs>
              <clipPath>
                <rect width='48' height='48' fill='white' />
              </clipPath>
            </defs>
          </svg>
        )}
        {cardState === 'click-heart' && (
          <svg width='48' height='48' viewBox='0 0 48 48' fill='none'>
            <g>
              <path
                d='M24 42.7L21.1 40.06C10.8 30.72 4 24.56 4 17C4 10.84 8.84 6 15 6C18.48 6 21.82 7.62 24 10.18C26.18 7.62 29.52 6 33 6C39.16 6 44 10.84 44 17C44 24.56 37.2 30.72 26.9 40.08L24 42.7Z'
                fill='#FF3A00'
              />
            </g>
            <defs>
              <clipPath>
                <rect width='48' height='48' fill='white' />
              </clipPath>
            </defs>
          </svg>
        )}
      </button>
    </div>
  );
};
