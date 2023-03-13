import React, { useContext } from "react";
import styles from "./EditOrder.module.styl";
import Button from "@/components/button/Button.component";
import { useApi } from "@/hooks/useApi/useApi";
import { routes } from "@/utils/constants/routes";
import { UtilsContext } from "@/context/UtilsContext";

function EditOrder(props) {
  const {
    orderProducts,
    setOrderProducts,
    setEditMode,
    setSelectedOrder,
    selectedOrder,
    cleanOrderProducts,
  } = props;
  const [client, setClient] = React.useState(selectedOrder?.client || "");
  const [table, setTable] = React.useState(selectedOrder?.table || "");
  const { postWithAuthorization, putWithAuthorization } = useApi();
  const { setSnackbar, setShowSnackbar } = useContext(UtilsContext);
  const editOrCreate = selectedOrder ? "Edit" : "Create";

  function getTotalPrice() {
    return orderProducts.reduce(
      (total, product) => total + product.price * (product.quantity || 1),
      0
    );
  }

  async function handleCreateOrder() {
    const orderProductsInBackendFormat = orderProducts.flatMap((product) => {
      const productArray = [];
      for (let i = 0; i < (product?.quantity || 1); i++) {
        productArray.push(product._id);
      }
      return productArray;
    });

    const orderBody = {
      client,
      table,
      products: orderProductsInBackendFormat,
    };

    const result =
      editOrCreate === "Create"
        ? await postWithAuthorization(routes.ORDERS, orderBody)
        : await putWithAuthorization(
            `${routes.ORDERS}/${selectedOrder?._id}`,
            orderBody
          );

    if (result) {
      setSnackbar({
        message: `Order ${editOrCreate.toLocaleLowerCase()} successfully`,
        severity: "success",
      });
      setShowSnackbar(true);
      setEditMode(false);
      setSelectedOrder(result[0]);
      cleanOrderProducts();
    }
  }

  function handleCancelEdit() {
    setEditMode(false);
  }

  return (
    <div data-testid="order-edit" className={styles.detailContainer}>
      <div className={styles.detailStatus}>
        <h2>Order</h2>
        <div className={styles.orderTools}>
          <Button
            type="primary"
            size="md"
            isHovereable={true}
            onClick={handleCancelEdit}
          />
        </div>
      </div>
      <div className={styles.detailHeader}>
        <div className={styles.client}>
          <span>Customer Name:</span>
          <input
            type="text"
            value={client}
            onChange={(e) => setClient(e.target.value)}
          />
        </div>

        <div className={styles.table}>
          <span>Table:</span>
          <input
            type="number"
            value={table}
            onChange={(e) => setTable(Number(e.target.value))}
          />
        </div>
      </div>
      <div className={styles.detailContent}>
        <p>Products:</p>
        <ul>
          {orderProducts.map((product) => (
            <li key={product._id} className={styles.productItem}>
              <div className={styles.productItemDescription}>
                <span className={styles.productName}>{product.name}</span>
                <span className={styles.productQuantity}>
                  {product.quantity} x {product.price}
                </span>
              </div>
              <div className={styles.quantity}>
                <Button onClick={() => setOrderProducts(product, "remove")}>
                  -
                </Button>
                <span>{product.quantity}</span>
                <Button onClick={() => setOrderProducts(product, "add")}>
                  +
                </Button>
              </div>
              <span>$ {product.price * (product.quantity || 1)}</span>
              <button
                className={styles.deleteProduct}
                onClick={() => setOrderProducts(product, "deleteItem")}
              ></button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.detailTotal}>
        <span>Total: $ {getTotalPrice()}</span>
      </div>
      <div className={styles.detailBottom}>
        <div className={styles.button}>
          <Button
            type="primary"
            size="xl"
            isHovereable={true}
            onClick={handleCreateOrder}
          >
            {editOrCreate}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditOrder;
