import DishCard from '../dish-card/DishCard';
import './Specials.css';

const Specials = ({ specialsList }) => {
  return (
    <section className='specials'>
      <main className='specials-content'>
        <h1 className='specials-content-title'>Specials of this week</h1>
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
