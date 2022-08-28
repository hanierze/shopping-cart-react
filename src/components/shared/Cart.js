import React, { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import { shorten } from "../../helper/function";

//styles
import styles from "./Cart.module.css";

//icon
import trash from "../../assets/icons/trash.svg";

const Cart = ({ product }) => {
  const { category, description, id, image, price, quantity, title } = product;

  const { dispatch } = useContext(CartContext);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <img className={styles.imgProduct} src={image} alt={shorten(title)} />
        <div className={styles.titleContainer}>
          <span style={{ marginRight: "10px" }}> {shorten(title)} </span>
          <span> {price} </span>
        </div>
        <span className={styles.quantity}> {quantity} </span>
        <div className={styles.buttonsContainer}>
          {quantity === 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: product })
              }
            >
              <img src={trash} alt="trash" />
            </button>
          )}
          {quantity > 1 && (
            <button
              className={styles.smallButton}
              onClick={() => dispatch({ type: "DECREASE", payload: product })}
            >
              -
            </button>
          )}
          <button
            className={styles.smallButton}
            onClick={() => dispatch({ type: "INCREASE", payload: product })}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
