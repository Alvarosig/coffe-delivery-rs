import coffee_1 from '../assets/coffee_1.png'
import coffee_2 from '../assets/coffee_2.png'
import coffee_3 from '../assets/coffee_3.png'
import coffee_4 from '../assets/coffee_4.png'
import coffee_5 from '../assets/coffe_5.png'
import coffee_6 from '../assets/coffe_6.png'
import coffee_7 from '../assets/coffe_7.png'
import coffee_8 from '../assets/coffe_8.png'
import coffee_9 from '../assets/coffe_9.png'
import coffee_10 from '../assets/coffe_10.png'
import coffee_11 from '../assets/coffe_11.png'
import coffee_12 from '../assets/coffe_12.png'
import coffee_13 from '../assets/coffe_13.png'
import coffee_14 from '../assets/coffe_14.png'

export const card = [
  {
    id: crypto.randomUUID(),
    img: coffee_1,
    alt: "Café Expresso Tradicional",
    labels: [
      { id: 1, text: "TRADICIONAL" },
    ],
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.90,
  },
  {
    id: crypto.randomUUID(),
    img: coffee_2,
    alt: "Café Expresso Americano",
    labels: [
      { id: 1, text: "TRADICIONAL" },
    ],
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 8.90,
  },
  {
    id: crypto.randomUUID(),
    img: coffee_3,
    alt: "Café Expresso Cremoso",
    labels: [
      { id: 1, text: "TRADICIONAL" },
    ],
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 12.90,
  },
  {
    id: crypto.randomUUID(),
    img: coffee_4,
    alt: "Café Expresso Gelado",
    labels: [
      { id: 1, text: "TRADICIONAL" },
      { id: 2, text: "GELADO" }
    ],
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.90,
  },
  {
    id: crypto.randomUUID(),
    img: coffee_5,
    alt: "Café com Leite",
    labels: [
      { id: 1, text: "TRADICIONAL" },
      { id: 2, text: "COM LEITE" }
    ],
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 11.90,
  },
  {
    id: crypto.randomUUID(),
    img: coffee_6,
    alt: "Latte",
    labels: [
      { id: 1, text: "TRADICIONAL" },
      { id: 2, text: "COM LEITE" }
    ],
    title: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 14.90,
  },
  {
    id: crypto.randomUUID(),
    img: coffee_7,
    alt: "Capuccino",
    labels: [
      { id: 1, text: "TRADICIONAL" },
      { id: 2, text: "COM LEITE" }
    ],
    title: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 15.90,
  },
  {
    id: crypto.randomUUID(),
    img: coffee_8,
    alt: "Macchiato",
    labels: [
      { id: 1, text: "TRADICIONAL" },
      { id: 2, text: "COM LEITE" }
    ],
    title: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 12.90,
  },
  {
    id: crypto.randomUUID(),
    img: coffee_9,
    alt: "Mocaccino",
    labels: [
      { id: 1, text: "TRADICIONAL" },
      { id: 2, text: "COM LEITE" }
    ],
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 14.90,
  },
  {
    id: crypto.randomUUID(),
    img: coffee_10,
    alt: "Chocolate Quente",
    labels: [
      { id: 1, text: "ESPECIAL" },
      { id: 2, text: "COM LEITE" }
    ],
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 15.90,
  },
  {
    id: crypto.randomUUID(),
    img: coffee_11,
    alt: "Cubano",
    labels: [
      { id: 1, text: "ESPECIAL" },
      { id: 2, text: "ALCOÓLICO" },
      { id: 3, text: "GELADO"}
    ],
    title: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 17.90,
  },
  {
    id: crypto.randomUUID(),
    img: coffee_12,
    alt: "Havaiano",
    labels: [
      { id: 1, text: "ESPECIAL" },
    ],
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 16.90,
  },
  {
    id: crypto.randomUUID(),
    img: coffee_13,
    alt: "Café Árabe",
    labels: [
      { id: 1, text: "ESPECIAL" },
    ],
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 17.90,
  },
  {
    id: crypto.randomUUID(),
    img: coffee_14,
    alt: "Café Irlandês",
    labels: [
      { id: 1, text: "ESPECIAL" },
      { id: 2, text: "ALCOÓLICO" }
    ],
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantily",
    price: 18.90,
  },
]