import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItemsList, setCartItemsList] = useState([]);

  return <CartContext.Provider value={{ cartItemsList, setCartItemsList }}>{children}</CartContext.Provider>;
};
