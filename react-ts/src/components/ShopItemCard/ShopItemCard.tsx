import type { FC } from "react";
import type { ShopItemCardModel } from "./shopItemCard.model";
import "./shopItemCard.css";

const ShopItemCard: FC<ShopItemCardModel> = ({ imageSrc, category, title, colors, rating, price }) => {
  return (
    <div className='shop-card'>
      <img className='shop-card__image' src={imageSrc} alt='shop item' />

      <p className='shop-card__category'>{category}</p>
      <h3 className='shop-card__title'>{title}</h3>

      <div className='shop-card__colors'>
        {colors?.map((color) => (
          <button key={color} className='shop-card__color' style={{ backgroundColor: color }} />
        ))}
      </div>

      <div className='shop-card__footer'>
        <span className='shop-card__rating'>⭐ {rating}</span>
        <h4 className='shop-card__price'>${price}</h4>
      </div>
    </div>
  );
};

export default ShopItemCard;
