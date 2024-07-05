import React from 'react';
import Revenue from './revenue';
import OrderTime from './orderTime';
import styles from './dashboard.module.scss';
import MostOrdered from './mostOrdered';
import Order from './order';
import Rating from './rating';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h2 className={styles.dashboard__heading}>Dashboard</h2>
      <div className={styles.dashboard__firstSection}>
        <div
          className={styles.dashboard__revenue}
          style={{ marginTop: 'unset' }}
        >
          <Revenue />
        </div>
        <div className={styles.dashboard__doughnut}>
          <OrderTime />
        </div>
      </div>
      <div className={styles.dashboard__secondSection}>
        <div className={styles.dashboard__secondSection__item}>
          <Rating />
        </div>
        <div className={styles.dashboard__secondSection__item}>
          <MostOrdered />
        </div>
        <div className={styles.dashboard__secondSection__item}>
          <Order />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
