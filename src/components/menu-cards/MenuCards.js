import DishCard from '../dish-card/DishCard';
import Button from '../button/Button';
import './MenuCards.css';

const MenuCards = ({ specialsList, title, isSpecial }) => {
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
                id={special.id}
                imgPath={special.imgPath}
                title={special.title}
                subtitle={special.subtitle}
                price={special.price}
                description={special.description}
                rating={special.rating}
                ratingCount={special.ratingCount}
                addToCartCallback={(id) => {}}
                orderCallback={(id) => {}}
              />
            );
          })}
        </div>
      </main>
    </section>
  );
};

export default MenuCards;
