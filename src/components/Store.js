import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context/ProductsContextProvider";
import Product from "./shared/Product";

//styles
import styles from "./Store.module.css";

import LoadingProducts from "./loading/LoadingProducts";

const Store = () => {
  const { products, isLoading } = useContext(ProductsContext);

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <div className={styles.lodingContainer}>
          <LoadingProducts />
        </div>
      ) : (
        <div className={styles.container}>
          {products.map((item) => (
            <Product key={item.id} product={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Store;
