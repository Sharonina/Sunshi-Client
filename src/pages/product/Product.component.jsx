import React, { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import styles from "./Product.module.styl";
import InteractiveCategory from "@/components/interactive category/InteractiveCategory.component";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(undefined);
  const products = [
    {
      category: "Food",
      products: [
        {
          name: "Sunshi 1",
          /* price: 100, */
          image: "https://picsum.photos/200",
        },
        {
          name: "Sunshi 2",
          /* price: 100, */
          image: "https://picsum.photos/200",
        },
        {
          name: "Sunshi 3",
          /* price: 100, */
          image: "https://picsum.photos/200",
        },
        {
          name: "Sunshi 4",
          /* price: 100, */
          image: "https://picsum.photos/200",
        },
        {
          name: "Sunshi 5",
          /* price: 100, */
          image: "https://picsum.photos/200",
        },
      ],
    },
    {
      category: "Drinks",
      products: [
        {
          name: "Drink 1",
          /* price: 100, */
          image: "https://picsum.photos/200",
        },
        {
          name: "Drink 2",
          /* price: 100, */
          image: "https://picsum.photos/200",
        },
        {
          name: "Drink 3",
          /* price: 100, */
          image: "https://picsum.photos/200",
        },
        {
          name: "Drink 4",
          /* price: 100, */
          image: "https://picsum.photos/200",
        },
        {
          name: "Drink 5",
          /* price: 100, */
          image: "https://picsum.photos/200",
        },
      ],
    },
  ];
  return (
    <div data-testid="product-page" className={styles.products}>
      <section className="left">
        <InteractiveCategory
          categories={products}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </section>
      <section className="right">right</section>
    </div>
  );
};

export default Product;
