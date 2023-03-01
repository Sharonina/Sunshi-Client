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
      <div>
        <div>
          <p>Customer name:</p>
          <p>{order?.client}</p>
        </div>
        <div>
          <p>Table:</p>
          <p>{order?.table}</p>
        </div>
      </div>
      <div>
        <p>Order:</p>
        <ul>
          {order?.products.map((product) => {
            const totalPrice = product.price * product.quantity;
            return (
              <li key={product._id}>
                <div>
                  <span>{product.name}</span>
                  <span>
                    {product.quantity} x {product.price}
                  </span>
                </div>
                <span>{product.quantity}</span>
                <span>$ {totalPrice}</span>
              </li>
            );
          })}
        </ul>
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
