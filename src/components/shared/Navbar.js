import React, { useContext } from "react";
import { Link } from "react-router-dom";

import cart from "../../assets/icons/cart.svg";

//Styles
import styles from "./Navbar.module.css";
//context
import { CartContext } from "../../context/CartContextProvider";

const Navbar = () => {
  const { state, dispath } = useContext(CartContext);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link to="/products"> Products </Link>
        <div className={styles.iconContainer}>
          <Link to="/cart">
            <img src={cart} alt="cart" />
          </Link>
          <span> {state.itemCounter} </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
