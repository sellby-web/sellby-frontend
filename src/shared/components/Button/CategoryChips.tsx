import React from "react";
import { useState } from "react";
import styles from "./CategoryChips.module.css";

type categoryProps = {
  categories: string[];
  selectedCategory: string | null;
  onToggle: (category: string) => void;
};

function CategoryChips({
  categories,
  selectedCategory,
  onToggle,
}: categoryProps) {
  return (
    <div className={styles.chipsContainer}>
      {categories.map((category) => {
        const isSelected = selectedCategory.includes(category);
        return (
          <buttton
            key={category}
            type="button"
            onClick={() => onToggle(category)}
            className={isSelected ? styles.selectedChip : styles.chip}
          >
            {category}
            {isSelected && <span className={styles.closeIcon}>x</span>}
          </buttton>
        );
      })}
    </div>
  );
}

export default CategoryChips;
