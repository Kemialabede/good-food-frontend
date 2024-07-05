import React from 'react';
import Image from 'next/image';
import styles from './dashboard.module.scss';

const MostOrdered = () => {
  return (
    <div className={styles.mostOrdered}>
      <h2 className={styles.chartContainer__textContainer__heading}>
        Most Ordered Food
      </h2>
      <p
        className={styles.chartContainer__chartHeader}
        style={{ marginTop: 'unset' }}
      >
        Adipiscing elit, sed do eiusmod tempor
      </p>
      <div className={styles.mostOrdered__list}>
        <div className={styles.mostOrdered__listItem}>
          <div>
            <Image
              src="/images/fresh-salad.png"
              width={28}
              height={28}
              objectFit="cover"
              alt="fresh-salad"
            />
            <p>Fresh Salad Bowl</p>
          </div>
          <p className={styles.mostOrdered__listItem__price}>IDR 45.000</p>
        </div>
        <div className={styles.mostOrdered__listItem}>
          <div>
            <Image
              src="/images/fresh-salad.png"
              width={28}
              height={28}
              objectFit="cover"
              alt="fresh-salad"
            />
            <p>Chicken Noodles</p>
          </div>
          <p className={styles.mostOrdered__listItem__price}>IDR 75.000</p>
        </div>
        <div className={styles.mostOrdered__listItem}>
          <div>
            <Image
              src="/images/fresh-salad.png"
              width={28}
              height={28}
              objectFit="cover"
              alt="fresh-salad"
            />
            <p>Smoothie Fruits</p>
          </div>
          <p className={styles.mostOrdered__listItem__price}>IDR 45.000</p>
        </div>
        <div className={styles.mostOrdered__listItem}>
          <div>
            <Image
              src="/images/fresh-salad.png"
              width={28}
              height={28}
              objectFit="cover"
              alt="fresh-salad"
            />
            <p>Hot Chicken Wings</p>
          </div>
          <p className={styles.mostOrdered__listItem__price}>IDR 45.000</p>
        </div>
      </div>
    </div>
  );
};

export default MostOrdered;
