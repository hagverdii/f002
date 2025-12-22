import { useContext } from "react";
import "./shopItem.css";
import { CartContext } from "../../context/CartContext";

export default function ShopItem({ id, title = "Laptop", category = "Elektronika", price = 1200, image }) {
  const { setCartItemsList } = useContext(CartContext);

  const handleAddToCart = () => {
    setCartItemsList((prev) => {
      const existingItem = prev.find((item) => item.id === id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === id ? { ...item, count: item.count + 1, price: price * (item.count + 1) } : item
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

  return (
    <div className='shop-item'>
      <div className={`image-wrapper ${!image ? "placeholder" : ""}`}>
        {image && <img src={image} alt={title} />}
      </div>

      <div className='item-body'>
        <div className='item-header'>
          <h3 className='item-title'>{title}</h3>
          <span className='item-category'>{category}</span>
        </div>

        <div className='item-price'>{price} ₼</div>

        <button className='add-button' onClick={handleAddToCart}>
          <span className='plus'>+</span>
          Səbətə əlavə et
        </button>
      </div>
    </div>
  );
}
