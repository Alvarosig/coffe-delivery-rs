import { createContext, useContext, ReactNode, useState, useMemo } from "react"
import { defaultProducts } from "../data/products"

interface CartProviderProps {
  children: ReactNode
}

interface CartItem {
  id: number
  img: string
  title: string
  price: number
  quantity: number
}

export interface Product extends Omit<CartItem, "quantity"> {
  labels: {
    id: number
    text: string
  }[]
  alt: string
  description: string
}

interface ContextData {
  cartData: CartItem[]
  setCartData: React.Dispatch<React.SetStateAction<CartItem[]>>
  products: Product[]
  handleAddProductToCart: (item: Product | CartItem) => void
  handleSubtractProductToCart: (item: Product | CartItem) => void
  handleRemoveProductFromCart: (id: number) => void
}

const CartContext = createContext<ContextData>({} as ContextData)

function CartProvider({ children }: CartProviderProps) {
  const [cartData, setCartData] = useState<CartItem[]>([])

  function handleAddProductToCart(item: Product | CartItem) {
    const updatedCartData = [...cartData]
    const itemOnCart = updatedCartData.find((i) => i.id === item.id)

    if (itemOnCart) {
      itemOnCart.quantity = itemOnCart.quantity + 1
      setCartData(updatedCartData)
      return
    }

    const newItem: CartItem = {
      id: item.id,
      img: item.img,
      price: item.price,
      quantity: 0,
      title: item.title,
    }

    updatedCartData.push(newItem)
    setCartData(updatedCartData)
  }

  function handleSubtractProductToCart(item: Product | CartItem) {
    let updatedCartData = [...cartData]
    const itemOnCart = updatedCartData.find((i) => i.id === item.id)

    if (itemOnCart) {
      itemOnCart.quantity = itemOnCart.quantity - 1

      const shouldDeleteItem = itemOnCart.quantity <= 0
      if (shouldDeleteItem) {
        updatedCartData = updatedCartData.filter((i) => i.id !== item.id)
      }
      setCartData(updatedCartData)
      return
    }
  }

  function handleRemoveProductFromCart(id: number) {
    const updatedCardData = cartData.filter(item => item.id !== id)
    setCartData(updatedCardData)
  }

  const products = useMemo(() => defaultProducts, [])
  const contextValue: ContextData = {
    cartData,
    setCartData,
    products,
    handleAddProductToCart,
    handleSubtractProductToCart,
    handleRemoveProductFromCart
  }

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}

const useCart = (): ContextData => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("Você não pode usar esse hook fora do contexto")
  }

  return context
}

export { CartProvider, useCart }
