import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import CartProvider from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ChakraProvider>
);
