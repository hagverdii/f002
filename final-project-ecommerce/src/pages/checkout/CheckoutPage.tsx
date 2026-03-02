import React from "react";
import "./checkoutPage.css";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cartSlice";

const CheckoutPage: React.FC = () => {
  const items = useSelector((state) => selectCartItems(state));
  const total = useSelector((state) => selectCartTotal(state));
  const subtotal = total;
  const shipping = total > 0 ? 20 : 0;
  const grandTotal = subtotal + shipping;

  return (
    <div className='checkout'>
      <div className='checkout-header'>
        <h1>Checkout</h1>
        <p>Complete your order with a few quick details.</p>
      </div>

      <div className='checkout-grid'>
        <form className='checkout-form'>
          <h2 className='checkout-section-title'>Billing Details</h2>
          <div className='checkout-field'>
            <label htmlFor='firstName'>First Name</label>
            <input id='firstName' type='text' placeholder='Jane' />
          </div>
          <div className='checkout-field'>
            <label htmlFor='companyName'>Company Name</label>
            <input id='companyName' type='text' placeholder='Optional' />
          </div>
          <div className='checkout-field'>
            <label htmlFor='streetAddress'>Street Address</label>
            <input id='streetAddress' type='text' placeholder='123 Main St' />
          </div>
          <div className='checkout-field'>
            <label htmlFor='apartment'>Apartment, floor, etc. (optional)</label>
            <input id='apartment' type='text' placeholder='Apt 4B' />
          </div>
          <div className='checkout-field'>
            <label htmlFor='city'>Town / City</label>
            <input id='city' type='text' placeholder='New York' />
          </div>
          <div className='checkout-field'>
            <label htmlFor='phone'>Phone Number</label>
            <input id='phone' type='tel' placeholder='(555) 123-4567' />
          </div>
          <div className='checkout-field'>
            <label htmlFor='email'>Email Address</label>
            <input id='email' type='email' placeholder='you@email.com' />
          </div>
          <label className='checkout-checkbox'>
            <input type='checkbox' />
            <span>Save this information for next time</span>
          </label>
        </form>

        <aside className='checkout-summary'>
          <div className='checkout-summary-card'>
            <h2 className='checkout-section-title'>Your Order</h2>
            <div className='checkout-items'>
              {items.length === 0 ? (
                <div className='checkout-empty'>Your cart is empty.</div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className='checkout-item'>
                    <div className='checkout-item-image'>
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className='checkout-item-info'>
                      <span className='checkout-item-name'>{item.name}</span>
                      <span className='checkout-item-qty'>Qty: {item.quantity}</span>
                    </div>
                    <span className='checkout-item-price'>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))
              )}
            </div>

            <div className='checkout-summary-row'>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className='checkout-summary-row'>
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className='checkout-summary-row total'>
              <span>Total</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>

            <div className='checkout-payment'>
              <label>
                <input type='radio' name='payment' defaultChecked />
                <span>Bank</span>
              </label>
              <label>
                <input type='radio' name='payment' />
                <span>Cash on delivery</span>
              </label>
            </div>

            <div className='checkout-coupon'>
              <input type='text' placeholder='Coupon Code' />
              <button type='button'>Apply Coupon</button>
            </div>

            <button type='button' className='checkout-place-order'>
              Place Order
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CheckoutPage;
