import React from "react";
import styles from "./OrderDetail.module.styl";

function OrderDetail(props) {
  const { order } = props;
  return order ? (
    <div data-testid="order-detail" className={styles.detailContainer}>
      <section>
        <div>
          <div></div>
          <p>{order?.status}</p>
        </div>
        <div>
          <button>edit</button>
          <button>close</button>
        </div>
      </section>
      <section>
        <div>
          <p>Customer name:</p>
          <p>{order?.client}</p>
        </div>
        <div>
          <p>Table:</p>
          <p>{order?.table}</p>
        </div>
      </section>
      <section>
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
      </section>
    </div>
  ) : (
    <div className={styles.detailContainer}>
      <button>+</button>
      <p>Create new order</p>
    </div>
  );
}

export default OrderDetail;
