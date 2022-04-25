import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'El padrino (1)',
  'La lista de Schindler (2)',
  'El Padrino. Parte II (3)',
  'Cadena perpetua (4)',
  'El Rey León (5)',
  'Forrest Gump (6)',
  'La vida es bella (7)',
  'Pulp Fiction (8)',
  'Gladiator (9)',
  'Uno de los nuestros',
  'El caballero oscuro',
  'Vengadores: Infinity War',
  'El Señor de los Anillos: La Comunidad del Anillo',
  'El Señor de los Anillos: Las dos torres',
  'Coco',
  'Intocable',
  'Star Wars: Episodio IV - Una nueva esperanza',
  'El Señor de los Anillos: El retorno del Rey',
  'Star Wars : Episodio V - El imperio contraataca',
  'El pianista',
];
const PRODUCT_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

// ----------------------------------------------------------------------

const products = [...Array(20)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/static/mock-images/products/product_${setIndex}.jpg`,
    name: PRODUCT_NAME[index],
    price: faker.datatype.number({ min: 50000, max: 400000, precision: 0.01 }),
    priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 20000, max: 40000, precision: 0.01 }),
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    status: sample(['sale', 'new', '', '']),
  };
});

export default products;
