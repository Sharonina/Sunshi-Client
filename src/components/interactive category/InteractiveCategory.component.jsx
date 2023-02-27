import React from "react";
import clsx from "clsx";
import styles from "./InteractiveCategory.module.styl";

function InteractiveCategory(props) {
  const { categories, selectedCategory, setSelectedCategory } = props;
  return (
    <div
      data-testid="interactive-category"
      className={styles.categoriesContainer}
    >
      {categories.map((categoryObject) => (
        <div
          key={categoryObject.category}
          className={clsx(
            styles.categoryContainer,
            selectedCategory === categoryObject.category &&
              styles.categorySelected
          )}
        >
          <div
            className={styles.categoryBtn}
            onClick={() => setSelectedCategory(categoryObject.category)}
          >
            <h2>{categoryObject.category}</h2>
          </div>

          {selectedCategory === categoryObject.category && (
            <div className={styles.categoryGrid}>
              {categoryObject.items.map((item) => item)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default InteractiveCategory;
