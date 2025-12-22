import { createContext, useState } from "react";

export const ItemsContext = createContext(null);

export const ItemsProvider = ({ children }) => {
  const [shopItemsList, setShopItemsList] = useState([
    { id: 0, title: "Laptop", category: "Elektronika", price: 1200, image: null },
    { id: 1, title: "Telefon", category: "Elektronika", price: 800, image: null },
    { id: 2, title: "Kitab", category: "Təhsil", price: 25, image: null },
    { id: 3, title: "Kamera", category: "Elektronika", price: 500, image: null },
  ]);

  return (
    <ItemsContext.Provider value={{ shopItemsList, setShopItemsList }}>{children}</ItemsContext.Provider>
  );
};
