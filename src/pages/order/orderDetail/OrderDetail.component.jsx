import React from "react";
import styles from "./OrderDetail.module.styl";
import StatusBarComponent from "@/components/statusBar/StatusBar.component";
import Button from "@/components/button/Button.component";
import { userRoles } from "@/utils/constants/authentication";
import { orderStatuses } from "@/utils/constants/orders";
import { useApi } from "@/hooks/useApi/useApi";
import { routes } from "@/utils/constants/routes";

function OrderDetail(props) {
  const { order, userRole, setEditMode, setSelectedOrder } = props;
  const { putWithAuthorization } = useApi();

  function handleEditOrder() {
    setEditMode(true);
  }

  function handleDeselectedOrder() {
    setSelectedOrder(undefined);
  }

  function getTimeToPrepare() {
    const entryTime = new Date(order?.date_entry || "");
    const processedTime = new Date(order?.date_processed || "");
    const timeToPrepare = processedTime.getTime() - entryTime.getTime();
    const timeToPrepareInMinutes = timeToPrepare / 1000 / 60;
    return timeToPrepareInMinutes;
  }

  async function changeOrderStatus(status) {
    const api = `${routes.ORDERS}/${order?._id}/status`;
    const result = await putWithAuthorization(api, { status });
    if (result) {
      setSelectedOrder(result[0]);
    }
  }

  const OrderButton = () => {
    if (order?.status?.toLowerCase() === orderStatuses.PENDING) {
      if (userRole === userRoles.WAITER || userRole === userRoles.ADMIN) {
        return (
          <Button
            type="cancel"
            size="xl"
            isHovereable={true}
            onClick={() => changeOrderStatus("Canceled")}
          >
            Cancel
          </Button>
        );
      } else if (userRole === userRoles.CHEF) {
        return (
          <Button
            type="primary size"
            size="xl"
            isHovereable={true}
            onClick={() => changeOrderStatus("Delivering")}
          >
            Ready to deliver
          </Button>
        );
      }
    }
    if (order?.status?.toLowerCase() === orderStatuses.DELIVERING) {
      if (userRole === userRoles.WAITER || userRole === userRoles.ADMIN) {
        return (
          <Button
            type="primary"
            size="xl"
            isHovereable={true}
            onClick={() => changeOrderStatus("Delivered")}
          >
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
          order?.status.toLowerCase() === orderStatuses.PENDING && (
            <div className={styles.optionButtons}>
              <button
                onClick={() => handleEditOrder()}
                className={styles.editButton}
              ></button>
              <button
                onClick={() => changeOrderStatus("Canceled")}
                className={styles.deleteButton}
              ></button>
            </div>
          )}
        <button
          onClick={() => handleDeselectedOrder()}
          className={styles.closeButton}
        ></button>
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
        <p>Products:</p>
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
      <div className={styles.totalOrder}>
        <span>Total: </span>
      </div>
      <div className={styles.statusBarContainer}>
        <StatusBarComponent
          steps={["Pending", "Delivering", "Delivered"]}
          currentStep={order?.status}
        />
      </div>
      <div className={styles.changeStatusBtn}>
        <OrderButton />
        {order?.status?.toLowerCase() === orderStatuses.DELIVERED && (
          <span>
            Processed order in: {getTimeToPrepare().toFixed(0)} minutes
          </span>
        )}

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
      <button
        onClick={() => setEditMode(true)}
        className={styles.createMessage}
      >
        Create new order
      </button>
      <p className={styles.rightMessage}>or select one to see details</p>
    </div>
  );
}

export default OrderDetail;
