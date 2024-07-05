import React, { useState, useEffect } from 'react';
import styles from './sideBar.module.scss';
import { menuItems } from './menuItems';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Image from 'next/image';

const Sidebar = () => {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState('/');

  useEffect(() => {
    setActiveTab(router.pathname);
  }, [router.pathname]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    router.push(tab);
  };

  return (
    <div className={styles.sidebar_container}>
      <div className={styles.sidebar_container__logo}>
        <Image
          src="/icons/Logo.svg"
          alt="Logo"
          width={101}
          height={24}
          layout="intrinsic"
        />
      </div>
      <ul className={styles.sidebar_items}>
        {menuItems.map((item, index) => (
          <li key={index} className={styles.menuItem}>
            <div className={styles.menuTitle}>{item.title}</div>
            <ul className={styles.subMenu}>
              {item.subItems.map((subItem, subIndex) => (
                <li
                  key={subIndex}
                  className={classNames(
                    styles.subMenu__item,
                    activeTab === subItem.link ? styles.active : ''
                  )}
                  onClick={() => handleTabClick(subItem.link)}
                >
                  {subItem?.image}
                  <p>{subItem?.item}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
