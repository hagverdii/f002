import React from "react";
import "./wishlist.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectWishlistItems,
  selectWishlistIsOpen,
  closeWishlist,
  removeFromWishlist,
  clearWishlist,
} from "../../store/wishlistSlice";
import { addToCart, openCart } from "../../store/cartSlice";

const CloseIcon = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <line x1='18' y1='6' x2='6' y2='18' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </svg>
);
const TrashIcon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <polyline points='3 6 5 6 21 6' />
    <path d='M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6' />
    <path d='M10 11v6' />
    <path d='M14 11v6' />
    <path d='M9 6V4h6v2' />
  </svg>
);
const CartIcon = () => (
  <svg
    width='14'
    height='14'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='9' cy='21' r='1' />
    <circle cx='20' cy='21' r='1' />
    <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6' />
  </svg>
);
const HeartEmptyIcon = () => (
  <svg
    width='56'
    height='56'
    viewBox='0 0 24 24'
    fill='none'
    stroke='#ccc'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
  </svg>
);

const Wishlist: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => selectWishlistItems(state));
  const isOpen = useSelector((state) => selectWishlistIsOpen(state));

  const handleMoveToCart = (item: (typeof items)[0]) => {
    dispatch(addToCart({ id: item.id, name: item.name, image: item.image, price: item.price }));
    dispatch(removeFromWishlist(item.id));
    dispatch(closeWishlist());
    dispatch(openCart());
  };

  return (
    <>
      <div
        className={`wishlist-backdrop ${isOpen ? "wishlist-backdrop--visible" : ""}`}
        onClick={() => dispatch(closeWishlist())}
      />

      <aside className={`wishlist-drawer ${isOpen ? "wishlist-drawer--open" : ""}`}>
        <div className='wishlist-header'>
          <h2 className='wishlist-title'>Wishlist ({items.length})</h2>
          <button
            className='wishlist-close-btn'
            onClick={() => dispatch(closeWishlist())}
            aria-label='Close wishlist'
          >
            <CloseIcon />
          </button>
        </div>

        {items.length === 0 ? (
          <div className='wishlist-empty'>
            <HeartEmptyIcon />
            <p className='wishlist-empty-text'>Your wishlist is empty</p>
            <button className='wishlist-empty-cta' onClick={() => dispatch(closeWishlist())}>
              Discover Products
            </button>
          </div>
        ) : (
          <>
            <ul className='wishlist-items'>
              {items.map((item) => (
                <li key={item.id} className='wishlist-item'>
                  <div className='wishlist-item-image-wrap'>
                    <img src={item.image} alt={item.name} className='wishlist-item-image' />
                    {item.discount && <span className='wishlist-item-badge'>-{item.discount}%</span>}
                  </div>

                  <div className='wishlist-item-info'>
                    <p className='wishlist-item-name'>{item.name}</p>
                    <div className='wishlist-item-pricing'>
                      <span className='wishlist-item-price'>${item.price}</span>
                      {item.originalPrice && (
                        <span className='wishlist-item-original'>${item.originalPrice}</span>
                      )}
                    </div>
                    <button className='wishlist-item-cart-btn' onClick={() => handleMoveToCart(item)}>
                      <CartIcon /> Add to Cart
                    </button>
                  </div>

                  <button
                    className='wishlist-item-remove'
                    onClick={() => dispatch(removeFromWishlist(item.id))}
                    aria-label='Remove from wishlist'
                  >
                    <TrashIcon />
                  </button>
                </li>
              ))}
            </ul>

            <div className='wishlist-footer'>
              <button className='wishlist-clear-btn' onClick={() => dispatch(clearWishlist())}>
                Clear Wishlist
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
};

export default Wishlist;
