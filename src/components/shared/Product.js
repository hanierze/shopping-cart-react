import React, { createContext, useContext, useEffect, useState } from "react";

import { CartContext } from "../../context/CartContextProvider";

//style
import styles from "./Product.module.css";

//icon
import trash from "../../assets/icons/trash.svg";

import { Link } from "react-router-dom";
import { isInCart, quantityCount, shorten } from "../../helper/function";

const Product = ({ product }) => {
  const { state, dispatch } = useContext(CartContext);

  const { title, price, image, id } = product;
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="products" />
      <div>
        <div>
          <p className={styles.title}> {shorten(title)} </p>
          <p> ${price} </p>
        </div>
        <div className={styles.linkContainer}>
          <Link to={`/products/${id}`}> detail </Link>
          <div className={styles.buttonsContainer}>
            {quantityCount(state, id) === 1 && (
              <button
                className={styles.smallButton}
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: product })
                }
              >
                <img src={trash} alt="trash" />
              </button>
            )}
            {quantityCount(state, id) > 1 && (
              <button
                className={styles.smallButton}
                onClick={() => dispatch({ type: "DECREASE", payload: product })}
              >
                -
              </button>
            )}
            {quantityCount(state, id) > 0 && (
              <span className={styles.counter}>{quantityCount(state, id)}</span>
            )}
            {isInCart(state, id) ? (
              <button
                className={styles.smallButton}
                onClick={() => dispatch({ type: "INCREASE", payload: product })}
              >
                +
              </button>
            ) : (
              <button
                onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
              >
                add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
