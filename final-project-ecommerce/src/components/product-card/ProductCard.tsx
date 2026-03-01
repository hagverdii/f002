import React from "react";
import "./ProductCard.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { toggleWishlist, selectIsWishlisted } from "../../store/wishlistSlice";

const HeartIcon = ({ filled }: { filled: boolean }) => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill={filled ? "#db4444" : "none"}
    stroke={filled ? "#db4444" : "currentColor"}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
  </svg>
);
const EyeIcon = () => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
    <circle cx='12' cy='12' r='3' />
  </svg>
);
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    width='14'
    height='14'
    viewBox='0 0 24 24'
    fill={filled ? "#FFAD33" : "none"}
    stroke='#FFAD33'
    strokeWidth='2'
  >
    <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
  </svg>
);

export interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  onQuickView?: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  image,
  price,
  originalPrice,
  discount,
  rating,
  reviewCount,
  onQuickView,
}) => {
  const dispatch = useDispatch();
  const wishlisted = useSelector(selectIsWishlisted(id));

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, image, price }));
  };

  const handleWishlist = () => {
    dispatch(toggleWishlist({ id, name, image, price, originalPrice, discount, rating, reviewCount }));
  };

  const filledStars = Math.round(rating);

  return (
    <div className='product-card'>
      <div className='product-card-image-wrap'>
        {discount && <span className='product-card-badge'>-{discount}%</span>}
        <img src={image} alt={name} className='product-card-image' />

        <button className='product-card-add-to-cart' onClick={handleAddToCart}>
          Add To Cart
        </button>

        <div className='product-card-actions'>
          <button
            className={`product-card-action-btn ${wishlisted ? "wishlisted" : ""}`}
            onClick={handleWishlist}
            aria-label='Wishlist'
          >
            <HeartIcon filled={wishlisted} />
          </button>
          <button
            className='product-card-action-btn'
            onClick={() => onQuickView?.(id)}
            aria-label='Quick view'
          >
            <EyeIcon />
          </button>
        </div>
      </div>

      <div className='product-card-info'>
        <h3 className='product-card-name'>{name}</h3>
        <div className='product-card-pricing'>
          <span className='product-card-price'>${price}</span>
          {originalPrice && <span className='product-card-original-price'>${originalPrice}</span>}
        </div>
        <div className='product-card-rating'>
          <div className='product-card-stars'>
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} filled={i < filledStars} />
            ))}
          </div>
          <span className='product-card-review-count'>({reviewCount})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
