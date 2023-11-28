import React from 'react';
import './Hero.css';
import Button from '../button/Button';

const Hero = () => {
  return (
    <section className='hero'>
      <main className='hero-content'>
        <aside className='hero-content-information'>
          <h1 className='hero-content-information-title'>Little Lemon</h1>
          <h2 className='hero-content-information-subtitle'>Chicago</h2>
          <p className='hero-content-information-description'>
            Little Lemon is a family-owned Mediterranean restaurant that
            artfully combines timeless flavors with a modern twist. Passionate
            about preserving heritage, we infuse traditional recipes with
            contemporary flair, delivering heartwarming dishes that celebrate
            the essence of the Mediterranean.
          </p>
          <Button
            buttonType='secondary'
            path='/reservation'
            innerText='Reserve a Table'
            useShadow={false}
          ></Button>
        </aside>
        <aside
          className='hero-content-image'
          title='Photo of Pixabay: https://www.pexels.com/es-es/foto/ensalada-de-vegetales-434258/'
        >
          <img
            className='hero-content-image-pic'
            src='greek-salad.jpg'
            alt='Greek Salad in Hero Section'
          />
        </aside>
      </main>
    </section>
  );
};

export default Hero;
