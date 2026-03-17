import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";
import authReducer from "./authSlice";

const loadState = () => {
  try {
    return {
      cart: {
        items: JSON.parse(localStorage.getItem("cart_items") || "[]"),
        isOpen: false,
      },
      wishlist: {
        items: JSON.parse(localStorage.getItem("wishlist_items") || "[]"),
        isOpen: false,
      },
    };
  } catch {
    return undefined;
  }
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  const { cart, wishlist } = store.getState();
  localStorage.setItem("cart_items", JSON.stringify(cart.items));
  localStorage.setItem("wishlist_items", JSON.stringify(wishlist.items));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
