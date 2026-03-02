import React from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartIsOpen,
  selectCartTotal,
  closeCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} from "../../store/cartSlice";
import { Link } from "react-router-dom";

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
const CartBagIcon = () => (
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
    <circle cx='9' cy='21' r='1' />
    <circle cx='20' cy='21' r='1' />
    <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6' />
  </svg>
);

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => selectCartItems(state));
  const isOpen = useSelector((state) => selectCartIsOpen(state));
  const total = useSelector((state) => selectCartTotal(state));
  const totalQty = items.reduce((t, i) => t + i.quantity, 0);

  return (
    <>
      <div
        className={`cart-backdrop ${isOpen ? "cart-backdrop--visible" : ""}`}
        onClick={() => dispatch(closeCart())}
      />

      <aside className={`cart-drawer ${isOpen ? "cart-drawer--open" : ""}`}>
        <div className='cart-header'>
          <h2 className='cart-title'>My Cart ({totalQty})</h2>
          <button className='cart-close-btn' onClick={() => dispatch(closeCart())} aria-label='Close cart'>
            <CloseIcon />
          </button>
        </div>

        {items.length === 0 ? (
          <div className='cart-empty'>
            <CartBagIcon />
            <p className='cart-empty-text'>Your cart is empty</p>
            <button className='cart-empty-cta' onClick={() => dispatch(closeCart())}>
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <ul className='cart-items'>
              {items.map((item) => (
                <li key={item.id} className='cart-item'>
                  <div className='cart-item-image-wrap'>
                    <img src={item.image} alt={item.name} className='cart-item-image' />
                  </div>

                  <div className='cart-item-info'>
                    <p className='cart-item-name'>{item.name}</p>
                    <p className='cart-item-price'>${(item.price * item.quantity).toFixed(2)}</p>
                    <div className='cart-item-qty'>
                      <button
                        className='cart-qty-btn'
                        onClick={() => dispatch(decrementQuantity(item.id))}
                        aria-label='Decrease'
                      >
                        −
                      </button>
                      <span className='cart-qty-value'>{item.quantity}</span>
                      <button
                        className='cart-qty-btn'
                        onClick={() => dispatch(incrementQuantity(item.id))}
                        aria-label='Increase'
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    className='cart-item-remove'
                    onClick={() => dispatch(removeFromCart(item.id))}
                    aria-label='Remove'
                  >
                    <TrashIcon />
                  </button>
                </li>
              ))}
            </ul>

            <div className='cart-footer'>
              <div className='cart-total'>
                <span className='cart-total-label'>Total</span>
                <span className='cart-total-value'>${total.toFixed(2)}</span>
              </div>
              <Link className='cart-checkout-btn' to='/checkout' onClick={() => dispatch(closeCart())}>
                Proceed to Checkout
              </Link>
              <button className='cart-clear-btn' onClick={() => dispatch(clearCart())}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
};

export default Cart;
