import Americano from '../assets/americano.png'
import Arabe from '../assets/arabe.png'
import AoLeite from '../assets/cafe_com_leite.png'
import CafeGelado from '../assets/cafe_gelado.png'
import Capuccino from '../assets/capuccino.png'
import ChocolateQuente from '../assets/chocolate_quente.png'
import Cubano from '../assets/cubano.png'
import ExpressoCremoso from '../assets/expresso_cremoso.png'
import Expresso from '../assets/expresso.png'
import Havaiano from '../assets/havaiano.png'
import Irlandes from '../assets/irlandês.png'
import Latte from '../assets/latte.png'
import Macchiato from '../assets/macchiato.png'
import Mocaccino from '../assets/mochaccino.png'

export const coffees = [
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    image: Expresso,
    id: 'express',
    categories: ['tradicional', 'com leite'],
  },

  {
    name: 'Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    image: Americano,
    id: 'american',
    categories: ['tradicional'],
  },

  {
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    image: ExpressoCremoso,
    id: 'express-american',
    categories: ['tradicional'],
  },

  {
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    image: CafeGelado,
    id: 'cold-express',
    categories: ['tradicional', 'gelado'],
  },

  {
    name: 'Café com leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    image: AoLeite,
    id: 'au-latte',
    categories: ['tradicional', 'com leite'],
  },

  {
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    image: Latte,
    id: 'latte',
    categories: ['tradicional', 'com leite'],
  },

  {
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    image: Capuccino,
    id: 'capuccino',
    categories: ['tradicional', 'com leite'],
  },

  {
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    image: Macchiato,
    id: 'macchiato',
    categories: ['tradicional', 'com leite'],
  },

  {
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    image: Mocaccino,
    id: 'mocaccino',
    categories: ['tradicional', 'com leite'],
  },

  {
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    image: ChocolateQuente,
    id: 'hot-chocolate',
    categories: ['especial', 'com leite'],
  },

  {
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    image: Cubano,
    id: 'cuban',
    categories: ['especial', 'alcoólico', 'gelado'],
  },

  {
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    image: Havaiano,
    id: 'hawaiian',
    categories: ['especial'],
  },

  {
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    image: Arabe,
    id: 'arabian',
    categories: ['especial'],
  },

  {
    name: 'Irlandês ',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    image: Irlandes,
    id: 'irish',
    categories: ['especial'],
  },
]

export type Coffee = typeof coffees[0]
