import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Header from "./components/Header/Header";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <CartProvider>
                <MainPage />
              </CartProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
