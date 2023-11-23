import React, { useState, useEffect } from 'react';
import './Main.css';
import Hero from '../../components/hero/Hero';
import Testimonials from '../../components/testimonials/Testimonials';
import MenuCards from '../../components/menu-cards/MenuCards';
import About from '../../components/about/About';
import { getSpecials, getTestimonials } from '../../data/data';

const MainPage = () => {
  const [specialsList, setSpecialsList] = useState([]);
  const [testimonialsList, setTestimonialsList] = useState([]);

  useEffect(() => {
    setTestimonialsList(getTestimonials());
    setSpecialsList(getSpecials());
  }, []);

  return (
    <section className='main'>
      <Hero />
      <MenuCards
        specialsList={specialsList}
        title={'Specials of this week'}
        isSpecial={true}
      />
      <Testimonials testimonialsList={testimonialsList} />
      <About />
    </section>
  );
};

export default MainPage;
