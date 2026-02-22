import type { FC } from "react";
import type { ShopItemCardModel } from "./shopItemCard.model";
import "./shopItemCard.css";

const ShopItemCard: FC<ShopItemCardModel> = ({ images, category, title, rating, price }) => {
  return (
    <div className='shop-card'>
      {images && images[0] && <img className='shop-card__image' src={images[0]} alt='shop item' />}

      <p className='shop-card__category'>{category}</p>
      <h3 className='shop-card__title'>{title}</h3>

      <div className='shop-card__footer'>
        <span className='shop-card__rating'>⭐ {rating}</span>
        <h4 className='shop-card__price'>${price}</h4>
      </div>
    </div>
  );
};

export default ShopItemCard;
