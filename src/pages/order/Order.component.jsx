import React from "react";
import styles from "./Order.module.styl";

const OrderStatus = {
  Pending: 1,
  Delivering: 2,
  Delivered: 3,
  Cancel: 4,
};

const Order = () => {
  return (
    <div data-testid="order-page" className={styles.orders}>
      <section className="left">
        {/* <InteractiveCategory
          categories={productItems}
          selectedCategory={selectedCategory}
          setSelectedCategory={handleSelectedCategory}
        /> */}
      </section>
      {/* <section className="right">
        <ProductDetail product={selectedProduct} />
      </section> */}
    </div>
  );
};

export default Order;
