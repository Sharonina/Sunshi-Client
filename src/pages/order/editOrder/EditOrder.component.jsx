import React from "react";
import styles from "./EditOrder.module.styl";
import Button from "@/components/button/Button.component";
import { Product } from "@/pages/product/Product.component";

function EditOrder(props) {
  const { orderProducts, setOrderProducts } = props;
  const { client, setClient } = React.useState("");
  const { table, setTable } = React.useState("");

  return (
    <div data-testid="order-detail" className={styles.detailContainer}>
      <div className={styles.detailStatus}>
        <h2>New Order</h2>
        <div className={styles.orderTools}>
          <Button type="primary" size="md" isHovereable={true}>
            Cancel
          </Button>
        </div>
      </div>
      <div className={styles.detailHeader}>
        <span>Customer Name:</span>
        <input
          type="text"
          value={client}
          onChange={(e) => setClient(e.target.value)}
        />
        <span>Table:</span>
        <input
          type="text"
          value={table}
          onChange={(e) => setTable(e.target.value)}
        />
      </div>
      <div className={styles.detailContent}>
        <h3>Order:</h3>
        <ul>
          {orderProducts.map((product) => (
            <li key={product._id}>
              <div>
                <span>{product.name}</span>
                <span>
                  {product.quantity} x {product.price}
                </span>
              </div>
              <span>{product.quantity}</span>
              <span>$ {product.price * (product.quantity || 1)}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.detailTotal}>
        <span>Total: </span>
      </div>
      <div className={styles.detailBottom}>
        <div className={styles.button}>
          <Button type="primary" size="xl" isHovereable={true}>
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditOrder;
