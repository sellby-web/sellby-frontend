import React from "react";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
  placeholder?: string;
};

function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <div className={styles.searchBar}>
      <img src="/icons/SearchIcon.svg" alt="Search" className={styles.searchIcon} />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.searchInput}
      />
    </div>
  );
}

export default SearchBar;
