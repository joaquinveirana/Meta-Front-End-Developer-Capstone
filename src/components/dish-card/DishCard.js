import './DishCard.css';

const DishCard = ({
  imgPath,
  imgAlt,
  title,
  subtitle,
  price,
  description,
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
      <div>
        <h2>{title}</h2>
        {subtitle && <h2>{subtitle}</h2>}
        <data class='money' value={price}>
          ${price}
        </data>
      </div>
      <p>{description}</p>
    </article>
  );
};

export default DishCard;
