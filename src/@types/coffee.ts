import Americano from "../assets/americano.png";
import Arabe from "../assets/arabe.png";
import AoLeite from "../assets/cafe_com_leite.png";
import CafeGelado from "../assets/cafe_gelado.png";
import Capuccino from "../assets/capuccino.png";
import ChocolateQuente from "../assets/chocolate_quente.png";
import Cubano from "../assets/cubano.png";
import ExpressoCremoso from "../assets/expresso_cremoso.png";
import Expresso from "../assets/expresso.png";
import Havaiano from "../assets/havaiano.png";
import Irlandes from "../assets/irlandês.png";
import Latte from "../assets/latte.png";
import Macchiato from "../assets/macchiato.png";
import Mocaccino from "../assets/mochaccino.png";

export type Coffee = {
  name: string;
  description: string;
  price: number;
  image: string;
  id: number;
  categories: string[];
};

export const coffees: Coffee[] = [
  {
    id: 1,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    image: Expresso,
    categories: ["tradicional", "com leite"],
  },

  {
    id: 2,
    name: "Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    image: Americano,
    categories: ["tradicional"],
  },

  {
    id: 3,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    image: ExpressoCremoso,
    categories: ["tradicional"],
  },

  {
    id: 4,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    image: CafeGelado,
    categories: ["tradicional", "gelado"],
  },

  {
    id: 5,
    name: "Café com leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
    image: AoLeite,
    categories: ["tradicional", "com leite"],
  },

  {
    id: 6,
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    image: Latte,
    categories: ["tradicional", "com leite"],
  },

  {
    id: 7,
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    image: Capuccino,
    categories: ["tradicional", "com leite"],
  },

  {
    id: 8,
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
    image: Macchiato,
    categories: ["tradicional", "com leite"],
  },

  {
    id: 9,
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    image: Mocaccino,
    categories: ["tradicional", "com leite"],
  },

  {
    id: 10,
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    image: ChocolateQuente,
    categories: ["especial", "com leite"],
  },

  {
    id: 11,
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    image: Cubano,
    categories: ["especial", "alcoólico", "gelado"],
  },

  {
    id: 12,
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
    image: Havaiano,
    categories: ["especial"],
  },

  {
    id: 13,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
    image: Arabe,
    categories: ["especial"],
  },

  {
    id: 14,
    name: "Irlandês ",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
    image: Irlandes,
    categories: ["especial"],
  },
];
