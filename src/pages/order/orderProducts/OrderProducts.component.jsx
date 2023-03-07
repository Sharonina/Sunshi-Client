import InteractiveCategory from "@/components/interactiveCategory/InteractiveCategory.component";
import { routes } from "@/utils/constants/routes";
import React from "react";
import styles from "./OrderProducts.module.styl";
import { useApi } from "@/hooks/useApi/useApi";
import Button from "@/components/button/Button.component";

const ProductCategories = {
  Food: 1,
  Drinks: 2,
  Desserts: 3,
  Sides: 4,
};

function OrderProducts(props) {
  const { setOrderProducts } = props;
  const [productsByCategory, setProductsByCategory] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState(undefined);
  const [selectedProduct, setSelectedProduct] = React.useState(undefined);
  const { getWithAuthorization } = useApi();

  function handleSelectedCategory(category) {
    if (selectedCategory === category) return setSelectedCategory(undefined);
    return setSelectedCategory(category);
  }

  const productItems = productsByCategory.map((item) => {
    const products = item.products.map((product) => (
      <div key={product.name} onClick={() => setSelectedProduct(product)}>
        <h3>{product.name}</h3>
        <figure>
          <img src={product.image} alt={product.name} />
        </figure>
        <div className={styles.addButton}>
          <Button
            type="primary"
            size="xl"
            onClick={() => setOrderProducts(product, "add")}
          >
            + Add to order
          </Button>
        </div>
      </div>
    ));
    return {
      category: item.category,
      items: products,
    };
  });

  React.useEffect(() => {
    const getProducts = async () => {
      const products = await getWithAuthorization(
        `${routes.PRODUCTS}?byCategory=true`
      );

      // Sort categories by priority
      products.sort((a, b) => {
        const aIndex = ProductCategories[a.category];
        const bIndex = ProductCategories[b.category];
        return aIndex - bIndex;
      });
      setProductsByCategory(products);
    };
    getProducts();
  }, []);

  return (
    <InteractiveCategory
      categories={productItems}
      selectedCategory={selectedCategory}
      setSelectedCategory={handleSelectedCategory}
    />
  );
}

export default OrderProducts;
