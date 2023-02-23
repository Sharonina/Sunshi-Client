import React from "react";
import styles from "./InteractiveCategory.module.styl";

function InteractiveCategory(props) {
  const { categories, selectedCategory, setSelectedCategory } = props;
  return (
    <div>
      {categories.map((item) => (
        <div key={item.category}>
          <h2 onClick={() => setSelectedCategory(item.category)}>
            {item.category}
          </h2>
          {selectedCategory === item.category && (
            <div className={styles.categoryGrid}>
              {item.products.map((product) => (
                <div key={product.name}>
                  <h3>{product.name}</h3>
                  <img src={product.image} alt={product.name} />
                  {/* <p>{product.price}</p> */}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default InteractiveCategory;
