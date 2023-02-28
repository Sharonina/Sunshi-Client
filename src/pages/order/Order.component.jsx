import React from "react";
import styles from "./Order.module.styl";
import { useApi } from "@/hooks/useApi/useApi";
import { routes } from "@/utils/constants/routes";
import InteractiveCategory from "@/components/interactive category/InteractiveCategory.component";

const OrderStatus = {
  Pending: 1,
  Delivering: 2,
  Delivered: 3,
  Canceled: 4,
};

const Order = () => {
  const [ordersByCategory, setOrdersByCategory] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState(undefined);
  const [selectedOrder, setSelectedOrder] = React.useState(undefined);
  const { getWithAuthorization } = useApi();

  function handleSelectedCategory(category) {
    if (selectedCategory === category) return setSelectedCategory(undefined);
    return setSelectedCategory(category);
  }

  const orderItems = ordersByCategory.map((item) => {
    const orders = item.orders.map((order) => (
      <div
        className={styles.orderItem}
        key={order.client}
        onClick={() => setSelectedOrder(order)}
      >
        <div className={styles.orderStatus}>
          <p>{order.status}</p>
        </div>
        <p className={styles.orderTable}>{order.table}</p>
        <p className={styles.orderClient}>{order.client}</p>
      </div>
    ));
    return {
      category: item.category,
      items: orders,
    };
  });

  React.useEffect(() => {
    const getOrders = async () => {
      const orders = await getWithAuthorization(
        `${routes.ORDERS}?byCategory=true`
      );

      // Sort categories by priority
      orders.sort((a, b) => {
        const aIndex = OrderStatus[a.category];
        const bIndex = OrderStatus[b.category];
        return aIndex - bIndex;
      });
      setOrdersByCategory(orders);
    };
    getOrders();
  }, []);

  return (
    <div data-testid="order-page" className={styles.orders}>
      <section className="left">
        <InteractiveCategory
          categories={orderItems}
          selectedCategory={selectedCategory}
          setSelectedCategory={handleSelectedCategory}
        />
      </section>
      {/* <section className="right">
        <ProductDetail product={selectedProduct} />
      </section> */}
    </div>
  );
};

export default Order;
