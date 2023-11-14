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
  return (
    <article className='dishcard'>
      <img
        className='dishcard-image'
        src={imgPath}
        alt={`${title} in card`}
        title={imgAlt}
      />
      <div className='dishcard-content'>
        <div className='dishcard-content-info'>
          <h2 className='dishcard-content-info-title'>{title}</h2>
          {subtitle && (
            <h2 className='dishcard-content-info-subtitle'>{subtitle}</h2>
          )}
          <div className='dishcard-content-info-price'>
            <data
              className='money dishcard-content-info-price-number'
              value={price}
            >
              ${price}
            </data>
            <div className='money dishcard-content-info-price-rating'>
              {ratingCount ? (
                <>
                  <ReactStars
                    color2={'#f4ce14'}
                    edit={false}
                    size={18}
                    value={rating}
                  />
                  <span className='dishcard-content-info-rating-count'>
                    ({ratingCount})
                  </span>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <p className='dishcard-content-info-description' title={description}>
            {description}
          </p>
        </div>

        <div className='dishcard-content-buttons'>
          <Button
            buttonType='primary'
            path='/reservation'
            innerText='Order Now'
            fillParent={true}
          ></Button>
          <Button
            buttonType='light'
            path='/reservation'
            innerText='Add to cart	&#128722;'
            fillParent={true}
          ></Button>
        </div>
      </div>
    </article>
  );
};

export default DishCard;
