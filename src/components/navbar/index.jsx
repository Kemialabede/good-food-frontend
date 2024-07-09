import React, { useState } from 'react';
import SearchBar from '../searchBar';
import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosNotifications } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.nav_container}>
      <div className={styles.mobile_menu}>
        <GiHamburgerMenu />
      </div>

      <div className={styles.nav_container__search}>
        <SearchBar />
      </div>
      <div className={styles.nav_container__profile}>
        <div>
          <Image
            src="/icons/Emoticon.png"
            alt="emoticon"
            width={25}
            height={25}
          />
        </div>
        <div>
          <p>Delicious Burger</p>
          <IoIosArrowDown />
        </div>
        <IoIosNotifications />
        <div className={styles.hamburger}>
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
