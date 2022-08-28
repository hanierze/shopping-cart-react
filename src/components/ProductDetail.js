import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context/ProductsContextProvider";
import { useParams } from "react-router-dom";

//styles
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const products = useContext(ProductsContext);
  const { id } = useParams();
  const product = products.find((item) => item.id === +id);
  const { image, title, description, price, category } = product;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt={title} />
      <div>
        <p>{title}</p>
        <p>{description}</p>
        <p>{category}</p>
        <div>
          <span>{price}$</span>
          <button>Go to product</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
