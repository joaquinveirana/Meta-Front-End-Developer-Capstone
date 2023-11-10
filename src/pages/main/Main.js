import Hero from '../../components/hero/Hero';
import Specials from '../../components/specials/Specials';
import './Main.css';

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

const Main = () => {
  return (
    <main>
      <Hero />
      <Specials specialsList={specialsList} />
    </main>
  );
};

export default Main;
