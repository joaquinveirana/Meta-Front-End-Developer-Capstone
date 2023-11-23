import './Cart.css';
import { useContext, useEffect, useState } from 'react';
import Button from '../../components/button/Button';
import CartCard from '../../components/cart-card/CartCard';
import { CartContext } from '../../App';

const CartPage = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  // Cart Management - remove items
  const removeItemFromCart = (id) => {
    const itemToRemove = cartItems.find((item) => item.id === id);

    if (itemToRemove) {
      if (itemToRemove.quantity === 1)
        cartItems.splice(cartItems.indexOf(itemToRemove), 1);
      else itemToRemove.quantity -= 1;

      setCartItems(JSON.parse(JSON.stringify(cartItems)));
    }
  };

  // Calculation function
  const shippingCost = cartItems.length !== 0 ? 5.65 : 0;
  const calculateSubtotal = () => {
    return (
      Math.round(
        cartItems.reduce((acum, item) => {
          return acum + parseFloat(item.price) * item.quantity;
        }, 0) * 100
      ) / 100
    );
  };
  const calculateDiscount = () => {
    return Math.round(calculateSubtotal() * 3.5) / 100;
  };
  const calculateTotal = () => {
    return (
      Math.round(
        (calculateSubtotal() + shippingCost - calculateDiscount()) * 100
      ) / 100
    );
  };

  return (
    <section className='cart'>
      <div className='cart-content'>
        <div className='cart-content-title'>
          <h1 className='cart-content-title-text'>My Cart</h1>
        </div>
        <div className='cart-content-items'>
          <div
            className={`cart-content-items-list ${
              cartItems.length === 0 && 'cart-content-items-list-empty'
            }`}
          >
            {cartItems.length === 0 && (
              <p className='cart-content-items-list-empty-message'>
                Your cart is currently empty
              </p>
            )}
            {cartItems.map((cartItem, index) => {
              return (
                <CartCard
                  key={index}
                  id={cartItem.id}
                  imgPath={cartItem.imgPath}
                  productName={cartItem.title}
                  price={cartItem.price}
                  quantity={cartItem.quantity}
                  removeItemFromCart={(id) => removeItemFromCart(id)}
                ></CartCard>
              );
            })}
          </div>
          <div className='cart-content-items-checkout'>
            <div className='cart-content-items-checkout-price'>
              <h2>Subtotal:</h2>
              <h2>${calculateSubtotal()}</h2>
            </div>
            <div className='cart-content-items-checkout-price'>
              <h2>Shipping:</h2>
              <h2>${shippingCost}</h2>
            </div>
            <div className='cart-content-items-checkout-price'>
              <h2>Loyalty Discount:</h2>
              <h2>${calculateDiscount()}</h2>
            </div>
            <div className='cart-content-items-checkout-price'>
              <h2>Total:</h2>
              <h2>${calculateTotal()}</h2>
            </div>
            <div className='cart-content-items-checkout-price'>
              <Button
                buttonType='secondary'
                path='#'
                innerText='Checkout'
                fillParent={true}
                useShadow={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
