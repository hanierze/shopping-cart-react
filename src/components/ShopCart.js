import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";
import Cart from "./shared/Cart";

//styles
import styles from "./ShopCart.module.css";

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);

  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        {state.selectedItems.map((item) => (
          <Cart product={item} key={item.id} />
        ))}
      </div>
      {state.itemCounter > 0 && (
        <div className={styles.total}>
          <p>total items : {state.itemCounter}</p>
          <p>total payments : ${state.total}</p>
          <div className={styles.buttons}>
            <button
              className={styles.checkout}
              onClick={() => dispatch({ type: "CHECKOUT", payload: state })}
            >
              Check out
            </button>
            <button
              className={styles.clear}
              onClick={() => dispatch({ type: "CLEAR", payload: state })}
            >
              Clear
            </button>
          </div>
        </div>
      )}

      {state.checkout && (
        <div className={styles.complete}>
          <h3>checked out successfully</h3>
          <Link to="/products">buy more ...</Link>
        </div>
      )}

      {!state.checkout && state.itemCounter === 0 && (
        <div className={styles.complete}>
          <h3>Want to buy?</h3>
          <Link to="/products">go back to shop</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
