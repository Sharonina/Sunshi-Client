import React from "react";
import styles from "./Product.module.styl";
import { routes } from "@/utils/constants/routes";
import { useApi } from "@/hooks/useApi/useApi";
import InteractiveCategory from "@/components/interactive category/InteractiveCategory.component";
import ProductDetail from "./productDetail/productDetail.component";

const ProductCategories = {
  Food: 1,
  Drinks: 2,
  Desserts: 3,
  Sides: 4,
};

const Products = () => {
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
      </div>
    ));
    return {
      category: item.category,
      products,
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
    <div data-testid="product-page" className={styles.products}>
      <section className="left">
        <InteractiveCategory
          categories={productItems}
          selectedCategory={selectedCategory}
          setSelectedCategory={handleSelectedCategory}
        />
      </section>
      <section className="right">
        <ProductDetail product={selectedProduct} />
      </section>
    </div>
  );
};

export default Products;
