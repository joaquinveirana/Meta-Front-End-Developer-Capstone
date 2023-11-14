import DishCard from '../dish-card/DishCard';
import Button from '../button/Button';
import './Specials.css';

const Specials = ({ specialsList }) => {
  return (
    <section className='specials'>
      <main className='specials-content'>
        <div className='specials-content-title'>
          <h1 className='specials-content-title-text'>Specials of this week</h1>
          <Button
            buttonType='primary'
            path='/menu'
            innerText='Online Menu'
            fillParent={false}
          />
        </div>
        <div className='specials-content-cards'>
          {specialsList.map((special) => {
            return (
              <DishCard
                imgPath={special.imgPath}
                title={special.title}
                subtitle={special.subtitle}
                price={special.price}
                description={special.description}
                rating={special.rating}
                ratingCount={special.ratingCount}
                addToCartCallback={() => special.addToCartCallback()}
                orderCallback={() => special.orderCallback()}
              />
            );
          })}
        </div>
      </main>
    </section>
  );
};

export default Specials;
