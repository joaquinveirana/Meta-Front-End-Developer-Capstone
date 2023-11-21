import './CartCard.css';

import { AiOutlineClose } from 'react-icons/ai';

const CartCard = ({
  id,
  imgPath,
  productName,
  price,
  quantity,
  removeItemFromCart,
}) => {
  return (
    <article className='cartcard'>
      <div className='cartcard-item'>
        <img
          className='cartcard-item-image'
          src={imgPath}
          alt={`${productName} item`}
        />
      </div>
      <div className='cartcard-item-data'>
        <div className='cartcard-item-data-header'>
          <div className='cartcard-item-data-header-titles'>
            <h1 className='cartcard-item-data-title-texts-1'>{productName}</h1>
            <h1 className='cartcard-item-data-price-texts-2'>${price}</h1>
          </div>
          <AiOutlineClose
            className='cartcard-item-remove-icon'
            onClick={() => removeItemFromCart(id)}
          />
        </div>
        <p className='cartcard-item-data-quantity'>Quantity: {quantity}</p>
      </div>
    </article>
  );
};

export default CartCard;
