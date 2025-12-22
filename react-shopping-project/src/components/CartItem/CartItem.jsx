import { useContext } from "react";
import "./cartItem.css";
import { CartContext } from "../../context/CartContext";
import { ItemsContext } from "../../context/ItemsContext";

export default function CartItem({ id, title = "Laptop", price = 1200, count = 1 }) {
  const { setCartItemsList } = useContext(CartContext);
  const { shopItemsList } = useContext(ItemsContext);

  const onRemove = (idToDelete) => {
    setCartItemsList((prev) => prev.filter((item) => item.id !== idToDelete));
  };

  const onIncreaseCount = () => {
    setCartItemsList((prev) => {
      const existingItem = prev.find((item) => item.id === id);
      const originalPrice = shopItemsList.find((item) => item.id === id)?.price;

      if (existingItem) {
        return prev.map((item) =>
          item.id === id ? { ...item, count: item.count + 1, price: originalPrice * (item.count + 1) } : item
        );
      }

      return [
        ...prev,
        {
          id,
          title,
          price,
          count: 1,
        },
      ];
    });
  };

  const onDecreaseCount = () => {
    setCartItemsList((prev) => {
      const existingItem = prev.find((item) => item.id === id);
      const originalPrice = shopItemsList.find((item) => item.id === id)?.price;

      if (!existingItem) return prev;

      if (existingItem.count === 1) {
        // remove item if count goes to 0
        return prev.filter((item) => item.id !== id);
      }

      return prev.map((item) =>
        item.id === id
          ? {
              ...item,
              count: item.count - 1,
              price: originalPrice * (item.count - 1),
            }
          : item
      );
    });
  };

  return (
    <div className='cart-item'>
      <div className='cart-item-top'>
        <h4 className='cart-item-title'>{title}</h4>

        <button className='remove-btn' onClick={() => onRemove(id)}>
          🗑
        </button>
      </div>

      <div className='cart-item-bottom'>
        <div className='quantity-controls'>
          <button onClick={onDecreaseCount}>−</button>
          <span>{count}</span>
          <button onClick={onIncreaseCount}>+</button>
        </div>

        <div className='cart-item-price'>{price} ₼</div>
      </div>
    </div>
  );
}
