import React from "react";
import clsx from "clsx";
import styles from "./InteractiveCategory.module.styl";

function InteractiveCategory(props) {
  const { categories, selectedCategory, setSelectedCategory } = props;
  return (
    <div className={styles.categoriesContainer}>
      {categories.map((item) => (
        <div
          key={item.category}
          className={clsx(
            styles.categoryContainer,
            selectedCategory === item.category && styles.categorySelected
          )}
        >
          <div
            className={styles.categoryBtn}
            onClick={() => setSelectedCategory(item.category)}
          >
            <h2>{item.category}</h2>
          </div>

          {selectedCategory === item.category && (
            <div className={styles.categoryGrid}>
              {item.products.map((product) => product)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default InteractiveCategory;
