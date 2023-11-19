import './Cart.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMenuById } from '../../data/data';

const CartPage = ({ addItemCallback, deleteItemCallback }) => {
  const [menu, setMenu] = useState(null);
  let { dishId } = useParams();
  useEffect(() => {
    const dishAddedToCart = getMenuById(dishId);
    if (dishAddedToCart) {
      addItemCallback();
      setMenu(getMenuById(dishId));
    }
  }, [dishId]);

  return <section className='cart'></section>;
};

export default CartPage;
