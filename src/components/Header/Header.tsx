import { MapPin, ShoppingCart } from "phosphor-react"

import logo from "../../assets/logo-coffee.svg"
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"

export function Header() {
  const { cartData } = useCart()
  const cartItemsCount = cartData.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div className="sticky top-0 h-[104px] bg-background z-10">
      <div className="max-w-[1440px] px-40 m-auto max-md:px-16 max-[425px]:px-3">
        <header className="flex justify-between py-8 items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Logo da Coffe Delivery"
              className="cursor-pointer"
            />
          </Link>
          <div className="flex justify-center gap-3">
            <div className="flex flex-row items-center bg-purple-light px-2 py-[10px] h-[38px] gap-1 rounded-md">
              <MapPin size={22} weight="fill" className="text-purple-normal" />
              <span className="text-purple-dark">Laguna, SC</span>
            </div>
            <Link to="/checkout" className="relative">
              <div className="flex items-center justify-center bg-yellow-light size-[38px] p-2 rounded-md cursor-pointer">
                <ShoppingCart
                  size={22}
                  weight="fill"
                  className="text-yellow-dark"
                />
                <span className="absolute -top-3 -right-3 font-sans text-xs text-white px-2 py-1 rounded-full bg-yellow-dark">
                  {cartItemsCount}
                </span>
              </div>
            </Link>
          </div>
        </header>
      </div>
    </div>
  )
}
