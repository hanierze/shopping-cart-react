import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";
import Store from "./components/Store";
import CartContextProvider from "./context/CartContextProvider";

import ProductsContextProvider from "./context/ProductsContextProvider";

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/" element={<Store />} />
          <Route path="/products" element={<Store />} />
          <Route path="/cart" element={<ShopCart />} />
        </Routes>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
