import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <section className='notfound'>
      <main className='notfound-content'>
        <h1 className='notfound-content-title'>Page not found :(</h1>
        <img
          className='notfound-content-image'
          src='/notfoundlemon.png'
          alt='Page not found lemon logo'
        />
      </main>
    </section>
  );
};

export default NotFound;
