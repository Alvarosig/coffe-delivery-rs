import { Minus, Plus, ShoppingCart } from "phosphor-react"
import { Product, useCart } from "../../../../context/CartContext"
import { Link } from "react-router-dom"

interface BuyProps {
  product: Product
}

export function Buy({ product }: BuyProps) {
  const formatedPrice = product.price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  })

  const { handleSubtractProductToCart, handleAddProductToCart, cartData } =
    useCart()
  const cartItem = cartData.find((item) => item.id === product.id)

  return (
    <div className="flex flex-row max-w-52 items-center gap-6 mt-2">
      <div className="w-[67px]">
        <p className="font-sans font-normal text-sm text-base-text leading-tight">
          R$
          <span className="pl-1 font-baloo font-extrabold text-2xl text-base-text leading-tight">
            {formatedPrice}
          </span>
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <div className="flex flex-row bg-base-button rounded-md w-[72px] p-2 gap-2 justify-center items-center">
          <button
            type="button"
            onClick={() => handleSubtractProductToCart(product)}
          >
            <Minus
              size={14}
              weight="bold"
              className="font-sans text-purple-normal cursor-pointer hover:text-purple-dark"
            />
          </button>
          <span className="font-sans text-base text-base-title select-none">
            {cartItem ? cartItem.quantity : 0}
          </span>
          <button type="button" onClick={() => handleAddProductToCart(product)}>
            <Plus
              size={14}
              weight="bold"
              className="font-sans text-purple-normal cursor-pointer hover:text-purple-dark"
            />
          </button>
        </div>
        <Link to="/checkout">
          <button
            type="button"
            className="flex items-center justify-center size-[38px] p-2 rounded-md bg-purple-dark cursor-pointer hover:bg-purple-normal"
          >
            <ShoppingCart size={19} weight="fill" className="text-base-card" />
          </button>
        </Link>
      </div>
    </div>
  )
}
