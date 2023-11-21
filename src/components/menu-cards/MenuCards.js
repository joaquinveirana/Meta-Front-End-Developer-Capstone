import './MenuCards.css';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../App';
import DishCard from '../dish-card/DishCard';
import Button from '../button/Button';
import { getMenuById } from '../../data/data';

const MenuCards = ({ specialsList, title, isSpecial }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <section className='specials'>
      <main className='specials-content'>
        <div className='specials-content-title'>
          <h1 className='specials-content-title-text'>{title}</h1>
          {isSpecial && (
            <Button
              buttonType='primary'
              path='/menu'
              innerText='Online Menu'
              fillParent={false}
              useShadow={true}
            />
          )}
        </div>
        <div className='specials-content-cards'>
          {specialsList.map((special) => {
            return (
              <DishCard
                key={special.id}
                id={special.id}
                imgPath={special.imgPath}
                title={special.title}
                subtitle={special.subtitle}
                price={special.price}
                description={special.description}
                rating={special.rating}
                ratingCount={special.ratingCount}
                addToCartCallback={(id) => {
                  const dishAddedToCart = getMenuById(id);
                  if (dishAddedToCart) {
                    const sameItemInCart = cartItems.find(
                      (item) => item.id === dishAddedToCart.id
                    );
                    if (sameItemInCart) sameItemInCart['quantity'] += 1;
                    else {
                      dishAddedToCart['quantity'] = 1;
                      cartItems.push(dishAddedToCart);
                    }
                    setCartItems(cartItems);
                    navigate('/cart');
                  }
                }}
              />
            );
          })}
        </div>
      </main>
    </section>
  );
};

export default MenuCards;
