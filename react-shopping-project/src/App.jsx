import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Header from "./components/Header/Header";
import { CartProvider } from "./context/CartContext";
import { ItemsProvider } from "./context/ItemsContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <ItemsProvider>
                <CartProvider>
                  <MainPage />
                </CartProvider>
              </ItemsProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
