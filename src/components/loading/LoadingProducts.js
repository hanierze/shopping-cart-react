import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import React from "react";
import styles from "./LoadingProducts.module.css";

const LoadingProducts = () => {
  return Array(8)
    .fill({})
    .map((x, index) => {
      return (
        <div className={styles.container} key={index}>
          <p style={{ textAlign: "center" }}>
            <Skeleton height={200} width={130} />
          </p>
          <div style={{ marginLeft: "10px" }}>
            <Skeleton height={20} width={100} />
            <p style={{ marginTop: "10px" }}>
              <Skeleton height={20} width={80} />
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <p>
              <Skeleton height={20} width={50} />
            </p>
            <p>
              <Skeleton height={20} width={50} />
            </p>
          </div>
        </div>
      );
    });
};

export default LoadingProducts;
