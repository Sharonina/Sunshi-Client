import React from "react";
import styles from "./ProductDetail.module.styl";

function ProductDetail(props) {
  const { product } = props;
  return product ? (
    <div className={styles.detailContainer}>
      <figure>
        <img src={product?.image} />
      </figure>
      <div>
        <span>{product?.name}</span>
        <span>{`$ ${product?.price}`}</span>
      </div>
    </div>
  ) : (
    <div className={styles.detailContainer}>
      <span>Select a product</span>
    </div>
  );
}

export default ProductDetail;
