import { MapPin, ShoppingCart } from "phosphor-react"

import logo from "../../assets/logo-coffee.svg"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <div className="max-w-[1440px] px-40 m-auto">
      <header className="flex justify-between py-8 items-center">
        <Link to="/">
          <img src={logo} alt="Logo da Coffe Delivery" className="cursor-pointer" />
        </Link>
        <div className="flex justify-center gap-3">
          <div className="flex flex-row items-center bg-purple-light px-2 py-[10px] h-[38px] gap-1 rounded-md">
            <MapPin size={22} weight="fill" className="text-purple-normal" />
            <span className="text-purple-dark">Laguna, SC</span>
          </div>
          <Link to="/checkout">
            <div className="flex items-center justify-center bg-yellow-light size-[38px] p-2 rounded-md cursor-pointer">
              <ShoppingCart
                size={22}
                weight="fill"
                className="text-yellow-dark"
              />
            </div>
          </Link>
        </div>
      </header>
    </div>
  )
}
