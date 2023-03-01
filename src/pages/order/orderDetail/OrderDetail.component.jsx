import React from "react";
import styles from "./OrderDetail.module.styl";

function OrderDetail(props) {
  const { order } = props;
  return order ? (
    <div data-testid="order-detail" className={styles.orderSelectedContainer}>
      <div className={styles.orderHeader}>
        <div className={styles.status}>
          <div></div>
          <p>{order?.status}</p>
        </div>
        <div className={styles.optionButtons}>
          <button>edit</button>
          <button>close</button>
        </div>
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
          {order?.products.map((product) => {
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
        <p>status bar here</p>
      </div>
      <div className={styles.changeStatusBtn}>
        <button>Cancel order</button>
      </div>
    </div>
  ) : (
    <div className={styles.orderDetailContainer}>
      <button className={styles.rightNewOrder}>+</button>
      <p className={styles.rightMessage}>
        Create new order or Select one to see details
      </p>
    </div>
  );
}

export default OrderDetail;
