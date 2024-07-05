import React from 'react';
import { IoSearch } from 'react-icons/io5';
import styles from './searchBar.module.scss';

const SearchBar = () => {
  return (
    <div className={styles.search_container}>
      <input />
      <IoSearch className={styles.search_container__icon} />
    </div>
  );
};

export default SearchBar;
