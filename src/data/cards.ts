import coffee_1 from '../assets/coffee_1.png'
import coffee_2 from '../assets/coffee_2.png'
import coffee_3 from '../assets/coffee_3.png'
import coffee_4 from '../assets/coffee_4.png'

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
]