import React from 'react';
import './Testimonials.css';
import TestimonialCard from '../testimonial-card/TestimonialCard';

const Testimonials = ({ testimonialsList }) => {
  return (
    <section className='testimonials'>
      <main className='testimonials-content'>
        <div className='testimonials-content-title'>
          <h1 className='testimonials-content-title-text'>
            What people think about us!
          </h1>
        </div>
        <div className='testimonials-content-cards'>
          {testimonialsList.map((testimonial, index) => {
            return (
              <TestimonialCard
                key={index}
                profileImgPath={testimonial.imgPath}
                name={testimonial.name}
                description={testimonial.description}
                rating={testimonial.rating}
              />
            );
          })}
        </div>
      </main>
    </section>
  );
};

export default Testimonials;
