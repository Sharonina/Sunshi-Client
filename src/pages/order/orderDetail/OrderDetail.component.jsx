import React from "react";
import styles from "./OrderDetail.module.styl";
import StatusBarComponent from "@/components/statusBar/StatusBar.component";
import Button from "@/components/button/Button.component";
import { userRoles } from "@/utils/constants/authentication";
import { orderStatuses } from "@/utils/constants/orders";

function OrderDetail(props) {
  const { order, userRole, setEditMode } = props;

  const handleEditOrder = () => {
    setEditMode(true);
  };

  const OrderButton = () => {
    if (order?.status === orderStatuses.PENDING) {
      if (userRole === userRoles.WAITER || userRole === userRoles.ADMIN) {
        return (
          <Button type="cancel" size="xl" isHovereable={true}>
            Cancel
          </Button>
        );
      } else if (userRole === userRoles.CHEF) {
        return (
          <Button type="primary size" size="xl" isHovereable={true}>
            Ready to deliver
          </Button>
        );
      }
    }
    if (order?.status === orderStatuses.DELIVERING) {
      if (userRole === userRoles.WAITER || userRole === userRoles.ADMIN) {
        return (
          <Button type="primary" size="xl" isHovereable={true}>
            Deliver to table
          </Button>
        );
      }
    }
    return null;
  };

  return order ? (
    <div data-testid="order-detail" className={styles.orderSelectedContainer}>
      <div className={styles.orderHeader}>
        <div className={styles.status}>
          <div></div>
          <p>{order?.status}</p>
        </div>
        {(userRole === userRoles.WAITER || userRole === userRoles.ADMIN) &&
          order?.status === orderStatuses.PENDING && (
            <div className={styles.optionButtons}>
              <Button
                type="primary"
                size="md"
                isHovereable={true}
                onClick={handleEditOrder}
              >
                edit
              </Button>
              <button>close</button>
            </div>
          )}
      </div>
      <div className={styles.orderClientInfo}>
        <div>
          <p>Customer name:</p>
          <p className={styles.clientInfo}>{order?.client}</p>
        </div>
        <div>
          <p>Table:</p>
          <p className={styles.clientInfo}>{order?.table}</p>
        </div>
      </div>
      <div className={styles.orderItems}>
        <p>Order:</p>
        <ul>
          {order?.products?.map((product) => {
            const totalPrice = product.price * product.quantity;
            return (
              <li key={product._id}>
                <div>
                  <p className={styles.productName}>{product.name}</p>
                  <p className={styles.productXQuantity}>
                    {product.quantity} x {product.price}
                  </p>
                </div>
                <span className={styles.quantity}>{product.quantity}</span>
                <span className={styles.productTotal}>$ {totalPrice}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.statusBarContainer}>
        <StatusBarComponent
          steps={["Pending", "Delivering", "Delivered"]}
          currentStep={order?.status}
        />
      </div>
      <div className={styles.changeStatusBtn}>
        <OrderButton />
        {/* <button>Cancel order</button> */}
      </div>
    </div>
  ) : (
    <div className={styles.orderDetailContainer}>
      <button
        onClick={() => setEditMode(true)}
        className={styles.rightNewOrder}
      >
        +
      </button>
      {/* <Button
        type="primary"
        size="xl"
        isHovereable={true}
        onClick={() => setEditMode(true)}
      >
        +
      </Button> */}
      <p className={styles.rightMessage}>
        Create new order or Select one to see details
      </p>
    </div>
  );
}

export default OrderDetail;
