import React, { useContext } from "react";
import styles from "./Order.module.styl";
import { useApi } from "@/hooks/useApi/useApi";
import { routes } from "@/utils/constants/routes";
import InteractiveCategory from "@/components/interactiveCategory/InteractiveCategory.component";
import OrderDetail from "./orderDetail/OrderDetail.component";
import { UserContext } from "@/context/UserContext";
import OrderProducts from "./orderProducts/OrderProducts.component";
import EditOrder from "./editOrder/EditOrder.component";

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
  const [editMode, setEditMode] = React.useState(false);
  const [orderProducts, setOrderProducts] = React.useState([]);

  const { getWithAuthorization } = useApi();
  const {
    userInfo: { admin, role },
  } = useContext(UserContext);

  function handleSelectedCategory(category) {
    if (selectedCategory === category) return setSelectedCategory(undefined);
    return setSelectedCategory(category);
  }

  function getQuantity(orderProduct, action) {
    if (action === "deleteItem") return 0;
    if (action === "add") return (orderProduct?.quantity || 1) + 1;
    return (orderProduct?.quantity || 1) - 1;
  }

  function handleSetOrderProducts(product, action) {
    const productIndex = orderProducts.findIndex(
      (orderProduct) => orderProduct._id === product._id
    );

    if (productIndex === -1) {
      return setOrderProducts([...orderProducts, { ...product, quantity: 1 }]);
    }
    const newOrderProducts = orderProducts.map((orderProduct) => {
      if (orderProduct._id === product._id) {
        const quantity = getQuantity(orderProduct, action);

        if (quantity === 0) return null;
        return {
          ...orderProduct,
          quantity,
        };
      }
      return orderProduct;
    });
    const filteredOrderProducts = newOrderProducts.filter(
      (productItem) => productItem !== null
    );
    setOrderProducts(filteredOrderProducts);
  }

  const cleanOrderProducts = () => {
    setOrderProducts([]);
  };

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
    if (editMode === false) {
      const getOrdersByCategory = async () => {
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
      getOrdersByCategory();
    } else {
      setOrderProducts(selectedOrder?.products || []);
    }
  }, [editMode, selectedOrder]);

  return (
    <div data-testid="order-page" className={styles.orders}>
      <section className="left">
        {editMode ? (
          <OrderProducts setOrderProducts={handleSetOrderProducts} />
        ) : (
          <InteractiveCategory
            categories={orderItems}
            selectedCategory={selectedCategory}
            setSelectedCategory={handleSelectedCategory}
            categoryBtnColor="orders"
          />
        )}
      </section>
      <section className="right">
        {editMode ? (
          <EditOrder
            orderProducts={orderProducts}
            setOrderProducts={handleSetOrderProducts}
            setEditMode={setEditMode}
            setSelectedCategory={setSelectedOrder}
            selectedOrder={selectedOrder}
            cleanOrderProducts={cleanOrderProducts}
            setSelectedOrder={setSelectedOrder}
          />
        ) : (
          <OrderDetail
            order={selectedOrder}
            userRole={role}
            setEditMode={setEditMode}
            setSelectedOrder={setSelectedOrder}
          />
        )}
      </section>
    </div>
  );
};

export default Order;
