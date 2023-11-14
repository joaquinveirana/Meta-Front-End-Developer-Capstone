import './TestimonialCard.css';
import ReactStars from 'react-stars';

const TestimonialCard = ({ profileImgPath, name, description, rating }) => {
  return (
    <article className='testimonialcard'>
      <div className='testimonialcard-header'>
        <img
          className='testimonialcard-image'
          src={profileImgPath}
          alt={`${name} profile`}
        />
        <div className='testimonialcard-header-title'>
          <h1 className='testimonialcard-header-title-text'>{name}</h1>
          <ReactStars
            color2={'#f4ce14'}
            edit={false}
            size={18}
            value={rating}
          />
        </div>
      </div>
      <div className='testimonialcard-review'>
        <div className='testimonialcard-review-text'>"{description}"</div>
      </div>
    </article>
  );
};

export default TestimonialCard;
