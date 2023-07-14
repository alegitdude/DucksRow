import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductsProvider } from "./context/productsContext.jsx";
import { FilterProvider } from "./context/filterContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";
import { UserProvider } from "./context/userContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>
);
