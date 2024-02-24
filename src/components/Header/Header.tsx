import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo-coffee.svg'

export function Header() {
  return (
    <header className="flex justify-between py-8 items-center">
      <img src={logo} alt="Logo da Coffe Delivery" />
      <div className="">
        <div className="flex justify-center gap-3">
          <div className="flex bg-purple-light px-2 py-[10px] gap-1 rounded-md">
            <MapPin size={22} weight="fill" className="text-purple-normal" />
            <span className="text-purple-dark">Laguna, SC</span>
          </div>
          <div className="flex items-center bg-yellow-light p-2 rounded-md">
            <ShoppingCart
              size={22}
              weight="fill"
              className="text-yellow-dark cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
