import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className='about'>
      <main className='about-content'>
        <aside className='about-content-information'>
          <h1 className='about-content-information-title'>Little Lemon</h1>
          <h2 className='about-content-information-subtitle'>Chicago</h2>
          <p className='about-content-information-description'>
            Based in Chicago, Illinois, Little Lemon is a family-owned
            Mediterranean restaurant, focused on traditional recipes served with
            a modern twist. The chefs draw inspiration from Italian, Greek, and
            Turkish culture and have a menu of 12–15 items that they rotate
            seasonally. The restaurant has a rustic and relaxed atmosphere with
            moderate prices, making it a popular place for a meal any time of
            the day.
          </p>

          <p className='about-content-information-description'>
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who
            moved to the United States to pursue their shared dream of owning a
            restaurant. To craft the menu, Mario relies on family recipes and
            his experience as a chef in Italy. Adrian does all the marketing for
            the restaurant and led the effort to expand the menu beyond classic
            Italian to incorporate additional cuisines from the Mediterranean
            region.
          </p>
        </aside>
        <aside className='about-content-image'>
          <img
            className='about-content-image-pic about-content-image-pic-1'
            src='chef.png'
            alt='Little Lemon Chef'
          />
          <img
            className='about-content-image-pic about-content-image-pic-2'
            src='chefs.png'
            alt='Little Lemon Chefs'
          />
        </aside>
      </main>
    </section>
  );
};

export default About;
