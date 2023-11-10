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
    description: '',
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
    description: '',
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
    description: '',
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
