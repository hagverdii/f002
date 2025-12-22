import { useContext } from "react";
import "./cartItem.css";
import { CartContext } from "../../context/CartContext";

export default function CartItem({ id, title = "Laptop", price = 1200, count = 1, onIncrease, onDecrease }) {
  const { setCartItemsList } = useContext(CartContext);

  const onRemove = (idToDelete) => {
    setCartItemsList((prev) => prev.filter((item) => item.id !== idToDelete));
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
          <button onClick={onDecrease}>−</button>
          <span>{count}</span>
          <button onClick={onIncrease}>+</button>
        </div>

        <div className='cart-item-price'>{price} ₼</div>
      </div>
    </div>
  );
}
