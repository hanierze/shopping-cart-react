import React, { createContext, useEffect, useState } from "react";
import { getProducts } from "../services/api";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => setProducts(await getProducts());

    fetchAPI();
    setIsLoading(false);
  }, []);

  return (
    <ProductsContext.Provider value={{ products, isLoading }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
