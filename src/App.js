import './App.css';
import { useState, useEffect } from 'react';
import Hero from './components/hero/Hero';
import Testimonials from './components/testimonials/Testimonials';
import MenuCards from './components/menu-cards/MenuCards';
import About from './components/about/About';

import { getSpecials, getTestimonials } from './data/data';

function App() {
  const [specialsList, setSpecialsList] = useState([]);
  const [testimonialsList, setTestimonialsList] = useState([]);

  useEffect(() => {
    setTestimonialsList(getTestimonials());
    setSpecialsList(getSpecials());
  }, []);

  return (
    <main>
      <Hero />
      <MenuCards
        specialsList={specialsList}
        title={'Specials of this week'}
        isSpecial={true}
      />
      <Testimonials testimonialsList={testimonialsList} />
      <About />
    </main>
  );
}

export default App;
