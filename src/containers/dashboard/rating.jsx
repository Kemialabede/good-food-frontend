import React from 'react';
import styles from './dashboard.module.scss';
import CircularProgressBar from '@/components/circularProgressBar';

const Rating = () => {
  const ratings = [
    {
      percentage: 85,
      label: 'Hygiene',
      color: '#8261E0',
      size: 103,
    },
    {
      percentage: 85,
      label: 'Food Taste',
      color: '#F99C30',
      size: 188,
    },
    {
      percentage: 92,
      label: 'Packaging',
      color: '#2FBFDE',
      size: 121,
    },
  ];

  return (
    <div className={styles.rating_container}>
      <h2 className={styles.chartContainer__textContainer__heading}>
        Your Rating
      </h2>
      <p
        className={styles.chartContainer__chartHeader}
        style={{ marginTop: 'unset' }}
      >
        Lorem ipsum dolor sit amet, consectetur
      </p>
      <div className={styles.circles_container}>
        <div className={styles.grouped_circles}>
          <CircularProgressBar
            percentage={ratings[0].percentage}
            color={ratings[0].color}
            size={ratings[0].size}
            label={ratings[0].label}
          />
          <CircularProgressBar
            percentage={ratings[1].percentage}
            color={ratings[1].color}
            size={ratings[1].size}
            label={ratings[1].label}
            style={{ margin: '20px 0 0 -10px' }}
          />
        </div>
        <CircularProgressBar
          percentage={ratings[2].percentage}
          color={ratings[2].color}
          size={ratings[2].size}
          label={ratings[2].label}
        />
      </div>
    </div>
  );
};

export default Rating;
