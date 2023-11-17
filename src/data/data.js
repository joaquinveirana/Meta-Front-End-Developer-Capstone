const menuList = [
  {
    id: 0,
    imgPath: 'pexels-dana-tentis-1213710.jpg',
    imgAlt:
      'From Dana Tentis: https://www.pexels.com/es-es/foto/ensalada-de-verduras-con-pan-de-trigo-al-lado-1213710/',
    title: 'Greek Salad',
    subtitle: '',
    price: '12.99',
    description:
      'Experience Greece on a plate with our Greek Salad—crisp romaine, juicy tomatoes, cucumbers, Kalamata olives, and crumbled feta, drizzled with our signature olive oil, lemon, and oregano dressing.',
    rating: 0,
    ratingCount: 0,
  },
  {
    id: 1,
    imgPath: 'pexels-shameel-mukkath-5639411.jpg',
    imgAlt:
      'From Shameel mukkath: https://www.pexels.com/es-es/foto/pan-comida-tomates-tabla-de-cortar-5639411/',
    title: 'Bruschetta',
    subtitle: '',
    price: '8.99',
    description:
      'Embark on a culinary journey to Italy with our Bruschetta. Savor the crunch of crispy artisanal bread adorned with the finest, sun-ripened tomatoes, aromatic basil, and the subtle kick of garlic, all generously drizzled with the richness of extra virgin olive oil.',
    rating: 4.5,
    ratingCount: 14,
  },
  {
    id: 2,
    imgPath: 'konstantinas-ladauskas-nLFfes9_OS8-unsplash.jpg',
    imgAlt:
      'From Konstantinas Ladauskas: https://unsplash.com/es/fotos/queso-rebanado-en-plato-de-ceramica-blanca-nLFfes9_OS8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
    title: 'Lemon Dessert',
    subtitle: '',
    price: '7.25',
    description:
      'Indulge in the perfect balance of tart and sweet with our Lemon Pie Dessert. Experience the velvety smoothness of our lemon-infused filling nestled in a flaky, buttery crust.',
    rating: 5,
    ratingCount: 3,
  },
  {
    id: 3,
    imgPath: 'pexels-roman-odintsov-4871275.jpg',
    imgAlt:
      'From ROMAN ODINTSOV: https://www.pexels.com/es-es/foto/comida-hojas-sopa-plato-4871275/',
    title: 'Tomato Soup',
    subtitle: '',
    price: '6.50',
    description:
      'A comforting blend of ripe tomatoes, aromatic herbs, and a touch of spices, creating a rich and soothing bowl of warmth.',
    rating: 0,
    ratingCount: 0,
  },
  {
    id: 4,
    imgPath: 'pexels-engin-akyurt-1438672.jpg',
    imgAlt:
      'From Engin Akyurt: https://www.pexels.com/es-es/foto/fotografia-de-alimentos-de-pasta-1438672/',
    title: 'Creamy Garlic Pasta',
    subtitle: '',
    price: '10.25',
    description:
      'A delectable symphony of flavors featuring al dente pasta enveloped in a velvety garlic-infused cream sauce. Savor the richness of Parmesan cheese as it blends seamlessly with the robust taste of sautéed garlic.',
    rating: 4.5,
    ratingCount: 7,
  },
  {
    id: 5,
    imgPath: 'pexels-vlad-chețan-1752506.jpg',
    imgAlt:
      'From Vlad Chețan: https://www.pexels.com/es-es/foto/foto-de-primer-plano-de-helado-en-la-placa-1752506/',
    title: 'Pistachio Ice Cream',
    subtitle: '',
    price: '5.25',
    description:
      "Enjoy our Pistachio Ice Cream—creamy, nutty, and simply delicious. It's a delightful treat that brings smiles with every scoop.",
    rating: 0,
    ratingCount: 0,
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

export const getSpecials = () => {
  return menuList.slice(0, 3);
};

export const getMenu = () => {
  return menuList;
};

export const getMenuById = (id) => {
  return menuList.find((menu) => menu.id.toString() === id);
};

export const getTestimonials = () => {
  return testimonialsList;
};
