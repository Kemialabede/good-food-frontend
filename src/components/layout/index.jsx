import React from 'react';
import Sidebar from '@/components/sideBar';
import Navbar from '@/components/navbar';
import styles from './layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout_container}>
      <div className={styles.layout_container__sidebar}>
        <Sidebar />
      </div>
      <div className={styles.layout_container__content}>
        <div>
          <Navbar />
        </div>
        <div className={styles.layout_children}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
