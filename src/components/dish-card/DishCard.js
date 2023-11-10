import './DishCard.css';
import Button from '../button/Button';
import ReactStars from 'react-stars';

const DishCard = ({
  imgPath,
  imgAlt,
  title,
  subtitle,
  price,
  description,
  rating,
  ratingCount,
  addToCartCallback,
  orderCallback,
}) => {
  console.log(rating);
  return (
    <article className='dishcard'>
      <img
        className='dishcard-image'
        src={imgPath}
        alt={`${title} in card`}
        title={imgAlt}
      />
      <div className='dishcard-content'>
        <div>
          <h2 className='dishcard-content-title'>{title}</h2>
          {subtitle && (
            <h2 className='dishcard-content-subtitle'>{subtitle}</h2>
          )}
          <div className='dishcard-content-price'>
            <data className='money dishcard-content-price-number' value={price}>
              ${price}
            </data>
            {ratingCount ? (
              <div className='money dishcard-content-price-rating'>
                <ReactStars
                  color2={'#ffd700'}
                  edit={false}
                  size={18}
                  value={rating}
                />
                <span className='dishcard-content-rating-count'>
                  ({ratingCount})
                </span>
              </div>
            ) : (
              <></>
            )}
          </div>
          <p className='dishcard-content-description'>{description}</p>
        </div>

        <div className='dishcard-content-buttons'>
          <Button
            buttonType='primary'
            path='/reservation'
            innerText='Order Now'
            fillParent={true}
          ></Button>
          <Button
            buttonType='secondary'
            path='/reservation'
            innerText='Add to cart'
            fillParent={true}
          ></Button>
        </div>
      </div>
    </article>
  );
};

export default DishCard;
