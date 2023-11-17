import './Cart.css';
import { useState, useEffect } from 'react';
import { getMenuById } from '../../data/data';
import { useParams } from 'react-router-dom';

const CartPage = () => {
  const [menu, setMenu] = useState(null);
  let { dishId } = useParams();
  useEffect(() => {
    setMenu(getMenuById(dishId));
    console.log(menu);
  }, []);

  return <section className='cart'></section>;
};

export default CartPage;
