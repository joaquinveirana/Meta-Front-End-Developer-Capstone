import Hero from '../../components/hero/Hero';
import Testimonials from '../../components/testimonials/Testimonials';
import Specials from '../../components/specials/Specials';
import './Main.css';
import About from '../../components/about/About';

const specialsList = [
  {
    imgPath: 'pexels-dana-tentis-1213710.jpg',
    imgAlt:
      'From Dana Tentis: https://www.pexels.com/es-es/foto/ensalada-de-verduras-con-pan-de-trigo-al-lado-1213710/',
    title: 'Greek Salad',
    subtitle: '',
    price: 12.99,
    description:
      'Experience Greece on a plate with our Greek Salad—crisp romaine, juicy tomatoes, cucumbers, Kalamata olives, and crumbled feta, drizzled with our signature olive oil, lemon, and oregano dressing.',
    rating: 0,
    ratingCount: 0,
    addToCartCallback: () => {
      console.log('addtocartcallback');
    },
    orderCallback: () => {
      console.log('ordercallback');
    },
  },
  {
    imgPath: 'pexels-shameel-mukkath-5639411.jpg',
    imgAlt:
      'From Shameel mukkath: https://www.pexels.com/es-es/foto/pan-comida-tomates-tabla-de-cortar-5639411/',
    title: 'Bruschetta',
    subtitle: '',
    price: 8.99,
    description:
      'Embark on a culinary journey to Italy with our Bruschetta. Savor the crunch of crispy artisanal bread adorned with the finest, sun-ripened tomatoes, aromatic basil, and the subtle kick of garlic, all generously drizzled with the richness of extra virgin olive oil.',
    rating: 4.5,
    ratingCount: 14,
    addToCartCallback: () => {
      console.log('addtocartcallback');
    },
    orderCallback: () => {
      console.log('ordercallback');
    },
  },
  {
    imgPath: 'konstantinas-ladauskas-nLFfes9_OS8-unsplash.jpg',
    imgAlt:
      'From Konstantinas Ladauskas: https://unsplash.com/es/fotos/queso-rebanado-en-plato-de-ceramica-blanca-nLFfes9_OS8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
    title: 'Lemon Dessert',
    subtitle: '',
    price: 7.25,
    description:
      'Indulge in the perfect balance of tart and sweet with our Lemon Pie Dessert. Experience the velvety smoothness of our lemon-infused filling nestled in a flaky, buttery crust.',
    rating: 5,
    ratingCount: 3,
    addToCartCallback: () => {
      console.log('addtocartcallback');
    },
    orderCallback: () => {
      console.log('ordercallback');
    },
  },
];

const testimonialsList = [
  {
    imgPath: 'testimonial1.jpg',
    name: 'Lisa',
    description:
      'Little Lemon is where casual meets flavor explosion. Love the grilled options.',
    rating: 5,
  },
  {
    imgPath: 'testimonial2.jpg',
    name: 'Richard',
    description:
      'Little Lemon keeps it simple and delicious. Bonus: cozy vibes that make you feel right at home.',
    rating: 4.5,
  },
  {
    imgPath: 'testimonial3.jpg',
    name: 'Phillip',
    description:
      'The flavors are great! The lemon-infused chicken is a game-changer',
    rating: 4,
  },
  {
    imgPath: 'testimonial4.jpg',
    name: 'Kelly',
    description: 'Amazing! I really recommend the Greek Salad',
    rating: 5,
  },
];

const Main = () => {
  return (
    <main>
      <Hero />
      <Specials specialsList={specialsList} />
      <Testimonials testimonialsList={testimonialsList} />
      <About />
    </main>
  );
};

export default Main;
